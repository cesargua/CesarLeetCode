# Write your MySQL query statement below

# if rows are both 'Y' in low_fats nd recyclablre return those rows


select product_id from Products
where low_fats = 'Y' and recyclable = 'Y';

