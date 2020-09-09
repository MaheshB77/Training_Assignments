import React from "react";
import Links from "../common/Links";
import "../../assets/Employee.css";
import Table from "react-bootstrap/Table";

export default function Employee() {
  return (
    <div className="Employee">
      {/* Links */}
      <div className="Column">
        <Links className="Column"></Links>
      </div>

      {/* Employee table */}
      <div className="Column">
        <h1>Employee data</h1>
        <Table striped bordered hover className="Employee-table">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mahesh</td>
              <td>Bansode</td>
              <td>Google</td>
              <td>$100k</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Swapnil</td>
              <td>Sutar</td>
              <td>Infosys</td>
              <td>$150k</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shubhangi</td>
              <td>Dongre</td>
              <td>Amazon</td>
              <td>$200k</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Aishwarya</td>
              <td>Jorve</td>
              <td>Facebook</td>
              <td>$250k</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
