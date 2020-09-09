import React from "react";
import Links from "../common/Links";
import "../../assets/Student.css";
import Table from "react-bootstrap/Table";
export default function Student() {
  return (
    <div className="Student">
      {/* Links */}
      <div className="Column">
        <Links className="Column"></Links>
      </div>
      {/* Student Table */}
      <div className="Column">
        <h1>Student data</h1>
        <Table striped bordered hover className="Student-table">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Education</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mahesh</td>
              <td>Bansode</td>
              <td>BE</td>
              <td>91%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Swapnil</td>
              <td>Sutar</td>
              <td>BA</td>
              <td>63%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shubhangi</td>
              <td>Dongre</td>
              <td>BE</td>
              <td>94%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Aishwarya</td>
              <td>Jorve</td>
              <td>BCS</td>
              <td>96%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
