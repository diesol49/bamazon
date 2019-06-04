-- DROP THE DATABASE IF IT ALREADY EXISTS --
DROP DATABASE IF EXISTS bamazon_db;

-- CREATE OUR bamazon_db DATABASE --
CREATE DATABASE bamazon_db;

-- SELECT OUR DATABASE TO USE --
USE bamazon_db;
-- WE THEN CREATE OUT TABLE --
CREATE TABLE products (
    item_id INT(10) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT(10),
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
    );