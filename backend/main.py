from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import load_dotenv
import os
from contextlib import asynccontextmanager

from database import init_db, save_contact_submission, get_all_submissions

load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        await init_db()
        print("Database initialized successfully")
    except Exception as e:
        print(f"Warning: Database initialization failed: {e}")
        print("App will continue. Contact form submissions will fail until database is configured.")
    yield

app = FastAPI(title="Shopper's Stop API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mail_config = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
    MAIL_FROM_NAME=os.getenv("MAIL_FROM_NAME", "Shopper's Stop"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

    @field_validator('name')
    @classmethod
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Name must not be empty')
        return v.strip()

    @field_validator('subject')
    @classmethod
    def subject_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Subject must not be empty')
        return v.strip()

    @field_validator('message')
    @classmethod
    def message_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Message must not be empty')
        return v.strip()


@app.get("/submissions")
async def list_submissions():
    try:
        rows = await get_all_submissions()
        return {"success": True, "count": len(rows), "data": rows}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch submissions: {str(e)}"
        )


@app.get("/health")
async def health_check():
    return {"status": "ok"}


@app.post("/contact", status_code=status.HTTP_200_OK)
async def submit_contact(form: ContactForm):
    saved = False
    email_sent = False
    email_error = None

    try:
        await save_contact_submission({
            "name": form.name,
            "email": form.email,
            "subject": form.subject,
            "message": form.message,
        })
        saved = True
    except Exception as e:
        print(f"DB save failed: {e}")

    try:
        admin_email = os.getenv("ADMIN_EMAIL")
        email_body = f"""
You have received a new contact form submission from your website.

Name: {form.name}
Email: {form.email}
Subject: {form.subject}

Message:
{form.message}
"""
        message = MessageSchema(
            subject=f"[Contact Form] {form.subject}",
            recipients=[admin_email],
            body=email_body,
            subtype="plain",
        )
        fastmail = FastMail(mail_config)
        await fastmail.send_message(message)
        email_sent = True
    except Exception as e:
        email_error = str(e)
        print(f"Email send failed: {e}")

    return {
        "success": True,
        "message": "Your message has been sent successfully!",
        "saved_to_db": saved,
        "email_sent": email_sent,
        "email_error": email_error,
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
