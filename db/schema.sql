-- This is used as a quick reference to run in MySQL to created our database.

DROP DATABASE IF EXISTS gardening_DB;
CREATE database gardening_DB;

USE gardening_DB;

CREATE TABLE plots (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  plot_name VARCHAR(30) NOT NULL,
  plot_rows INT(10) NOT NULL,
  plot_columns INT (10) NOT NULL
);