import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { NavLink, Link } from "react-router-dom";
import Inputs from "../../components/forms";

import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout"
import { toast, ToastContainer } from "react-nextjs-toast";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import Loading from "../../components/loadingScreen";
import { howDoYouHearAboutUs } from "../../asset/data/service"
// import bgImg from "../../asset/background-images/car_swap.webp"
const Swap_car = (props) => {
  const [carMakeData, setCarMakeData] = useState([]);
  const [carModelData, setCarModelData] = useState([]);
  const [carYearData, setCarYearData] = useState([]);
  const [carTrimData, setCarTrimData] = useState([]);
  const [carCitiesData, setCarCitiesData] = useState([]);
  const [carCentreData, setCarCentreData] = useState([]);
  const [slotData, setSlotData] = useState([]);
  const [steps, setSteps] = useState({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
  });
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
  const path = router.pathname
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


  const slotDate = slotData.map((data) => {
    const arr = Object.keys(data)
    return {
      value: arr[0],
      label: arr[0],
    }
  })

  const slotTime = slotData.map((date) => {
    if (Object.keys(date)[0] === data.date) {
      const timeArr = Object.values(date)[0].map((time) => {
        return {
          value: time,
          label: time,
        }
      })
      return timeArr
    }
  }).filter(item => typeof item !== "undefined")[0]

  const switchStep = (step) => {
    if (step === 1) {
      setSteps({
        firstStep: true,
        secondStep: false,
        thirdStep: false,
      })
    }
    if (step === 2) {
      setSteps({
        firstStep: false,
        secondStep: true,
        thirdStep: false,
      })
    }
    if (step === 3) {
      setSteps({
        firstStep: false,
        secondStep: false,
        thirdStep: true,
      })
    }
  }
  return (
    <>
      {
        <HomeLayout footer="two">
          <div className="swap-car">
            {loading && <Loading />}
            <div className="hero2" style={{ backgroundImage: "../../asset/background-images/car_swap.webp" }}>
            </div>

            <div className="text-area container pb-5  ">
              {steps.secondStep && <div className="step2-text">What Kind of car
do you want?</div>}
              <form className=" col-lg-7 d-flex flex-column mt-5">
                {steps.firstStep &&
                  <div className="first-step">
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
                      type={"tel"}
                      placeholder={"Enter your phone number"}
                      label={"Phone number"}
                      getValues={getValues}
                      errorMessage={formError["phone"]}
                      required={true}
                    />
                    <button className="mt-4 d-flex" onClick={() => switchStep(2)}>Next <div className="arrow"><img src="/assets/icons/arrow-right.svg" alt="arrow right" /></div></button>
                  </div>}
                {steps.secondStep &&
                  <div className="step-2">
                    <p className="write-up col-lg-10 text-center mx-auto">
                      We' ll give you 2 slots to improve our
                      chance of finding you the right match
          </p>
                    <Inputs
                      name={"amount"}
                      type={"text"}
                      placeholder={"Enter your amount"}
                      label={"Amount"}
                      getValues={getValues}
                      errorMessage={formError["amount"]}
                      required={true}
                    />
                    <div className="big-text text-lg mt-5 mb-4 display-md ">
                      1st Choice
        </div>
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
                      name={"year"}
                      type="select"
                      label={"Year"}
                      errorMessage={formError["year"]}
                      options={carYearData}
                      handleChange={handleChange}
                    />
                    <div className="big-text text-lg mt-5 mb-4">
                      2nd Choice
        </div>
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
                      name={"year"}
                      type="select"
                      label={"Year"}
                      errorMessage={formError["year"]}
                      options={carYearData}
                      handleChange={handleChange}
                    />
                    <div className="d-flex flex-column flex-md-row mt-5">
                      <button className="prev" onClick={() => switchStep(1)}>Previous </button>
                      <button className=" mt-3 mt-md-0" onClick={() => switchStep(3)}>Next </button>
                    </div>
                  </div>}
                {steps.thirdStep &&
                  <div className="step-3">
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
                      options={slotTime}
                      required={true}
                      name={"time"}
                      type="select"
                      label={"Select time"}
                      errorMessage={formError["time"]}
                      handleChange={handleChange}
                    />
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
                      name={"plateNumber"}
                      type={"text"}
                      placeholder={"Enter your plate no. to get faster service(optional)"}
                      label={"Plate Number"}
                      getValues={getValues}
                      errorMessage={formError["plateNumber"]}
                    // required={true}
                    />
                    <Inputs
                      name={"referral"}
                      type={"text"}
                      placeholder={"Enter referral code"}
                      label={"Referral code"}
                      getValues={getValues}
                      errorMessage={formError["referral"]}
                    // required={true}
                    />
                    <Inputs
                      placeholder={"Enter your name"}
                      options={howDoYouHearAboutUs}
                      required={true}
                      name={"time"}
                      type="select"
                      label={"How do you hear about us (optional)"}
                      errorMessage={formError["time"]}
                      handleChange={handleChange}
                    />
                    <button className="mt-4 d-flex">Finish </button>
                  </div>}
              </form>
            </div>
            <Security />
            <Chat />
          </div>
        </HomeLayout>
      }
      <ToastContainer align={"right"} position={"bottom"} />
    </>
  );
};

export default Swap_car;
