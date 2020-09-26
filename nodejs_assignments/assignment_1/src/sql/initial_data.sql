CREATE DATABASE liviano;
use liviano;

-- Creating all required tables
create table student_information(student_rollno int, student_name varchar(50), student_marks int);
create table employee_information(employee_no int, employee_name varchar(50), employee_salary int);
create table leave_information(leave_id int, employee_name varchar(50), leave_reason varchar(255), leave_date date);

-- Inserting some dummy data
insert into student_information(student_rollno, student_name, student_marks) values (1, "Mahesh", 90);
insert into student_information(student_rollno, student_name, student_marks) values (2, "Aishwarya", 95);
insert into student_information(student_rollno, student_name, student_marks) values (3, "Shubhangi", 99);

insert into employee_information(employee_no, employee_name, employee_salary) values(1, "Pramila", 35000);
insert into employee_information(employee_no, employee_name, employee_salary) values(2, "Shashikant", 40000);
insert into employee_information(employee_no, employee_name, employee_salary) values(3, "Praniti", 45000);

insert into leave_information(leave_id, employee_name, leave_reason, leave_date) values(1, "Priyanka", "Feeling sick", "2020-06-24");
insert into leave_information(leave_id, employee_name, leave_reason, leave_date) values(2, "Bhumik", "Family reception", "2020-04-17");
insert into leave_information(leave_id, employee_name, leave_reason, leave_date) values(3, "Rohit", "Friends marraige", "2020-09-20");

-- Retrieving all data
select * from student_information;
select * from employee_information;
select * from leave_information;