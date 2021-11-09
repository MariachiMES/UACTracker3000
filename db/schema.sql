DROP DATABASE IF EXISTS UAC_db;
CREATE DATABASE UAC_db;

USE UAC_db;

-- CREATE TABLE user (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   users VARCHAR(35) NOT NULL
-- );

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name_ VARCHAR (50) NOT NULL,   
    email VARCHAR (50) NOT NULL,
    password_ VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);
