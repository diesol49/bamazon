-- DROP THE DATABASE IF IT ALREADY EXISTS --
DROP DATABASE IF EXISTS bamazon_db;

-- CREATE OUR bamazon_db DATABASE --
CREATE DATABASE bamazon_db;

-- SELECT OUR DATABASE TO USE --
USE bamazon_db;
-- WE THEN CREATE OUT TABLE --
CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (item_id)
    );