-- Challenge 1
SELECT 
    DATE_FORMAT(created_at, '%M %D %Y') AS 'Earliest Date' 
FROM users
    ORDER BY created_at ASC LIMIT 1;
    

-- Challenge 2
SELECT * 
FROM users
    ORDER BY created_at ASC LIMIT 1;
    

-- Challenge 3
SELECT
    MONTHNAME(created_at) AS Month,
    COUNT(*) AS Count
FROM users
    GROUP BY Month 
    ORDER BY count DESC;

        
-- Challenge 4
SELECT
    COUNT(*) AS 'yahoo Users'
FROM users
    WHERE email LIKE '%@yahoo.com%';
    

-- Challenge 5
SELECT
    COUNT(*) AS 'Total Users',
    
    CASE 
        WHEN email LIKE '%@yahoo.com%' THEN 'yahoo'
        WHEN email LIKE '%@gmail.com%' THEN 'gmail'
        WHEN email LIKE '%@hotmail.com%' THEN 'hotmail'
        ELSE 'other'
    END AS  'Provider'
FROM users
    GROUP BY Provider
    ORDER BY `total users` DESC;
    