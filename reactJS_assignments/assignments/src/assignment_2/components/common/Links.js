import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/Links.css";

export default class Links extends Component {
  render() {
    return (
      <div className="Links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/employee">
          <li>Employee</li>
        </Link>
        <Link to="/student">
          <li>Student</li>
        </Link>
      </div>
    );
  }
}
