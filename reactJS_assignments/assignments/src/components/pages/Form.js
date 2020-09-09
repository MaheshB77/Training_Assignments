import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      msg: "",
    };
  }

  // Validation
  doValidation = (event) => {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let contactNumber = this.state.contactNumber;
    let email = this.state.email;
    if (!firstName || !lastName || !contactNumber || !email) {
      alert("Please fill all the fields");
      return;
    }
    alert(`Data succeccfully submitted!!\n
    First Name : ${firstName}\n
    Last Name : ${lastName}\n
    Contact Number : ${contactNumber}\n
    Email : ${email}`);
    this.state.msg = "Data succeccfully submitted!!";
  };

  doChange = (event) => {
    let element = event.target.id;
    this.setState({ [element]: event.target.value });
  };

  // Clearing fields
  clearFields = (event) => {
    this.state.firstName = "";
    this.state.lastName = "";
    this.state.contactNumber = "";
    this.state.email = "";
  };
  render() {
    return (
      <form className="rt-form">
        <h1>Registration Form</h1>
        <table className="rt-form-table">
          <tbody className="rt-form-body">
            <tr>
              <td>
                <label htmlFor="firstName">First Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.doChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lastName">Last Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={this.state.lastName}
                  onChange={this.doChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="contactNumber">Contact Number : </label>
              </td>
              <td>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  value={this.state.contactNumber}
                  onChange={this.doChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email : </label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.doChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button id="sub" type="submit" onClick={this.doValidation}>
            Submit
          </button>
          <button id="clr" type="clear" onClick={this.clearFields}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}
