DROP DATABASE IF EXISTS radlibs_db;

CREATE DATABASE radlibs_db;

USE radlibs_db;

CREATE TABLE radlibs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_input VARCHAR(255)
);