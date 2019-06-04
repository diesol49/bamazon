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

-- POPULATE TABLE WITH 10 DIFFERENT PRODUCTS WITH INFO --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ninja Air Fryer", "Kitchen", 72, 20),
    ("Bamazon Echo", "Electronics", 35, 10),
    ("Bamazon Fire TV", "Electronics", 50, 8),
    ("Half-Life 3", "Video Games", 60, 3),
    ("Xbox One X", "Video Games", 400, 10),
    ("Waterproof Colored Eyeliner", "Beauty", 12, 77),
    ("FENTY by Rihanna Foundation", "Beauty", 46, 18),
    ("Apple Mac Stand", "Electronics", 999, 100),
    ("Calphalon 4-Sided Cheese Grader", "Kitchen", 15, 33),
    ("SpongeBob Spatula Replica", "Kitchen", 800, 5);

    -- TO BRING UP OUR TABLE BENEATH THE CODE IN MYSQL --
    -- WE COULD USE THE FOLLOWING SHORTCUT --
    SELECT * FROM products;