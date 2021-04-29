import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import Loading from "../../components/loadingScreen";
import HomeLayout from "../../components/layouts/home-layout";
import Socials from "../../components/socials";
import Chat from "../../components/chat";
import { postCall, getCall } from "../../api/request";
import endpoint from "../../api/endPoints";
import { toast, ToastContainer } from "react-nextjs-toast";

const mockedData = {
  title: "Cars45 Financing",
  form: {
    title: "Financial Information",
  },
};

const Button = styled.button`
  background: ${(props) => (props.secondary ? "#10cac1" : "#ff9101")};
  border: none;
  padding: 0.7rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const LoanableCarFinancialInformation = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [banks, setBanks] = useState([]);

  React.useEffect(() => {
    setIncomingData(router.query.data);
  }, [router.query.data]);

  React.useEffect(() => {
    loadBanks();
  }, []);

  const setIncomingData = (incomingData) => {
    if (incomingData) {
      setData({ ...JSON.parse(incomingData) });
    }
  };

  const loadBanks = async () => {
    try {
      let banks = await getCall(endpoint.getBanks, {});
      setBanks(banks.data.data.banks);
    } catch (error) {
      toast.notify("Oops! something went wrong. keep calm and try again.", {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  };
  const validate = (values) => {
    const errors = {};

    // if (!values.interestedInCar) {
    //   errors.interestedInCar = "Required";
    // }

    if (!values.preferredBank) {
      errors.preferredBank = "Required";
    }

    if (!values.accountNumber) {
      errors.accountNumber = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.bvn) {
      errors.bvn = "Required";
    }
    if (!values.netMonthlySal) {
      errors.netMonthlySal = "Required";
    }
    if (!values.amount) {
      errors.amount = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      interestedInCar: "",
      preferredBank: "",
      accountNumber: "",
      description: "",
      bvn: "",
      incomeSource: "business owner",
      netMonthlySal: "",
      isActiveLoan: "false",
      amount: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      if (values.isActiveLoan === "false") {
        values.isActiveLoan = false;
      } else if (values.isActiveLoan === "true") {
        values.isActiveLoan = true;
      }
      let financeData = {
        ...values,
        ...data,
        callbackURL: `${window.location.host}/loan/congratulations`,
      };
      let api;
      switch (financeData.preferredBank) {
        case "Sterling Bank":
          api = endpoint.payWithSterling;
          break;
        case "Guaranty Trust Bank":
          api = endpoint.payWithGTB;
      }
      let headers = {
        "x-api-key": process.env.FINANCE_API_KEY,
      };
      try {
        let res = await postCall(api, financeData, headers);
        setLoading(false);
        if (financeData.preferredBank === "Guaranty Trust Bank") {
          console.log(res.data.data);
          let resp = res.data.data;
          let formdata = new FormData();
          Object.keys(resp).map((item) => {
            formdata.append(item, resp[item]);
            return true;
          });
          headers["Content-Type"] = "multipart/form-data";
          let gtbpay = await postCall(endpoint.gtbfinance, formdata, headers);
          toast.notify("Congrats! Your request is currently processing", {
            duration: 5,
            title: "Success",
            type: "success",
          });
          return router.push("/loan");
        }
        window.location.assign(res.data.data.paymentURL);
      } catch (error) {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
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
          {mockedData.title}
        </h2>

        {data.interestedInCar !== undefined && (
          <form
            className="p-4 mb-5 rounded d-flex flex-column source-form"
            style={{ background: "#eee", width: "60vw" }}
            onSubmit={formik.handleSubmit}
          >
            <h5 className="text-center mb-4">{mockedData.form.title}</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="interestedInCar">
                  Which car are you interested in buying
                </label>
                <input
                  type="text"
                  className={validationClassSetter("interestedInCar")}
                  id="interestedInCar"
                  name="interestedInCar"
                  value={data.interestedInCar}
                  disabled
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {renderError("interestedInCar")}
              </div>

              <div className="col-md-6">
                <label htmlFor="preferredBank">Select you prefered bank</label>
                <select
                  className={validationClassSetter("preferredBank")}
                  id="preferredBank"
                  name="preferredBank"
                  value={formik.values.preferredBank}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                >
                  <option value="">Choose one</option>
                  {banks.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>

                {renderError("preferredBank")}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  className={validationClassSetter("description")}
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {renderError("description")}
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
                  type="text"
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
                <label htmlFor="netMonthlySal">Monthly Salary</label>
                <input
                  className={validationClassSetter("netMonthlySal")}
                  id="netMonthlySal"
                  name="netMonthlySal"
                  type="text"
                  value={formik.values.netMonthlySal}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {renderError("netMonthlySal")}
              </div>
            </div>

            <div className="mb-4">
              {/* <div className="mb-2" htmlFor="incomeSource">
              Have you been receiving your salary in the account for more than 6
              months
            </div> */}

              {/* <div className="custom-control custom-radio mb-1">
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

          <div> */}
              <div className="mb-2" htmlFor="incomeSource">
                Do you have an Active Loan?
              </div>

              <div className="custom-control custom-radio mb-1">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="isActiveLoan"
                  id="withActiveLoan"
                  value={true}
                  checked={formik.values.isActiveLoan === "true"}
                  onChange={formik.handleChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="withActiveLoan"
                >
                  Yes
                </label>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="isActiveLoan"
                  id="noActiveLoan"
                  value={"false"}
                  checked={formik.values.isActiveLoan === "false"}
                  onChange={formik.handleChange}
                />
                <label className="custom-control-label" htmlFor="noActiveLoan">
                  No
                </label>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-8">
                <label htmlFor="amount">Amount</label>
                <input
                  className={validationClassSetter("amount")}
                  id="amount"
                  name="amount"
                  type="number"
                  value={formik.values.amount}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />

                {renderError("amount")}
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
        )}
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
};

export default LoanableCarFinancialInformation;
