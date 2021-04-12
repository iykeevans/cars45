import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import Loading from "../../components/loadingScreen";
import HomeLayout from "../../components/layouts/home-layout";
import Socials from "../../components/socials";
import Chat from "../../components/chat";

const Button = styled.button`
  background: ${(props) => (props.secondary ? "#10cac1" : "#ff9101")};
  border: none;
  padding: 0.7rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const LoanableCarFinancialInformation = (props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validate = (values) => {
    const errors = {};

    if (!values.car) {
      errors.car = "Required";
    }

    if (!values.incomeSource) {
      errors.incomeSource = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      car: "",
      bank: "",
      accountNumber: "",
      bvn: "",
      incomeSource: "business owner",
      monthlySalary: "",
      receivingInAccount: "yes",
      hasActiveLoan: "no",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          <h5 className="text-center mb-4">Financial Information</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="car">
                Which car are you interested in buying
              </label>
              <input
                type="text"
                className={validationClassSetter("firstName")}
                id="car"
                name="car"
                value={formik.values.car}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("car")}
            </div>

            <div className="col-md-6">
              <label htmlFor="bank">Select you prefered bank</label>
              <input
                className={validationClassSetter("bank")}
                id="bank"
                name="bank"
                value={formik.values.bank}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("bank")}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                className={validationClassSetter("accountNumber")}
                id="accountNumber"
                name="accountNumber"
                value={formik.values.accountNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("accountNumber")}
            </div>

            <div className="col-md-6">
              <label htmlFor="bvn">BVN</label>
              <input
                className={validationClassSetter("bvn")}
                id="bvn"
                name="bvn"
                value={formik.values.bvn}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("bvn")}
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2" htmlFor="incomeSource">
              What is your source of income?
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

          <div className="row mb-4">
            <div className="col-md-8">
              <label htmlFor="monthlySalary">Monthly Salary</label>
              <input
                className={validationClassSetter("monthlySalary")}
                id="monthlySalary"
                name="monthlySalary"
                value={formik.values.monthlySalary}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {renderError("monthlySalary")}
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2" htmlFor="incomeSource">
              Have you been receiving your salary in the account for more than 6
              months
            </div>

            <div className="custom-control custom-radio mb-1">
              <input
                type="radio"
                className="custom-control-input"
                name="receivingInAccount"
                id="isReceivingInAccount"
                value="yes"
                checked={formik.values.receivingInAccount === "yes"}
                onChange={formik.handleChange}
              />
              <label
                className="custom-control-label"
                htmlFor="isReceivingInAccount"
              >
                Yes
              </label>
            </div>

            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="receivingInAccount"
                id="NotReceivingInAccount"
                value="no"
                checked={formik.values.receivingInAccount === "no"}
                onChange={formik.handleChange}
              />
              <label
                className="custom-control-label"
                htmlFor="NotReceivingInAccount"
              >
                No
              </label>
            </div>
          </div>

          <div>
            <div className="mb-2" htmlFor="incomeSource">
              Do you have an Active Loan?
            </div>

            <div className="custom-control custom-radio mb-1">
              <input
                type="radio"
                className="custom-control-input"
                name="hasActiveLoan"
                id="withActiveLoan"
                value="yes"
                checked={formik.values.hasActiveLoan === "yes"}
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="withActiveLoan">
                Yes
              </label>
            </div>

            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="hasActiveLoan"
                id="noActiveLoan"
                value="no"
                checked={formik.values.hasActiveLoan === "no"}
                onChange={formik.handleChange}
              />
              <label className="custom-control-label" htmlFor="noActiveLoan">
                No
              </label>
            </div>
          </div>

          <div className="d-flex mt-5">
            <Button
              className="text-center rounded mr-3"
              type="submit"
              onClick={() => router.back()}
            >
              Back
            </Button>

            <Button
              className="text-center rounded text-white"
              type="submit"
              secondary
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </HomeLayout>
  );
};

export default LoanableCarFinancialInformation;
