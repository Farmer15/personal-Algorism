-- Write your PostgreSQL query statement below

SELECT name as NAME, sum(amount) as BALANCE
FROM Users
RIGHT OUTER JOIN Transactions
ON Users.account = Transactions.account
GROUP BY NAME
HAVING sum(amount) > 10000