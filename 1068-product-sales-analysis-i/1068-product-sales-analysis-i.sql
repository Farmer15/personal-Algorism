-- Write your PostgreSQL query statement below
SELECT product_name, year, sales.price FROM Sales
    JOIN Product
    ON Product.product_id = Sales.product_id