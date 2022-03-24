CREATE DATABASE IF NOT EXISTS volcano;

USE volcano;

CREATE TABLE IF NOT EXISTS users (
	UserID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	FirstName varchar(50),
	LastName varchar(50),
	Role varchar(10)
);

INSERT INTO users (LastName, FirstName, Role) VALUES ('admin' ,'super', 'Admin');