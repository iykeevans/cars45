import React, { useEffect, useState } from "react";
import cookie from "js-cookie"
import { useRouter } from "next/router";

import Inputs from "./forms";
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
  const [slotData, setSlotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
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
  const router = useRouter()
  useEffect(() => {
    getMakes();
  }, []);

  const handleChange = (selectedOption, name) => {
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
    if (name == "placeId") {
      getSlot(selectedOption[name]);
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
      });
  };

  const getSlot = (placeId) => {
    setLoading(true);
    getCall(`${endpoints.getSlot(placeId)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          const data = response.data.data;
          const setData = data.map((item, i) => ({
            value: item.id,
            label: item.address1,
          }));

          setSlotData(data);
        } else {
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
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
        setLoading(false);
        if (response.status === 200) {
          toast.notify("You have successfully booked for Inspection", {
            duration: 5,
            title: "Success",
            type: "success",
          });
          setTimeout(() => {
            router.reload()
          }, 5000)
        } else {
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
      });
  };

  const submitInspectionExponea = async () => {
    setLoading(true);
    data.user = cookie.get('__exponea_etc__');
    postCall(`${endpoints.createInspection}`, data)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.notify("Thanks, we have received your booking", {
            duration: 5,
            title: "Success",
            type: "success",
          });
        } else {
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "Something when wrong",
          type: "error",
        });
      });
  };

  const slotDate = slotData.map((data) => {
    const arr = Object.keys(data)
    return {
      value: arr[0],
      label: arr[0],
    }
  })

  const slotTime = slotData.map((date) => {
console.log("i dey her",Object.keys(date)[0])
console.log("data.date",data.date)
    if (Object.keys(date)[0]===data.date) {
      console.log("Object.keys(date)[0]", Object.keys(date)[0])
      const timeArr = Object.values(date)[0].map((time) => {
        console.log("time oo ", time)
        return {
          value: time,
          label: time,
        }
      })
      // console.log("timeArr", timeArr)
      return timeArr 
      // console.log("date[data.date]", date[data.date])
    }
  })


  console.log("slotTime", slotTime.filter((time)=>typeof time!=="undefined"))
  // console.log({ data });
  // console.log({ slotData });
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
          type="select"
          options={slotDate}
          label={"Select date"}
          errorMessage={formError["date"]}
          handleChange={handleChange}
        />

        <Inputs
          placeholder={"Enter your name"}
          getValues={getValues}
          required={true}
          name={"time"}
          type="select"
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
