-- Write your PostgreSQL query statement below
SELECT employees.name AS Employee
FROM Employee employees
INNER JOIN Employee managers
ON employees.managerId = managers.id AND employees.salary > managers.salary