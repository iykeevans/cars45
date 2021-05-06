import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import cookie from "js-cookie";

import endPoints from "../../api/endPoints";
import { getCall, postCall } from "../../api/request";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import Loading from "../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";

const mockedData = {
  title: "Book A Car Repair",
};

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
  const [carYear, setCarYear] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityLocations, setCityLocations] = useState([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

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

    if (!values.make) {
      errors.make = "Required";
    }

    if (!values.model) {
      errors.model = "Required";
    }

    if (!values.year) {
      errors.year = "Required";
    }

    if (!values.service_type) {
      errors.service_type = "Required";
    }

    if (!values.city) {
      errors.city = "Required";
    }

    if (!values.address) {
      errors.address = "Required";
    }

    if (!values.date) {
      errors.date = "Required";
    }

    if (!values.time) {
      errors.time = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: router.query.phoneNo || "",
      make: router.query.make || "",
      model: router.query.model || "",
      year: "",
      service_type: router.query.service_type || "",
      city: "",
      address: "",
      date: "",
      time: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      let data = {
        ...values,
        address: values.address.split("/")[1],
        booking_date: new Date(`${values.date}T${values.time}`).toISOString(),
        user: cookie.get("__exponea_etc__"),
      };
      try {
        await postCall(endPoints.goMechanic, data, {});
        toast.notify("Your booking was successful", {
          duration: 5,
          title: "Congrats!!",
          type: "success",
        });
        formik.resetForm();
        setLoading(false);
        setTimeout(() => {
          router.push("/service");
        }, 5000);
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

  useEffect(() => {
    getMakes();
    getCities();
  }, []);

  useEffect(() => {
    if (formik.values.make) {
      // formik.values.model = "";
      getModel(formik.values.make);
    }
  }, [formik.values.make]);

  useEffect(() => {
    if (formik.values.model) {
      // formik.values.model = "";
      getYear(formik.values.make, formik.values.model);
    }
  }, [formik.values.model]);

  useEffect(() => {
    if (formik.values.city) {
      formik.values.location = "";
      getCityLocations(formik.values.city);
    }
  }, [formik.values.city]);

  const getMakes = () => {
    getCall(`${endPoints.getMake}`)
      .then(({ data: response }) => setCarMakes(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };

  const getModel = (make) => {
    setLoading(true);
    getCall(`${endPoints.getModel(make)}`)
      .then(({ data: response }) => setCarModels(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getYear = (make, model) => {
    getCall(`${endPoints.getYear(make, model)}`)
      .then(({ data: response }) => setCarYear(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getCities = () => {
    setLoading(true);
    getCall(`${endPoints.getCities}`)
      .then(({ data: response }) => setCities(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };

  const getCityLocations = (city) => {
    setLoading(true);
    getCall(`${endPoints.getCenters(city)}`)
      .then(({ data: response }) => setCityLocations(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };

  const getslot = (placeId) => {
    setLoading(true);
    getCall(`${endPoints.getSlot(placeId)}`)
      .then(({ data: response }) => {
        let theDates = Object.values(response.data);
        setDates(theDates);
      })
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getTime = (e) => {
    let count = 0;
    let result;
    for (let i in dates) {
      if (dates[i][e.target.value]) {
        result = dates[i][e.target.value];
      }
      count += 1;
      if (count === dates.length) {
        setTimes(result);
      }
    }
  };
  return (
    <HomeLayout>
      {loading && <Loading />}
      <div className="container d-flex flex-column align-items-center">
        <Heading className="text-center mt-5 mb-4">{mockedData.title}</Heading>

        <form
          className="p-4 mb-5 rounded d-flex flex-column source-form"
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
            <label htmlFor="make">Brand</label>
            <select
              className={validationClassSetter("make")}
              id="make"
              name="make"
              value={formik.values.make}
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

            {renderError("make")}
          </div>

          <div className="mb-3">
            <label htmlFor="model">Model</label>
            <select
              className={validationClassSetter("model")}
              id="model"
              name="model"
              disabled={!formik.values.make}
              value={formik.values.model}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.handleChange(e);
                getYear(formik.values.make, e.target.value);
                //console.log(formik.values.make, e.target.value);
              }}
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
            <label htmlFor="year">year</label>
            <select
              className={validationClassSetter("year")}
              id="year"
              name="year"
              disabled={!formik.values.model}
              value={formik.values.year}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.handleChange(e);
              }}
            >
              <option disabled value="">
                Choose...
              </option>
              {carYear.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {renderError("year")}
          </div>

          <div className="mb-3">
            <label htmlFor="service_type">Service Type</label>
            <select
              className={validationClassSetter("service_type")}
              id="service_type"
              name="service_type"
              value={formik.values.service_type}
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

            {renderError("service_type")}
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
            <label htmlFor="address">address(street)</label>
            <select
              type="text"
              name="address"
              className={validationClassSetter("address")}
              id="address"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.handleChange(e);
                getslot(e.target.value.split("/")[0]);
              }}
            >
              <option disabled value="">
                Choose...
              </option>
              {cityLocations.map((item, index) => (
                <option key={index} value={`${item.id}/${item.location}`}>
                  {item.location}
                </option>
              ))}
            </select>

            {renderError("address")}
          </div>

          <div className="mb-4">
            <label htmlFor="date">Date</label>
            <select
              type="text"
              name="date"
              className={validationClassSetter("date")}
              id="date"
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                formik.handleChange(e);
                getTime(e);
              }}
            >
              <option disabled value="">
                Choose...
              </option>
              {dates.map((item, index) => (
                <option key={index} value={Object.keys(item)}>
                  {Object.keys(item)}
                </option>
              ))}
            </select>

            {renderError("date")}
          </div>

          {formik.values.date ? (
            <div className="mb-4">
              <label htmlFor="time">Time</label>
              <select
                type="text"
                name="time"
                className={validationClassSetter("time")}
                id="time"
                value={formik.values.time}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              >
                <option disabled value="">
                  Choose...
                </option>
                {times.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {renderError("time")}
            </div>
          ) : null}

          <Button
            className="text-center rounded align-self-center text-white"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
}
