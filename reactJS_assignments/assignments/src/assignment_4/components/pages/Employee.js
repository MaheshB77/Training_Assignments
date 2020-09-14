import React, { Component } from "react";
import Links from "../common/Links";
import "../../assets/Employee.css";
import Table from "react-bootstrap/Table";
import EmpData from "../../data/Employee.json";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEmployees = () => {
    return (
      <Table striped bordered hover className="Employee-table">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {/* Using map function to render each employee */}
          {EmpData.map((emp) => {
            return (
              <tr>
                <td>{emp.emp_id}</td>
                <td>{emp.emp_name}</td>
                <td>
                  {emp.emp_salary}
                  {` `}₹
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };
  render() {
    return (
      <div className="Employee">
        {/* Links */}
        <div className="Column">
          <Links className="Column"></Links>
        </div>

        {/* Employee table */}
        <div className="Column">
          <h1>Employee data</h1>
          {this.renderEmployees()}
        </div>
      </div>
    );
  }
}
