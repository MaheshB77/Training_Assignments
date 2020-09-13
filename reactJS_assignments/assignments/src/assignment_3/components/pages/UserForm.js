import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/UserForm.css";
export default class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserForm">
        <h1>Student Registration</h1>
        <StudentForm />
      </div>
    );
  }
}
const mobileRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const StudentForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userEmail: "",
      userContact: "",
      userState: "",
      userCity: "",
      userPincode: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));

      // resetting the form after submission
      resetForm({ values: "" });
    },

    // Validation using Yup

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .max(10, "Firstname not allowed more than 10 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .max(10, "Laststname not allowed more than 10 characters")
        .required("Lastname is required"),
      userEmail: Yup.string()
        .email("Please enter valid email id")
        .required("Email is required"),
      userContact: Yup.string()
        .matches(mobileRegEx, "Mobile number is not valid")
        .min(10, "Contact number must be of 10 digits")
        .max(10, "Contact number must be of 10 digits")
        .required("Contact number is required"),
      userState: Yup.string()
        .min(3, "Minimum 3 characters required")
        .max(15, "More than 15 characters are not allowed")
        .required("State name is required"),
      userCity: Yup.string()
        .min(3, "Minimum 3 characters required")
        .max(15, "More than 15 characters are not allowed")
        .required("City name is required"),
      userPincode: Yup.string()
        .min(6, "Pincode must have 6 digits")
        .max(6, "Pincode must have 6 digits")
        .required("Pincode is required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Fisrt Name */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="firstName">First Name : </label>
        </div>
        <div className="inp">
          <input
            id="firstName"
            name="firstName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.firstName && formik.touched.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      {/* Last Name */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="lastName">Last Name : </label>
        </div>
        <div className="inp">
          <input
            id="lastName"
            name="lastName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.lastName && formik.touched.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}

      {/* Email */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="userEmail">Email : </label>
        </div>
        <div className="inp">
          <input
            id="userEmail"
            name="userEmail"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userEmail}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.userEmail && formik.touched.userEmail ? (
        <div className="error">{formik.errors.userEmail}</div>
      ) : null}

      {/* Contact number */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="userContact">Contact No : </label>
        </div>
        <div className="inp">
          <input
            id="userContact"
            name="userContact"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userContact}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.userContact && formik.touched.userContact ? (
        <div className="error">{formik.errors.userContact}</div>
      ) : null}

      {/* State */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="userState">State : </label>
        </div>
        <div className="inp">
          <input
            id="userState"
            name="userState"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userState}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.userState && formik.touched.userState ? (
        <div className="error">{formik.errors.userState}</div>
      ) : null}

      {/* City */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="userCity">City : </label>
        </div>
        <div className="inp">
          <input
            id="userCity"
            name="userCity"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userCity}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.userCity && formik.touched.userCity ? (
        <div className="error">{formik.errors.userCity}</div>
      ) : null}

      {/* Pincode */}
      <div className="ele">
        <div className="lbl">
          <label htmlFor="userPincode">Pincode : </label>
        </div>
        <div className="inp">
          <input
            id="userPincode"
            name="userPincode"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userPincode}
          />
        </div>
      </div>
      {/* Showing error messages */}
      {formik.errors.userPincode && formik.touched.userPincode ? (
        <div className="error">{formik.errors.userPincode}</div>
      ) : null}

      <button type="submit">Save</button>
    </form>
  );
};
