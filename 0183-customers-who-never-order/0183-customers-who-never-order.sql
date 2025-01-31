-- Write your PostgreSQL query statement below
SELECT name AS Customers FROM Customers
LEFT JOIN orders ON Customers.id = orders.customerId
WHERE orders.customerId IS NULL