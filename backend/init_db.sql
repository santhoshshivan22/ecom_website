-- Run this in pgAdmin Query Tool or psql to create the database and table manually
-- Connect to postgres database first

-- Create database if it doesn't exist
SELECT 'CREATE DATABASE ecom_db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ecom_db')\gexec

-- Connect to ecom_db and create table
\c ecom_db

CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

SELECT 'Table contact_submissions created successfully' AS status;
