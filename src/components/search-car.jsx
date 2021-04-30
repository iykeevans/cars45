import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Chat from "./chat";
import { getCall, postCall } from "../api/request";
import { toast, ToastContainer } from "react-nextjs-toast";
import endpoints from "../api/endPoints";
import Loading from "./loadingScreen";

import InputRange from "react-input-range";


const Search = ({ setSearchResultData, setPage, getSearchParams }) => {
  const router = useRouter();
  useEffect(() => {
    getTypes();
    getMakes();
    getTransmission();
  }, []);

  const [carData, setCarData] = useState({});
  const [carMakeData, setCarMakeData] = useState([]);
  const [carModelData, setCarModelData] = useState([]);
  const [carYearData, setCarYearData] = useState([]);
  const [carTrimData, setCarTrimData] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [showError, setshowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({ min: 0, max: 0 });
  const [types, setTypes] = useState([]);
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
  const getTypes = async () => {
    try {
      setLoading(true);
      let response = await getCall(`${endpoints.getBodyType}`)
      setLoading(false);
      setTypes(response.data.data);
    } catch (error) {
      setLoading(false);
      toast.notify('Can not load body types at the moment', {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  }
  const getTransmission = async () => {
    try {
      setLoading(true);
      let response = await getCall(`${endpoints.getTransmission}`)
      setLoading(false);
      setCarTrimData(response.data.data);
    } catch (error) {
      setLoading(false);
      toast.notify('Can not load transmission at the moment', {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  }
  const carMakeList = carMakeData.map((make, index) => (
    <option key={index} value={make}>{make}</option>
  ));

  const carModelList = carModelData.map((model, index) => (
    <option key={index} value={model}>{model}</option>
  ));

  const carYearList = carYearData.map((year, index) => (
    <option key={index} value={year}>{year}</option>
  ));
  const carMaxYearList = carYearData.filter(year => year > carData.minYear).map((year, index) => (
    <option key={index} value={year}>{year}</option>
  ));
  const carTrimList = carTrimData?.map((trim, index) => (
    <option key={index} value={trim.filter_id}>{trim.name}</option>
  ));

  const searchByType = async (type) => {
    setLoading(true)
    const response = await getCall(`${endpoints.getSearch({ type })}`)

    const resData = response.data.data;
    if (getSearchParams) getSearchParams({ type })
    if (setPage && resData.totalCars && resData.totalCars[0]) setPage(resData.totalCars[0])
    setLoading(false);
    if (response.status === 200) {
      if (resData === "No cars in our repository fits your filter.") {
        return toast.notify("No cars in our repository fits your filter.", {
          duration: 5,
          title: "Success",
          type: "warning",
        });
      }
      const resDataArr = Object.values(resData)
      if (resDataArr.length < 1) {
        return toast.notify(
          "No Available cars in our repository fits your filter.",
          {
            duration: 5,
            title: "Success",
            type: "warning",
          }
        );
      }
      if (setSearchResultData) setSearchResultData(resDataArr)
      router.push({ pathname: "/all-cars" }, "/all-cars", {
        carData: resDataArr,
        searchParam: { type },
        pagination: resData.totalCars[0] || null
      });

    } else {
      setLoading(false);
      toast.notify("Oops! something went wrong. keep calm and try again.", {
        duration: 5,
        title: "Something when wrong",
        type: "warning",
      });
    }
  }


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
    if (value) {
      searchParam.minPrice = value.min;
      searchParam.maxPrice = value.max;
    }
    if (carData.gearType) {
      searchParam.transmission = carData.gearType
    }
    if (carData.condition) {
      searchParam.condition = carData.condition
    }
    setLoading(true);
    getCall(`${endpoints.getSearch({ ...searchParam, page: 0 })}`)
      .then((response) => {
        const resData = response.data.data;
        if (getSearchParams) getSearchParams(searchParam)
        if (setPage && resData.totalCars && resData.totalCars[0]) setPage(resData.totalCars[0])
        setLoading(false);
        if (response.status === 200) {
          if (typeof resData === "string") {
            toast.notify("No cars in our repository fits your filter.", {
              duration: 5,
              title: "Success",
              type: "warning",
            });
            return
          }
          const resDataArr = Object.values(resData).filter(
            (item) => item.status
          );
          if (setSearchResultData) setSearchResultData(resDataArr)
          router.push({ pathname: "/all-cars" }, "/all-cars", {
            carData: resDataArr,
            searchParam,
            pagination: resData.totalCars[0] || null
          });

        } else {
          setLoading(false);
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        toast.notify("No Available cars in our repository fits your filter.", {
          duration: 5,
          title: "Success",
          type: "error",
        });
      });
  };

  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "make") {
      getModel(value);
      setCarData({ ...{}, [name]: value });
    }
    if (name == "model") {
      getYear(carData.make, value);
      // getTrim(carData.make, value);
    }
    setCarData({ ...carData, [name]: value });
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="section2 dark-background">
        <div className="container">
          {types.length ? <div className="row">
            <div className="col-lg-2 align-self-center">
              <p className="white-color mt-4">SELECT VEHICLE TYPE</p>
            </div>
            <div className="col-lg-8 text-center">
              <div className="row mt-3">
                {types.map((type, index) => (
                  <div key={index} className="col-4 mb-3 mb-md-0 col-md-3 col-lg-3 col-xl-2 mt-3" onClick={() => searchByType(type.filter_id)}>
                    <div className="car-option">
                      <img src={`/assets/icons/${type.name}.svg`} alt={type.name} />
                      <p className="text-center dark-color"><span>{type.name}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Chat />
          </div> : null}

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-12 col-md-3">
                <select
                  name="make"
                  className="form-control"
                  onChange={handleSelect}
                >
                  <option selected>Any Make</option>
                  {carMakeList}
                </select>
              </div>

              <div className="form-group col-12 col-md-3">
                <select
                  name="model"
                  className="form-control"
                  onChange={handleSelect}
                  disabled={!carData.make}
                >
                  <option selected>Any Model</option>
                  {carModelList}
                </select>
              </div>

              <div className="form-group col-12 col-md-3">
                <select
                  name="gearType"
                  className="form-control last"
                  onChange={handleSelect}
                  disabled={!carTrimData.length}
                >
                  <option selected>Gear Type</option>
                  {carTrimList}
                </select>
              </div>
              <div className="form-group col-12 col-md-3 ranger">
                <div className="row">
                  <label
                    htmlFor="formControlRange"
                    className="col-sm-4 pl-0 pr-0 col-form-label"
                  >
                    PRICE RANGE
                    </label>
                  <div className="col-12 col-sm-8">
                    {/* <input type="range" class="form-control-range" id="formControlRange" /> */}

                    <InputRange
                      maxValue={30000000}
                      minValue={800000}
                      value={value}
                      onChange={(value) => setValue({ ...value })}
                      type="button"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-12 col-md-3 mt-4 mt-md-0">
                <select
                  name="minYear"
                  className="form-control"
                  onChange={handleSelect}
                  disabled={!carData.model}
                >
                  <option selected>Min Year</option>
                  {carYearList}
                </select>
              </div>

              <div className="form-group col-12 col-md-3">
                <select
                  name="maxYear"
                  className="form-control"
                  onChange={handleSelect}
                  disabled={!carData.model}
                >
                  <option selected>Max Year</option>
                  {carMaxYearList}
                </select>
              </div>

              <div className="form-group col-12 col-md-3">
                <select
                  name="condition"
                  className="form-control"
                  onChange={handleSelect}
                >
                  <option value="">Select Condition</option>
                  <option value="new">Brand New</option>
                  <option value="foreign">Foreign Used</option>
                  <option value="local">Local Used</option>
                </select>
              </div>
              <div className="form-group col-12 col-md-12 text-md-right">
                <div className="row ">
                  <p className="col-7 text-left text-md-right advance">
                    {/* ADVANCE SEARCH */}
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
      <ToastContainer align={"right"} position={"bottom"} />
    </div>
  );
};

export default Search;
