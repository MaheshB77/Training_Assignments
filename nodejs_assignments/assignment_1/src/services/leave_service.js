const DatabaseService = require("./database_service");
class LeaveService {
    constructor() {
        this.databaseService = new DatabaseService();
    }
    async getAllLeavesInformation() {
        let query = `SELECT * FROM leave_information`;
        let allLeavesInformation = await this.databaseService.executeQuery(
            query
        );
        return allLeavesInformation;
    }
    async getAllLeavesInformation(leave_id) {
        let query = `SELECT * FROM leave_information 
        WHERE leave_id = ${leave_id}`;
        let leaveInformation = await this.databaseService.executeQuery(query);
        return leaveInformation;
    }
    async deleteLeaveInformation(leave_id) {
        let query = `DELETE FROM leave_information 
        WHERE leave_id = ${leave_id}`;
        let deleteLeaveInformationResponse = await this.databaseService.executeQuery(
            query
        );
        return deleteLeaveInformationResponse;
    }
    async addLeaveInformation(leaveInformation) {
        let query = `INSERT INTO leave_information(
            leave_id, employee_name, leave_reason, leave_date
        ) values(
            ${leaveInformation.leave_id},
            '${leaveInformation.employee_name}',
            '${leaveInformation.leave_reason}',
            '${leaveInformation.leave_date}'
        )`;
        let addLeaveInformationResponse = await this.databaseService.executeQuery(
            query
        );
        return addLeaveInformationResponse;
    }
    async updateLeaveInformation(updatedLeaveInformation) {
        let query = `UPDATE leave_information 
        SET employee_name = '${updatedLeaveInformation.employee_name}',
        leave_reason = '${updatedLeaveInformation.leave_reason}',
        leave_date = '${updatedLeaveInformation.leave_date}'
        WHERE leave_id = ${updatedLeaveInformation.leave_id}`;
        let updateLeaveInformationResponse = await this.databaseService.executeQuery(
            query
        );
        return updateLeaveInformationResponse;
    }
}
module.exports = LeaveService;
