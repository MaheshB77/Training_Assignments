import React, { Component } from "react";
import Links from "../common/Links";
import "../../assets/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* Links */}
        <div className="Column">
          <Links />
        </div>

        {/* Dashboard   */}
        <div className="Column">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}
