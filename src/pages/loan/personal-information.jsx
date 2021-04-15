import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import Loading from "../../components/loadingScreen";
import HomeLayout from "../../components/layouts/home-layout";
import Socials from "../../components/socials";
import Chat from "../../components/chat";

const Button = styled.button`
  background: #ff9101;
  border: none;
  padding: 0.7rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const SourceLoanableCar = (props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Required";
    }

    if (!values.address) {
      errors.address = "Required";
    }

    if (!values.state) {
      errors.state = "Required";
    }

    if (!values.lga) {
      errors.lga = "Required";
    }

    // if (!values.dateOfBirth) {
    //   errors.dateOfBirth = "Required";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      lga: "",
      state: "",
    },
    validate,
    onSubmit: (values) => {
      // let interestedInCar = JSON.parse(router.query.data)
      // let interestedInCar = { interestedInCar: 'https://cars45.com/toyota' }
      let data = { ...values, ...JSON.parse(router.query.data) }
      router.push({
        pathname: '/loan/financial-information',
        query: { data: JSON.stringify(data) }
      })
      // alert(JSON.stringify(values, null, 2));

    },
  });

  const validationClassSetter = (value) => {
    return !formik.touched[value]
      ? "form-control"
      : formik.errors[value]
        ? "form-control is-invalid"
        : "form-control is-valid";
  };

  const renderError = (value) =>
    formik.touched[value] && formik.errors[value] ? (
      <small className="text-danger mt-1">{formik.errors[value]}</small>
    ) : null;

  return (
    <HomeLayout>
      <Socials />
      <Chat />

      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center mt-5 mb-4 font-weight-bold">
          Cars45 Financing
        </h2>

        <form
          className="p-4 mb-5 rounded d-flex flex-column"
          style={{ background: "#eee", width: "60vw" }}
          onSubmit={formik.handleSubmit}
        >
          <h5 className="text-center mb-4">Personal Information</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={validationClassSetter("firstName")}
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("firstName")}
            </div>

            <div className="col-md-6">
              <label htmlFor="email">Last Name</label>
              <input
                className={validationClassSetter("lastName")}
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("lastName")}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={validationClassSetter("email")}
                id="email"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("email")}
            </div>

            <div className="col-md-6">
              <label htmlFor="phone">Phone Number (Linked to BVN)</label>
              <input
                className={validationClassSetter("phone")}
                id="phone"
                name="phone"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("phone")}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="model">Home Address</label>
            <input
              className={validationClassSetter("address")}
              id="address"
              name="address"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {renderError("address")}
          </div>

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="lga">Local Government</label>
              <input
                className={validationClassSetter("lga")}
                id="lga"
                name="lga"
                value={formik.values.lga}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("lga")}
            </div>

            <div className="col-md-6">
              <label htmlFor="serviceType">State (Location of Applicant)</label>
              <input
                className={validationClassSetter("state")}
                id="state"
                name="state"
                value={formik.values.state}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("state")}
            </div>

            {/* <div className="col-md-6">
              <label htmlFor="city">Date Of Birth</label>
              <input
                className={validationClassSetter("dateOfBirth")}
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formik.values.dateOfBirth}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("dateOfBirth")}
            </div> */}
          </div>

          <div className="d-flex">
            <Button
              className="text-center rounded mt-5 mr-3"
              type="submit"
              onClick={() => router.back()}
            >
              Back
            </Button>

            <Button className="text-center rounded mt-5" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default SourceLoanableCar;
