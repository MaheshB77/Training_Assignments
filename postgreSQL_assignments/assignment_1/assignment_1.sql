-- Database: ORG

/*
	Creating the database called ORG
*/
CREATE DATABASE "ORG"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
/*
	Creating the table "Worker"
*/
CREATE TABLE Worker (
	WORKER_ID SERIAL PRIMARY KEY,
	FIRST_NAME CHAR(25),
	LAST_NAME CHAR(25),
	SALARY INT,
	JOINING_DATE TIMESTAMP,
	DEPARTMENT CHAR(25)
);

/*
	Inserting the data into the table
*/
INSERT INTO Worker 
	(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
		(001, 'Monika', 'Arora', 100000, '2014-02-20 09:00:00', 'HR'),
		(002, 'Niharika', 'Verma', 80000, '2014-06-11 09:00:00', 'Admin'),
		(003, 'Vishal', 'Singhal', 300000, '2014-02-20 09:00:00', 'HR'),
		(004, 'Amitabh', 'Singh', 500000, '2014-02-20 09:00:00', 'Admin'),
		(005, 'Vivek', 'Bhati', 500000, '2014-06-11 09:00:00', 'Admin'),
		(006, 'Vipul', 'Diwan', 200000, '2014-06-11 09:00:00', 'Account'),
		(007, 'Satish', 'Kumar', 75000, '2014-01-20 09:00:00', 'Account'),
		(008, 'Geetika', 'Chauhan', 90000, '2014-04-11 09:00:00', 'Admin');


/*
	Creating Bonus table
*/
CREATE TABLE Bonus (
	WORKER_REF_ID INT,
	BONUS_AMOUNT INT,
	BONUS_DATE TIMESTAMP,
	FOREIGN KEY (WORKER_REF_ID)
	REFERENCES Worker(WORKER_ID)
    ON DELETE CASCADE
);


/*
	Inserting data into Bonus table
*/
INSERT INTO Bonus 
	(WORKER_REF_ID, BONUS_AMOUNT, BONUS_DATE) VALUES
		(001, 5000, '16-02-20'),
		(002, 3000, '16-06-11'),
		(003, 4000, '16-02-20'),
		(001, 4500, '16-02-20'),
		(002, 3500, '16-06-11');


/*
	Creating Title table
*/
CREATE TABLE Title (
	WORKER_REF_ID INT,
	WORKER_TITLE CHAR(25),
	AFFECTED_FROM TIMESTAMP,
	FOREIGN KEY (WORKER_REF_ID)
		REFERENCES Worker(WORKER_ID)
        ON DELETE CASCADE
);


/*
	Inserting data into Title table
*/
INSERT INTO Title 
	(WORKER_REF_ID, WORKER_TITLE, AFFECTED_FROM) VALUES
 (001, 'Manager', '2016-02-20 00:00:00'),
 (002, 'Executive', '2016-06-11 00:00:00'),
 (008, 'Executive', '2016-06-11 00:00:00'),
 (005, 'Manager', '2016-06-11 00:00:00'),
 (004, 'Asst. Manager', '2016-06-11 00:00:00'),
 (007, 'Executive', '2016-06-11 00:00:00'),
 (006, 'Lead', '2016-06-11 00:00:00'),
 (003, 'Lead', '2016-06-11 00:00:00');


/*
	**********	ANSWERS  **********
*/

-- Q.1 Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.
SELECT first_name as WORKER_NAME FROM Worker;

-- Q.2 Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.
SELECT upper(first_name) from Worker;

-- Q.3 Write an SQL query to fetch unique values of DEPARTMENT from Worker table.
SELECT distinct department from Worker;

-- Q.4 Write an SQL query to print the first three characters of  FIRST_NAME from Worker table
SELECT substring(first_name from 1 for 3) from Worker;

-- Q.5 Write an SQL query to find the position of the alphabet (‘a’) in the first name column ‘Amitabh’ from Worker table.
SELECT position('a' in first_name) FROM Worker
WHERE first_name = 'Amitabh';

-- Q.6 Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.
SELECT trim(trailing ' ' from first_name) from Worker;

-- Q.7 Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.
SELECT trim(leading ' ' from department) from Worker;

-- Q.8 Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length.
SELECT DISTINCT char_length(department) from Worker;

-- Q.9 Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.
SELECT replace(first_name,'a','A') from Worker;

-- Q.10 Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME. A space char should separate them.
-- SELECT concat(first_name,last_name) as COMPLETE_NAME from Worker;
SELECT first_name || ' ' || last_name as COMPLETE_NAME from Worker;

-- Q.11 Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending.
SELECT first_name from Worker
ORDER BY first_name;

-- Q.12 Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending and DEPARTMENT Descending.
SELECT * FROM Worker
ORDER BY first_name ASC, department DESC;

-- Q.13 Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table.
SELECT * FROM Worker
WHERE first_name = 'Vipul' OR first_name = 'Satish';

-- Q.14 Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.
SELECT * FROM Worker
WHERE (NOT first_name = 'Vipul') AND (NOT first_name = 'Satish'); 
-- SELECT * FROM Worker
-- WHERE first_name NOT IN ('Vipul', 'Satish');

-- Q.15  Write an SQL query to print details of Workers with DEPARTMENT name as “Admin”.
SELECT * from Worker
WHERE department = 'Admin';

-- Q.16 Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.
SELECT * FROM Worker
WHERE first_name LIKE '%a%';

-- Q.17 Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.
SELECT * FROM Worker
WHERE trim(first_name) LIKE '%a';	
-- WHERE trim(first_name) SIMILAR TO '%a';
--NOTE - We have to trim() because '%a' will match with 25th char(length of first_name) and 25th char is not assigned

-- Q.18  Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.
SELECT * FROM Worker
WHERE (trim(first_name) LIKE '%h') AND (char_length(first_name)=6);

-- Q.19 Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.
SELECT * FROM Worker
WHERE salary BETWEEN 100000 AND 500000
-- WHERE salary >= 100000 AND salary <= 500000

-- Q.20 Write an SQL query to print details of the Workers who have joined in Feb’2014.
SELECT * FROM Worker
WHERE to_char(joining_date,'yyyy-mm') = '2014-02';
-- WHERE (extract(month FROM joining_date) = 2) AND (extract(year FROM joining_date)=2014);


-- Q.21  Write an SQL query to fetch the count of employees working in the department ‘Admin’.
SELECT count(first_name) FROM Worker
WHERE department = 'Admin';

-- Q.22 Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.
SELECT first_name || ' ' || last_name as worker_name,salary FROM Worker
WHERE salary >= 50000 AND salary <= 100000;

-- Q.23 Write an SQL query to fetch the no. of workers for each department in the descending order.
SELECT department, count(first_name) AS total_workers FROM Worker
GROUP BY department
ORDER BY total_workers DESC;

-- Q.24 Write an SQL query to print details of the Workers who are also Managers.
SELECT first_name, worker_title FROM Worker JOIN Title
ON Worker.worker_id = Title.worker_ref_id
WHERE Title.worker_title = 'Manager';

-- Q.25 Write an SQL query to fetch duplicate records having matching data in some fields of a table.
SELECT worker_title, affected_from, COUNT(*) as repeated_value FROM Title
GROUP BY worker_title, affected_from
HAVING COUNT(*)>1;

-- Q.26  Write an SQL query to show only odd rows from a table.
SELECT * FROM Worker
WHERE NOT mod(worker_id,2)=0;

-- Q.27 Write an SQL query to show only even rows from a table.
SELECT * FROM Worker
WHERE mod(worker_id,2)=0;

-- Q.28 Write an SQL query to clone a new table from another table.
SELECT * INTO duplicate_workers FROM Worker

-- Q.29 Write an SQL query to fetch intersecting records of two tables.
SELECT salary FROM Worker
INTERSECT
SELECT bonus_amount FROM bonus

-- Q.30 Write an SQL query to show records from one table that another table does not have.
SELECT salary FROM Worker
EXCEPT
SELECT bonus_amount FROM Bonus;

-- Q.31  Write an SQL query to show the current date and time.
SELECT now();

-- Q.32 Write an SQL query to show the top n (say 10) records of a table.
SELECT * FROM Worker
FETCH FIRST 3 ROWS ONLY;
-- LIMIT 3;

-- Q.33 Write an SQL query to determine the nth (say n=5) highest salary from a table.
SELECT *
FROM   (SELECT *, dense_rank() OVER (ORDER BY salary DESC) AS salary_rank 
        FROM   worker) as salaries_by_desc
WHERE  salary_rank = 5;
-- If salaries are same then dense_rank() will give same row number to those salaries
-- therefore we are using dense_rank() instead of row_number()


-- Q.34 Write an SQL query to determine the 5th highest salary without using TOP or limit method.
SELECT *
FROM   (SELECT *, dense_rank() OVER (ORDER BY salary DESC) AS salary_rank 
        FROM   worker) as salaries_by_desc
WHERE  salary_rank = 5;

-- Q.35 Write an SQL query to fetch the list of employees with the same salary.
SELECT w1.* FROM Worker w1, Worker w2 
WHERE (w1.salary = w2.salary) AND (w1.worker_id != w2.worker_id);

-- Q.36  Write an SQL query to show the second highest salary from a table.
SELECT max(salary) FROM Worker;

-- Q.37 Write an SQL query to show one row twice in results from a table.
select first_name, department from worker w1
union all 
select first_name, department from Worker w2
-- Note - Each row is repeating twise but order will not be same because we are using "union all"

-- Q.38 Write an SQL query to fetch intersecting records of two tables.
SELECT salary FROM Worker
INTERSECT
SELECT bonus_amount FROM Bonus
-- Will not show any row because there is no "salary" which is equal to "bonus_amount"

-- Q.39 Write an SQL query to fetch the first 50% records from a table.
SELECT * FROM Worker
WHERE worker_id <= (
					SELECT count(first_name)/2 FROM Worker
					);
-- Using inner query to first calculate the 50% records

-- Q.40 Write an SQL query to fetch the departments that have less than five people in it.
SELECT department , count(first_name) FROM Worker
GROUP BY department
HAVING count(first_name)<5;

-- Q.41 Write an SQL query to show all departments along with the number of people in there.
SELECT department, count(first_name) FROM Worker
GROUP BY department;

-- Q.42 Write an SQL query to show the last record from a table.
SELECT * from Worker
ORDER BY worker_id DESC
FETCH FIRST 1 ROWS ONLY;

-- Q.43 Write an SQL query to fetch the first row of a table.
SELECT * FROM Worker
FETCH FIRST 1 ROWS ONLY;

-- Q.44 Write an SQL query to fetch the last five records from a table.
SELECT * FROM Worker
WHERE worker_id > (
	SELECT count(worker_id)-5 FROM Worker
);

-- Q.45 Write an SQL query to print the name of employees having the highest salary in each department.
SELECT first_name, department FROM worker
WHERE salary IN (
	SELECT max(salary) FROM Worker
	GROUP BY department);

-- Q.46 Write an SQL query to fetch three max salaries from a table.
SELECT DISTINCT salary FROM Worker
ORDER BY salary DESC
FETCH FIRST 3 ROWS ONLY;

-- Q.47 Write an SQL query to fetch three min salaries from a table.
SELECT DISTINCT salary FROM Worker
ORDER BY salary
FETCH FIRST 3 ROWS ONLY;

-- Q.48 Write an SQL query to fetch nth max salaries from a table.
SELECT *
FROM   (SELECT *, dense_rank() OVER (ORDER BY salary DESC) AS salary_rank 
        FROM   worker) as salaries_by_desc
WHERE  salary_rank = 5;
-- We can calculate nth max salary by putting n instead of 5

-- Q.49 Write an SQL query to fetch departments along with the total salaries paid for each of them.
SELECT department, sum(salary) FROM Worker
GROUP BY department

-- Q.50 Write an SQL query to fetch the names of workers who earn the highest salary.
SELECT first_name || ' ' || last_name, salary FROM Worker
WHERE salary = (
	SELECT max(salary) FROM Worker
)


/*
	Testing purpose
*/
SELECT * FROM Worker;
SELECT * FROM Bonus;
SELECT * FROM Title;
SELECT * FROM duplicate_workers;



















