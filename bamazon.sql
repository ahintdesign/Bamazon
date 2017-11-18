CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Bag of Apples', 'Produce', 5.75, 300),
('Milk', 'Dairy', 2.79, 500),
('Bread', 'Bakery', 3.57, 450),
('Eggs', 'Dairy', 2.29, 775),
('Frozen Mixed Veggies', 'Frozen', 5.24, 1000),
('Cereal', 'Breakfast', 4.93, 1000),
('Brown Rice', 'Grains', 1.99, 500),
('Sliced Turkey Breast', 'Deli', 5.67, 200),
('Peanut Butter', 'Condiments', 3.99, 600),
('Bottled Water', 'Beverages', 5.99, 1100)

show tables;

