# Write your MySQL query statement below

# CREATE VIEW Number_of_Orders AS
# select customer_number, COUNT(customer_number) as num_orders
# from Orders
# group by customer_number;

SELECT customer_number
from (select customer_number, COUNT(customer_number) as num_orders
from Orders
group by customer_number) as Number_of_Orders
Order by num_orders desc
LIMIT 1;
