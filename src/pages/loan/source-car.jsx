import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import Loading from "../../components/loadingScreen";
import HomeLayout from "../../components/layouts/home-layout";
import Socials from "../../components/socials";
import Chat from "../../components/chat";
import { postCall, getCall } from '../../api/request';
import endpoint from '../../api/endPoints';
import { toast, ToastContainer } from "react-nextjs-toast";

const Button = styled.button`
  background: #10cac1;
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


    if (!values.interestedInCar) {
      errors.interestedInCar = "Required";
    }

    if (!values.incomeSource) {
      errors.incomeSource = "Required";
    }
    if (!values.lga) {
      errors.lga = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      lga: "",
      interestedInCar: "",
      incomeSource: "business owner",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true)
        let headers = {
          "x-api-key": process.env.FINANCE_API_KEY
        }
        let res = await postCall(endpoint.leads, values, headers)
        if (res.data.status === true) {
          toast.notify('Your request was sent successfully', {
            duration: 5,
            title: "Successful",
            type: "success",
          });
          resetForm()
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.notify('Oops! something went wrong. keep calm and try again.', {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      }
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
      {loading && <Loading />}
      <Socials />
      <Chat />

      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center mt-5 mb-4 font-weight-bold">
          Let's Help You Source
        </h2>

        <form
          className="p-4 mb-5 rounded d-flex flex-column"
          style={{ background: "#eee", width: "45vw" }}
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-3">
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

          <div className="mb-3">
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

          <div className="mb-3">
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

          <div className="mb-3">
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

          <div className="mb-3">
            <label htmlFor="lga">Local government</label>
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

          <div className="mb-3">
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

          {/* <div className="mb-3">
            <label htmlFor="city">Date Of Birth</label>
            <select
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

          <div className="mb-4">
            <label htmlFor="location">
              Which car are you interested in buying?
            </label>
            <input
              type="text"
              className={validationClassSetter("interestedInCar")}
              id="interestedInCar"
              value={formik.values.interestedInCar}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {renderError("interestedInCar")}
          </div>

          <div>
            <div className="mb-2" htmlFor="incomeSource">
              What is your source of income
            </div>

            <div className="custom-control custom-radio mb-1">
              <input
                type="radio"
                className="custom-control-input"
                name="incomeSource"
                id="businessOwner"
                value="business owner"
                checked={formik.values.incomeSource === "business owner"}
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="businessOwner">
                Business owner
              </label>
            </div>

            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="incomeSource"
                id="salaryEarner"
                value="salary earner"
                checked={formik.values.incomeSource === "salary earner"}
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="salaryEarner">
                Salary earner
              </label>
            </div>
          </div>

          <Button
            className="text-center rounded align-self-start text-white mt-5"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
};

export default SourceLoanableCar;
