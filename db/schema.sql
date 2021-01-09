-- This is used as a quick reference to run in MySQL to created our database.

DROP DATABASE IF EXISTS gardening_DB;
CREATE database gardening_DB;

USE gardening_DB;

CREATE TABLE plots (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  plot_name VARCHAR(30) NOT NULL,
  plot_rows INT(10) NOT NULL,
  plot_columns INT (10) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

CREATE TABLE plants (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  plant_name VARCHAR(30) NOT NULL,
  plant_facts VARCHAR(30) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);

CREATE TABLE zip_codes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  zip_code VARCHAR(5) NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME NOT NULL
);