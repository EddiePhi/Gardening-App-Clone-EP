-- This is used as a quick reference to run in MySQL to created our database.

DROP DATABASE IF EXISTS gardening_DB;
CREATE database gardening_DB;

USE gardening_DB;

CREATE TABLE plants (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  plant_name VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  seed_ct INT (10) NOT NULL
);