const DatabaseService = require("./database_service");

class EmployeeService {
    constructor() {
        this.databaseService = new DatabaseService();
    }
    async getAllEmployeesInformation() {
        let query = `SELECT * FROM employee_information`;
        let allEmployeesInformation = await this.databaseService.executeQuery(
            query
        );
        return allEmployeesInformation;
    }
    async getEmployeeInformation(employee_id) {
        let query = `SELECT * FROM employee_information 
        WHERE employee_no = ${employee_id}`;
        let employeeInformation = await this.databaseService.executeQuery(
            query
        );
        return employeeInformation;
    }
    async deleteEmployeeInformation(employee_id) {
        let query = `DELETE FROM employee_information 
        WHERE employee_no = ${employee_id}`;
        let deleteEmployeeResponse = await this.databaseService.executeQuery(
            query
        );
        return deleteEmployeeResponse;
    }
    async addEmployeeInformation(employeeInformation) {
        let query = `INSERT INTO employee_information(
            employee_no, employee_name, employee_salary
        ) values(
            '${employeeInformation.employee_no}',
            '${employeeInformation.employee_name}',
            '${employeeInformation.employee_salary}'
        )`;
        let addEmployeeResponse = await this.databaseService.executeQuery(
            query
        );
        return addEmployeeResponse;
    }
    async updateEmployeeInformation(updatedEmployeeInformation) {
        let query = `UPDATE employee_information 
        SET employee_name = '${updatedEmployeeInformation.employee_name}',
        employee_salary = ${updatedEmployeeInformation.employee_salary} 
        WHERE employee_no = ${updatedEmployeeInformation.employee_no}`;
        let updateEmployeeResponse = await this.databaseService.executeQuery(
            query
        );
        return updateEmployeeResponse;
    }
}

module.exports = EmployeeService;
