import React, { Component } from "react";
import Student from "../components/pages/Student";
import Employee from "../components/pages/Employee";
import Leave from "../components/pages/Leave";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/employee" component={Employee} />
          <Route path="/student" component={Student} />
          <Route path="/leave" component={Leave} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
