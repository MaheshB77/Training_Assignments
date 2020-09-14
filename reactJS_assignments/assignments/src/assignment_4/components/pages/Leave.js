import React, { Component } from "react";
import Links from "../common/Links";
import Table from "react-bootstrap/Table";
import LeaveData from "../../data/Leave.json";
// Used the css of student
import "../../assets/Student.css";

export default class Leave extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }
  renderLeaves = () => {
    return (
      <Table striped bordered hover className="Student-table">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Leave Date</th>
          </tr>
        </thead>
        <tbody>
          {LeaveData.map((leave) => {
            return (
              <tr>
                <td>{leave.emp_id}</td>
                <td>{leave.emp_name}</td>
                <td>{leave.leave_date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };
  render() {
    return (
      <div className="Student">
        {/* Links */}
        <div className="Column">
          <Links className="Column"></Links>
        </div>
        {/* Student Table */}
        <div className="Column">
          <h1>Leave data</h1>
          {this.renderLeaves()}
        </div>
      </div>
    );
  }
}
