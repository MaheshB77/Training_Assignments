const express = require("express");
const bodyParser = require("body-parser");
const StudentService = require("../services/student_service");
const EmployeeService = require("../services/employee_service");
const LeaveService = require("../services/leave_service");

const app = express();

/**
 * @author Mahesh
 */

// Middlewares
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

/**
 * Required services
 */
let studentService = new StudentService();
let employeeService = new EmployeeService();
let leaveService = new LeaveService();

/**
 * Testing homepage
 */
app.get("/", (req, res) => {
    res.send("Home");
});

/**
 * Student information CRUD operations
 */

/**
 * Get all students information
 * send a GET request like "localhost:9000/getAllStudentsInformation"
 */
app.get("/getAllStudentsInformation", async (req, res) => {
    let allStudentsInformation = await studentService.getAllStudentsInformationFromDatabase();
    res.send(allStudentsInformation);
});

/**
 * Get information of one student based on student_rollno
 * send a GET request like "localhost:9000/deleteStudent/3"
 */
app.get("/getStudentInformation/:rollno", async (req, res) => {
    let getStudentInformationResponse = await studentService.getStudentInformation(
        req.params.rollno
    );
    res.send(getStudentInformationResponse);
});

/**
 * Delete a student based on student_rollno
 * send a GET request like "localhost:9000/deleteStudent/3"
 */
app.get("/deleteStudentInformation/:rollno", async (req, res) => {
    let deleteStudentResponse = await studentService.deleteStudentInformation(
        req.params.rollno
    );
    res.send(deleteStudentResponse);
});

/**
 * Add a student
 * send a POST request consisting body as
 * {
 *      "student_rollno": 7,
 *      "student_name": "Mahesh",
 *      "student_marks": 90
 * }
 */
app.post("/addStudentInformation", async (req, res) => {
    let studentInformation = req.body;
    let addStudentResponse = await studentService.addStudentInformation(
        studentInformation
    );
    res.send(addStudentResponse);
});

/**
 * Update a student information
 * send a POST request containing a body as given below
 * {
 *      "student_rollno": 3,
 *      "student_name": "Shubhangi",
 *      "student_marks": 80
 * }
 */
app.post("/updateStudentInformation", async (req, res) => {
    let updateStudentData = req.body;
    let updateStudentResponse = await studentService.updateStudentInformation(
        updateStudentData
    );
    res.send(updateStudentResponse);
});

/**
 * Employee information CRUD operations
 */

/**
 * Get information of all the Employees
 * send a GET request as "localhost:9000/getAllEmployeesInformation"
 */
app.get("/getAllEmployeesInformation", async (req, res) => {
    let allEmployeesInformation = await employeeService.getAllEmployeesInformation();
    res.send(allEmployeesInformation);
});

/**
 * Get information of one Employee based on employee_id
 * send a GET request like "localhost:9000/getEmployeeInformation/2"
 */
app.get("/getEmployeeInformation/:employee_id", async (req, res) => {
    let employeeInformation = await employeeService.getEmployeeInformation(
        req.params.employee_id
    );
    res.send(employeeInformation);
});

/**
 * Delete an Employee from databse based on employee_id
 * send a GET request like "localhost:9000/deleteEmployeeInformation/3"
 */
app.get("/deleteEmployeeInformation/:employee_id", async (req, res) => {
    let deleteEmployeeResponse = await employeeService.deleteEmployeeInformation(
        req.params.employee_id
    );
    res.send(deleteEmployeeResponse);
});

/**
 * Add a Employee
 * send a POST request containing body as
 * {
 *      "employee_no": 5,
 *      "employee_name": "Priyanka",
 *      "employee_salary": 30000
 * }
 */
app.post("/addEmployeeInformation", async (req, res) => {
    let employeeInformation = req.body;
    let addEmployeeResponse = await employeeService.addEmployeeInformation(
        employeeInformation
    );
    res.send(addEmployeeResponse);
});

/**
 * Update a employee information
 * send a POST request containing a body as given below
 * {
 *      "employee_no": 5,
 *      "employee_name": "Priyanka",
 *      "employee_salary": 70000
 * }
 */
app.post("/updateEmployeeInformation", async (req, res) => {
    let updatedEmployeeInformation = req.body;
    let updateEmployeeResponse = await employeeService.updateEmployeeInformation(
        updatedEmployeeInformation
    );
    res.send(updateEmployeeResponse);
});

/**
 * Leave information CRUD operations
 */

/**
 * Get all Leaves information
 * Send a GET request like "localhost:9000/getAllLeavesInformation"
 */
app.get("/getAllLeavesInformation", async (req, res) => {
    let allLeavesInformationResponse = await leaveService.getAllLeavesInformation();
    res.send(allLeavesInformationResponse);
});

/**
 * Get one Leave information based on leave_id
 * Send a GET request like "localhost:9000/getLeaveInformation/3"
 */
app.get("/getLeaveInformation/:leave_id", async (req, res) => {
    let leaveInformationResponse = await leaveService.getAllLeavesInformation(
        req.params.leave_id
    );
    res.send(leaveInformationResponse);
});

/**
 * Delete an Leave information from databse based on leave_id
 * send a GET request like "localhost:9000/deleteLeaveInformation/3"
 */
app.get("/deleteLeaveInformation/:leave_id", async (req, res) => {
    let deleteLeaveInformationResponse = await leaveService.deleteLeaveInformation(
        req.params.leave_id
    );
    res.send(deleteLeaveInformationResponse);
});

/**
 * Add a Leave information
 * send a POST request containing body as
 * {
 *      "leave_id": 5,
 *      "employee_name": "Bhumik",
 *      "leave_reason": "Family reception",
 *      "leave_date": "2020-10-28"
 * }
 */
app.post("/addLeaveInformation", async (req, res) => {
    let leaveInformation = req.body;
    let addLeaveInformationResponse = await leaveService.addLeaveInformation(
        leaveInformation
    );
    res.send(addLeaveInformationResponse);
});

/**
 * Update a leave information
 * send a POST request containing a body as given below
 * {
 *      "leave_id": 5,
 *      "employee_name": "Bhumik",
 *      "leave_reason": "Feeling sick",
 *      "leave_date": "2020-09-27"
 * }
 */
app.post("/updateLeaveInformation", async (req, res) => {
    let updatedLeaveInformaion = req.body;
    let updateLeaveInformationResponse = await leaveService.updateLeaveInformation(
        updatedLeaveInformaion
    );
    res.send(updateLeaveInformationResponse);
});

// Started server on port number 9000
app.listen(9000, () => {
    console.log("Running on port number 9000");
});
