import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Chat from "../../components/chat";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import Loading from "../../components/loadingScreen";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import InputRange from "react-input-range";
import HomeLayout from "../../components/layouts/home-layout";
import CarList from "../../components/car-list2";

const Home = (props) => {
  const router = useRouter();
  console.log("pt", window?.history?.state?.options?.carData);
  useEffect(() => {
    // document.getElementById("open-modal").click();
    // console.log(document.cookie.split(";"));
    getMakes();
  }, []);

  const [carData, setCarData] = useState({});
  const [searchResultData, setSearchResultData] = useState(
    window?.history?.state?.options?.carData || []
  );
  const [carMakeData, setCarMakeData] = useState([]);
  const [carModelData, setCarModelData] = useState([]);
  const [carYearData, setCarYearData] = useState([]);
  const [carTrimData, setCarTrimData] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [showError, setshowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({ min: 0, max: 0 });
  const responsive = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };
  const responsivefeatures = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 4,
    },
  };
  const response = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };

  const getMakes = () => {
    getCall(`${endpoints.getMake}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          setErrorText(data.message);
          setCarMakeData(response.data.data);
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
          setErrorText(data.message);
          setCarModelData(response.data.data);
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
          setErrorText(data.message);
          setCarYearData(response.data.data);
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
          setErrorText(data.message);
          // console.log("")
          setCarTrimData(response.data.data);
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
  const carMakeList = carMakeData.map((make, index) => (
    <option value={make}>{make}</option>
  ));

  const carModelList = carModelData.map((model, index) => (
    <option value={model}>{model}</option>
  ));

  const carYearList = carYearData.map((year, index) => (
    <option value={year}>{year}</option>
  ));
  const carTrimList = carTrimData?.map((trim, index) => (
    <option value={trim}>{trim}</option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParam = {};
    if (carData.make) {
      searchParam.make = carData.make.trim();
    }
    if (carData.model) {
      searchParam.model = carData.model;
    }
    if (carData.minYear) {
      searchParam.minYear = carData.minYear;
    }
    if (carData.maxYear) {
      searchParam.maxYear = carData.maxYear;
    }
    setLoading(true);
    getCall(`${endpoints.getSearch(searchParam)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          setErrorText(data.message);
          // console.log("")
          const datai=response.data.data
          if(datai==="No cars in our repository fits your filter."){
            return
          }
          setSearchResultData(Object.values(data));
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

  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "make") {
      getModel(value);
      setCarData({});
    }
    if (name == "model") {
      getYear(carData.make, value);
      getTrim(carData.make, value);
    }
    setCarData({ ...carData, [name]: value });
  };
  console.log({ carData });
  console.log(searchResultData);
  return (
    <HomeLayout>
      {loading && <Loading />}
      <div className="home">
        <div className="jumbotron">
          <button
            className="btn btn-danger"
            onClick={() => props.history.push("/feedback")}
          >
            Feedback
          </button>
        </div>

        <div className="section2 dark-background">
          <div className="container">
            <div className="row">
              <Chat />
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-6 col-md-3">
                  <select
                    name="make"
                    className="form-control"
                    onChange={handleSelect}
                    value={carData.make}
                  >
                    <option selected>Any Make</option>
                    {carMakeList}
                  </select>
                </div>

                <div className="form-group col-6 col-md-3">
                  <select
                    name="model"
                    className="form-control"
                    onChange={handleSelect}
                    disabled={!carData.make}
                    value={carData.model}
                  >
                    <option selected>Any Model</option>
                    {carModelList}
                  </select>
                </div>

                <div className="form-group col-6 col-md-3">
                  <select
                    name="status"
                    className="form-control last"
                    onChange={handleSelect}
                    disabled={!carData.model}
                    value={carData.status}
                  >
                    <option selected>Vehicle Status</option>
                    {carTrimList}
                  </select>
                </div>
                <div className="form-group col-6 col-md-3 ranger">
                  <div className="row">
                    <label
                      htmlFor="formControlRange"
                      className="col-sm-4 pl-0 pr-0 col-form-label"
                    >
                      PRICE RANGE
                    </label>
                    <div className="col-12 col-sm-8">
                      <InputRange
                        maxValue={1000}
                        minValue={0}
                        value={value}
                        onChange={(value) => setValue({ ...value })}
                        type="button"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-6 col-md-3">
                  <select
                    name="minYear"
                    className="form-control"
                    onChange={handleSelect}
                    disabled={!carData.model}
                    value={carData.minYear}
                  >
                    <option selected>Min Year</option>
                    {carYearList}
                  </select>
                </div>

                <div className="form-group col-6 col-md-3">
                  <select
                    name="maxYear"
                    className="form-control"
                    onChange={handleSelect}
                    disabled={!carData.model}
                    value={carData.maxYear}
                  >
                    <option selected>Max Year</option>
                    {carYearList}
                  </select>
                </div>

                <div className="form-group col-12 col-md-6">
                  <div className="row ">
                    <p className="col-7 text-left text-md-right advance">
                      ADVANCE SEARCH
                    </p>
                    <div className="col-sm-5">
                      {/* <input type="range" class="form-control-range" id="formControlRange" /> */}
                      <button type="submit" className="btn btn-primary">
                        SEARCH THE VEHICLE{" "}
                        <img src="/assets/icons/caret-right.svg" alt="go" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container my-5">
          <div className="row d-none d-md-flex">
            {searchResultData.map((car, index) => (
              <CarList car={car} />
            ))}
          </div>
        </div>

        <div className="section6">
          <div className="container">
            <div className="col-md-12">
              <div className="faq">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="row faq1 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img
                                src="/assets/icons/searching.svg"
                                alt="search"
                              />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row faq2 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img src="/assets/icons/naira.svg" alt="search" />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row faq3 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img src="/assets/icons/cycle.svg" alt="search" />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                </div>
                <p className="questions">
                  QUESTIONS? CALL US : <strong>+234 818 984 0160</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </HomeLayout>
  );
};

export default Home;
