DROP DATABASE IF EXISTS articles_db;

CREATE DATABASE articles_db;

CREATE TABLE articles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    body VARCHAR(255),
    url VARCHAR(255),
    technologies VARCHAR(),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);