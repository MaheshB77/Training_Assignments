const mysql = require("mysql");
class DatabaseService {
    constructor() {
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "pass",
            database: "liviano"
        });
        this.connection.connect((err) => {
            if (err) {
                throw err;
            }
        });
    }

    async executeQuery(query) {
        let self = this;
        return new Promise((resolve, reject) => {
            self.connection.query(query, (error, rows) => {
                if (rows == undefined) {
                    reject(new Error("Data is not found"));
                } else {
                    resolve(rows);
                }
            });
        });
    }
}
module.exports = DatabaseService;
