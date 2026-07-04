import os
import asyncio
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")


async def get_connection():
    if not DATABASE_URL:
        raise RuntimeError("DATABASE_URL is not set in .env")
    import psycopg
    conn = await psycopg.AsyncConnection.connect(DATABASE_URL)
    return conn


async def init_db():
    conn = await get_connection()
    try:
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS contact_submissions (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        await conn.commit()
    finally:
        await conn.close()


async def save_contact_submission(data: dict):
    conn = await get_connection()
    try:
        await conn.execute(
            """
            INSERT INTO contact_submissions (name, email, subject, message)
            VALUES (%s, %s, %s, %s)
            """,
            (data["name"], data["email"], data["subject"], data["message"]),
        )
        await conn.commit()
    finally:
        await conn.close()


async def get_all_submissions():
    conn = await get_connection()
    try:
        async with conn.cursor() as cursor:
            await cursor.execute("""
                SELECT id, name, email, subject, message, created_at
                FROM contact_submissions
                ORDER BY created_at DESC
            """)
            rows = await cursor.fetchall()
            columns = [desc[0] for desc in cursor.description]
            return [dict(zip(columns, row)) for row in rows]
    finally:
        await conn.close()
