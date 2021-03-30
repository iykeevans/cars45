import React, { useEffect, useState } from "react";
import cookie from "js-cookie"
// import '../../asset/scss/ride-hailing.scss';

import Inputs from "./forms";
import HomeLayout from "./layouts/home-layout";
import { toast, ToastContainer } from "react-nextjs-toast";
import { getCall, postCall } from "../api/request";
import endpoints from "../api/endPoints";
import Loading from "./loadingScreen";

const Booking = (props) => {
  const [carData, setCarData] = useState({});
  const [carMakeData, setCarMakeData] = useState([]);
  const [carModelData, setCarModelData] = useState([]);
  const [carYearData, setCarYearData] = useState([]);
  const [carTrimData, setCarTrimData] = useState([]);
  const [carCitiesData, setCarCitiesData] = useState([]);
  const [carCentreData, setCarCentreData] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [showError, setshowError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    trim: "",
    year: "",
    city: "",
    placeId: "",
    date: "",
    time: "",
  });
  const [formError, setFormError] = React.useState({});
  useEffect(() => {
    getMakes();
  }, []);

  const handleChange = (selectedOption, name) => {
    console.log({ selectedOption });
    if (!selectedOption[name]) {
      setFormError({ ...formError, [name]: "Please select an option" });
    } else {
      delete formError[name];
    }
    if (name == "make") {
      getModel(selectedOption[name]);
      setCarModelData([]);
      setData({
        ...data,
        model: "",
        city: "",
        year: "",
        trim: "",
        ...selectedOption,
      });
      return;
      // setCarData({ ...{}, [name]: selectedOption })
    }
    if (name == "model") {
      getYear(data.make, selectedOption[name]);
      getTrim(data.make, selectedOption[name]);
      getCities();
    }
    if (name == "city") {
      getCentre(selectedOption[name]);
    }
    setData({ ...data, ...selectedOption });
  };
  const getValues = (e) => {
    if (!e.target.value) {
      setFormError({ ...formError, [e.target.name]: "This field is required" });
    } else {
      delete formError[e.target.name];
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    return new Promise((resolve, reject) => {
      let dataKeys = Object.keys(data);
      let error;
      let count = 0;
      for (let i in dataKeys) {
        if (dataKeys[i] !== "loading" && !data[dataKeys[i]]) {
          error = { ...error, [dataKeys[i]]: "This field is required" };
        }
        count += 1;
        if (count === dataKeys.length) {
          if (error) {
            setFormError({ ...formError, ...error });
            reject({ message: "Fill required field", statusCode: 400 });
          } else {
            resolve();
          }
        }
      }
    });
  };
  const getMakes = async () => {
    setLoading(false);
    getCall(`${endpoints.getMake}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({ value: item, label: item }));
          setCarMakeData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };
  const getModel = (make) => {
    setLoading(true);
    getCall(`${endpoints.getModel(make)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({ value: item, label: item }));
          setCarModelData(setData);
          //   setCarModelData(response.data.data);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };
  const getYear = (make, model) => {
    setLoading(true);
    getCall(`${endpoints.getYear(make, model)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({ value: item, label: item }));
          setCarYearData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };
  const getTrim = (make, model) => {
    setLoading(true);
    getCall(`${endpoints.getTrim(make, model)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({ value: item, label: item }));

          setCarTrimData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };
  const getCities = () => {
    setLoading(true);
    getCall(`${endpoints.getCities}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({ value: item, label: item }));

          setCarCitiesData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };

  const getCentre = (city) => {
    setLoading(true);
    getCall(`${endpoints.getCenters(city)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({
            value: item.id,
            label: item.address1,
          }));

          setCarCentreData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };

  const submitInspectionForm = async () => {
    try {
      await validateForm();
      createBooking();
      submitInspectionExponea()
    } catch (error) {
      console.log(error);
      if (error.statusCode && error.statusCode === 400) {
        toast.notify(error.message, {
          duration: 5,
          title: "Validation error",
          type: "error",
        });
      }
    }
  };

  const createBooking = () => {
    setLoading(true);
    postCall(`${endpoints.createBooking}`, data)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({
            value: item.id,
            label: item.address1,
          }));

          setCarCentreData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };

  const submitInspectionExponea = async () => {
    setLoading(true);
     data.user = cookie.get('__exponea_etc__');
    postCall(`${endpoints.createInspection}`, data)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({
            value: item.id,
            label: item.address1,
          }));

          setCarCentreData(setData);
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
      });
  };

  console.log({ data });
  return (
    <div className="col-md-12">
      {loading && <Loading />}
      <form noValidate>
        <Inputs
          name={"name"}
          type={"text"}
          placeholder={"Enter your name"}
          label={"Name"}
          getValues={getValues}
          errorMessage={formError["name"]}
          required={true}
        />

        <Inputs
          name={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          label={"Email"}
          getValues={getValues}
          errorMessage={formError["email"]}
          required={true}
        />

        <Inputs
          name={"phone"}
          type={"text"}
          placeholder={"Enter your phone number"}
          label={"Phone number"}
          getValues={getValues}
          errorMessage={formError["phone"]}
          required={true}
        />

        <Inputs
          name={"make"}
          type="select"
          label={"Select Brand"}
          errorMessage={formError["make"]}
          options={carMakeData}
          handleChange={handleChange}
        />

        <Inputs
          name={"model"}
          type="select"
          label={"Select Model"}
          errorMessage={formError["model"]}
          options={carModelData}
          handleChange={handleChange}
        />

        <Inputs
          name={"trim"}
          type="select"
          label={"Gear type"}
          errorMessage={formError["trim"]}
          options={carTrimData}
          handleChange={handleChange}
        />

        <Inputs
          name={"year"}
          type="select"
          label={"Year"}
          errorMessage={formError["year"]}
          options={carYearData}
          handleChange={handleChange}
        />

        <Inputs
          name={"city"}
          type="select"
          label={"City"}
          errorMessage={formError["city"]}
          options={carCitiesData}
          handleChange={handleChange}
        />

        <Inputs
          name={"placeId"}
          type="select"
          label={"Select an inspection center"}
          errorMessage={formError["placeId"]}
          options={carCentreData}
          handleChange={handleChange}
        />

        <Inputs
          name={"date"}
          type="date"
          getValues={getValues}
          label={"Select date"}
          errorMessage={formError["date"]}
          handleChange={handleChange}
        />

        <Inputs
          placeholder={"Enter your name"}
          getValues={getValues}
          required={true}
          name={"time"}
          type="time"
          label={"Select time"}
          errorMessage={formError["time"]}
          handleChange={handleChange}
        />

        <div>
          <Inputs
            type="button"
            title={"Book Inspection"}
            formError={formError}
            submit={submitInspectionForm}
            incomingData={data}
          />
        </div>
      </form>
      <ToastContainer align={"right"} position={"bottom"} />
    </div>
  );
};

export default Booking;
