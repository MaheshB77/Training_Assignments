import React, { Component } from "react";
import Links from "../common/Links";
import "../../assets/Student.css";
import Table from "react-bootstrap/Table";
import StudData from "../../data/Student.json";
export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderStudents = () => {
    return (
      <Table striped bordered hover className="Student-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {StudData.map((stud) => {
            return (
              <tr>
                <td>{stud.stud_rollno}</td>
                <td>{stud.stud_name}</td>
                <td>{stud.stud_marks}</td>
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
          <h1>Student data</h1>
          {this.renderStudents()}
        </div>
      </div>
    );
  }
}
