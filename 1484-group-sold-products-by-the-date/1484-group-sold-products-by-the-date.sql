-- Write your PostgreSQL query statement below

SELECT A1.sell_date, count(DISTINCT A1.product) AS num_sold, STRING_AGG(DISTINCT A2.product, ',') AS products
FROM Activities A1
FULL OUTER JOIN Activities A2
ON A1.product = A2.product
GROUP BY A1.sell_date
ORDER BY A1.sell_date