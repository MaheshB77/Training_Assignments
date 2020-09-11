import React from "react";
import { Route, Switch } from "react-router-dom";
import UserForm from "../components/pages/UserForm";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
export default function Routing() {
  return (
    <div className="Routing">
      <Switch>
        <Route path="/contactus" component={ContactUs}></Route>
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/" component={UserForm}></Route>
      </Switch>
    </div>
  );
}
