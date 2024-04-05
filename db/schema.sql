DROP DATABASE IF EXISTS radlibs_db;

CREATE DATABASE radlibs_db;

USE radlibs_db;

CREATE TABLE radlibs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    adjective VARCHAR(255),
    noun VARCHAR(255),
    verb VARCHAR(255),
    adverb VARCHAR(255)
);