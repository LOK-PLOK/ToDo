-- CREATE DATABASE todo;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed');
-- CREATE TYPE task_category AS ENUM ('work', 'personal', 'shopping', 'other');

-- CREATE TABLE tasks (
--     task_id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(user_id),
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     status task_status DEFAULT 'pending',
--     category task_category,
--     due_date DATE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);