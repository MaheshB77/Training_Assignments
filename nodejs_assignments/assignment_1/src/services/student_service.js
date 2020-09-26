const DatabaseService = require("./database_service");

class StudentService {
    constructor() {
        this.databaseService = new DatabaseService();
    }
    async getAllStudentsInformationFromDatabase() {
        let query = "SELECT * FROM student_information";
        let getStudentsResponse = await this.databaseService.executeQuery(
            query
        );
        return getStudentsResponse;
    }
    async addStudentInformation(studentInformation) {
        let query = `INSERT INTO student_information(student_rollno,
            student_name,student_marks) 
            values('${studentInformation.student_rollno}',
            '${studentInformation.student_name}',
            '${studentInformation.student_marks}')`;
        let addStudentResponse = await this.databaseService.executeQuery(query);
        return addStudentResponse;
    }
    async updateStudentInformation(updateStudentData) {
        let query = `UPDATE student_information 
        SET student_name = '${updateStudentData.student_name}',
        student_marks = ${updateStudentData.student_marks} 
        WHERE student_rollno = ${updateStudentData.student_rollno}`;
        let updateStudentResponse = await this.databaseService.executeQuery(
            query
        );
        return updateStudentResponse;
    }
    async deleteStudentInformation(studentRollNo) {
        let query = `DELETE FROM student_information 
        WHERE student_rollno = ${studentRollNo}`;
        let deleteStudentResponse = await this.databaseService.executeQuery(
            query
        );
        return deleteStudentResponse;
    }
    async getStudentInformation(studentRollNo) {
        let query = `SELECT * FROM student_information 
        WHERE student_rollno = ${studentRollNo}`;
        let getStudentResponse = await this.databaseService.executeQuery(query);
        return getStudentResponse;
    }
}

module.exports = StudentService;
