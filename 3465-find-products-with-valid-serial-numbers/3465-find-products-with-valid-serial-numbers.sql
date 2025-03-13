SELECT product_id, product_name, description 
FROM products
WHERE description ~ 'SN[0-9]{4}-[0-9]{4}([^0-9]|$)'
ORDER BY product_id;