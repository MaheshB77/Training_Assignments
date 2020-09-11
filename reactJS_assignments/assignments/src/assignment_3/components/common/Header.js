import React from "react";
import logo from "../../img/liviano.png";
import "../../assets/Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Links">
        <Link className="lnk" to="/">
          Home
        </Link>
        <Link className="lnk" to="/aboutus">
          About Us
        </Link>
        <Link className="lnk" to="/contactus">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
