import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import endPoints from "../../api/endPoints";
import { getCall } from "../../api/request";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import Loading from "../../components/loadingScreen";

const Button = styled.button`
  background: #21b7ac;
  border: none;
  padding: 0.7rem 2rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Heading = styled.h2`
  color: #21b7ac;
`;

export default function BookARepair() {
  const [loading, setLoading] = useState(true);
  const [carMakes, setCarMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityLocations, setCityLocations] = useState([]);

  const router = useRouter();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phoneNo) {
      errors.phoneNo = "Required";
    }

    if (!values.brand) {
      errors.brand = "Required";
    }

    if (!values.model) {
      errors.model = "Required";
    }

    if (!values.serviceType) {
      errors.serviceType = "Required";
    }

    if (!values.city) {
      errors.city = "Required";
    }

    if (!values.location) {
      errors.location = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: router.query.phoneNo || "",
      brand: router.query.make || "",
      model: router.query.model || "",
      serviceType: router.query.serviceType || "",
      city: "",
      location: "",
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

  useEffect(() => {
    getMakes();
    getCities();
  }, []);

  useEffect(() => {
    if (formik.values.brand) {
      // formik.values.model = "";
      getModel(formik.values.brand);
    }
  }, [formik.values.brand]);

  useEffect(() => {
    if (formik.values.city) {
      formik.values.location = "";
      getCityLocations(formik.values.city);
    }
  }, [formik.values.city]);

  const getMakes = () => {
    getCall(`${endPoints.getMake}`)
      .then(({ data: response }) => setCarMakes(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getModel = (make) => {
    setLoading(true);
    getCall(`${endPoints.getModel(make)}`)
      .then(({ data: response }) => setCarModels(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getCities = () => {
    setLoading(true);
    getCall(`${endPoints.getCities}`)
      .then(({ data: response }) => setCities(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getCityLocations = (city) => {
    setLoading(true);
    getCall(`${endPoints.getCenters(city)}`)
      .then(({ data: response }) => setCityLocations(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <HomeLayout>
      {loading && <Loading />}
      <div className="container d-flex flex-column align-items-center">
        <Heading className="text-center mt-5 mb-4">Book A Car Repair</Heading>

        <form
          className="p-4 mb-5 rounded d-flex flex-column"
          style={{ background: "#eee", width: "45vw" }}
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              className={validationClassSetter("name")}
              id="name"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {renderError("name")}
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email address</label>
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
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="text"
              className={validationClassSetter("phoneNo")}
              id="phoneNo"
              name="phoneNo"
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {renderError("phoneNo")}
          </div>

          <div className="mb-3">
            <label htmlFor="brand">Brand</label>
            <select
              className={validationClassSetter("brand")}
              id="brand"
              name="brand"
              value={formik.values.brand}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Choose...
              </option>
              {carMakes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>

            {renderError("brand")}
          </div>

          <div className="mb-3">
            <label htmlFor="model">Model</label>
            <select
              className={validationClassSetter("model")}
              id="model"
              name="model"
              disabled={!formik.values.brand}
              value={formik.values.model}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Choose...
              </option>
              {carModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>

            {renderError("model")}
          </div>

          <div className="mb-3">
            <label htmlFor="serviceType">Service Type</label>
            <select
              className={validationClassSetter("serviceType")}
              id="serviceType"
              name="serviceType"
              value={formik.values.serviceType}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Choose...
              </option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>

            {renderError("serviceType")}
          </div>

          <div className="mb-3">
            <label htmlFor="city">Select a City</label>
            <select
              className={validationClassSetter("city")}
              id="city"
              name="city"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Choose...
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {renderError("city")}
          </div>

          <div className="mb-4">
            <label htmlFor="location">Location(street)</label>
            <select
              type="text"
              className={validationClassSetter("location")}
              id="location"
              value={formik.values.location}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Choose...
              </option>
              {cityLocations.map((item, index) => (
                <option key={index} value={item.location}>
                  {item.location}
                </option>
              ))}
            </select>

            {renderError("location")}
          </div>

          <Button
            className="text-center rounded align-self-center text-white"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </HomeLayout>
  );
}
