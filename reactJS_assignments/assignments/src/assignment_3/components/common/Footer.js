import React, { Component } from "react";
import "../../assets/Footer.css";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.email);
    this.setState({ email: "" });
  };
  render() {
    return (
      <div className="Footer">
        {/* Links */}
        <div className="Footer-links">
          <Link className="Footer-lnk" to="/">
            Home
          </Link>
          <Link className="Footer-lnk" to="/aboutus">
            About us
          </Link>
        </div>

        {/* Copyright text */}
        <div className="Footer-copyright">
          <p>
            Copyright &#169; All rights reserved by <strong>Liviano</strong>
          </p>
        </div>

        {/* Email send form */}
        <div>
          <form className="Footer-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <button id="email-submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
