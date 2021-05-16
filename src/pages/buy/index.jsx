import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

import GridDropdown from "react-grid-dropdown";
import Dropdown from "../../components/dropdown";
import MakeDropdown from "../../components/make-dropdown";
import Carlist from "../../components/car-list";
import InputRange from "react-input-range";
import HomeLayout from "../../components/layouts/home-layout";
import Budget from "../../components/budget";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import Loading from "../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";

const Buy = (props) => {
  const [carData, setCarData] = useState([]);
  const [carMakeData, setCarMakeData] = useState([]);
  const [carModelData, setCarModelData] = useState([]);
  const [carYearData, setCarYearData] = useState([]);
  const [carTrimData, setCarTrimData] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [showError, setshowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({ min: 0, max: 0 });
  const [data, setData] = useState({ make: "Make" });
  const router = useRouter();

  useEffect(() => {
    search();
    getMakes();
    getTransmission();
  }, []);

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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "An error occured",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const resetSelects = () => {
    document.getElementById("model").selectedIndex = 0;
    document.getElementById("year").selectedIndex = 0;
    document.getElementById("grade").selectedIndex = 0;
    document.getElementById("trim").selectedIndex = 0;
  };
  const getSelectedMake = (make) => {
    resetSelects();
    setData({ make });
    getModel(make);
    search({ make });
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "An error occured",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const setSelectedModel = (model) => {
    setData({ ...data, model });
    getYear(data.make, model);
    // getTrim(data.make, model)
    let dataFilter = {
      ...data,
      model,
    };
    if (dataFilter.make === "Make") delete dataFilter.make;
    search(dataFilter);
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
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "An error occured",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };

  // const getTrim = (make, model) => {
  //     setLoading(true);
  //     getCall(`${endpoints.getTrim(make, model)}`)
  //         .then((response) => {
  //             const data = response.data;
  //             setLoading(false);
  //             if (response.status === 200) {
  //                 setErrorText(data.message);
  //                 setCarTrimData(response.data.data);
  //             } else {
  //                 setshowError(true);
  //                 setErrorText("Oops! something went wrong. keep calm and try again.");
  //                 toast.notify('Oops! something went wrong. keep calm and try again.', {
  //                     duration: 5,
  //                     title: "An error occured",
  //                     type: "error",
  //                 });
  //             }
  //         })
  //         .catch((error) => {
  //             setshowError(true);
  //             setLoading(false);
  //             setErrorText("Oops! something went wrong. keep calm and try again.");
  //             toast.notify('Oops! something went wrong. keep calm and try again.', {
  //                 duration: 5,
  //                 title: "An error occured",
  //                 type: "error",
  //             });
  //         });
  // };

  const getTransmission = async () => {
    try {
      setLoading(true);
      let response = await getCall(`${endpoints.getTransmission}`);
      setLoading(false);
      setCarTrimData(response.data.data);
    } catch (error) {
      setLoading(false);
      toast.notify("Can not load transmission at the moment", {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  };
  const search = ({ ...searchParams }) => {
    if (searchParams?.make === "Make") delete searchParams.make;
    if (searchParams?.grade) {
      searchParams.grade = searchParams.grade.toLowerCase();
    }
    if (searchParams && searchParams.trim) {
      searchParams.transmission = searchParams.trim;
    }
    setLoading(true);
    getCall(`${endpoints.getSearch(searchParams)}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          setErrorText(data.message);

          if (typeof response.data.data === "string") {
            toast.notify("No car matched your search criteria", {
              duration: 5,
              title: "Not found",
              type: "error",
            });
          } else {
            if (response.data.data.currency) delete response.data.data.currency;
            if (response.data.data.totalCars)
              delete response.data.data.totalCars;
            setCarData(Object.values(response.data.data));
          }
        } else {
          setshowError(true);
          setErrorText("Oops! something went wrong. keep calm and try again.");
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "An error occured",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        setErrorText("Oops! something went wrong. keep calm and try again.");
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const seeAll = () => {
    router.push({ pathname: "/all-cars" }, "/all-cars", { carData });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    let dataFilter = {
      ...data,
      [e.target.name]: e.target.value,
    };
    if (dataFilter.make === "Make") delete dataFilter.make;
    if (dataFilter.price) {
      if (
        dataFilter.price.split("-")[0] * 1 &&
        dataFilter.price.split("-")[1] * 1
      ) {
        dataFilter.minPrice = dataFilter.price.split("-")[0] * 1;
        dataFilter.maxPrice = dataFilter.price.split("-")[1] * 1;
        delete dataFilter.price;
      } else if (
        dataFilter.price.split("-")[0] * 1 === 0 &&
        dataFilter.price.split("-")[1] * 1
      ) {
        dataFilter.maxPrice = dataFilter.price.split("-")[1] * 1;
        delete dataFilter.price;
        delete dataFilter.minPrice;
      } else if (
        dataFilter.price.split("-")[0] * 1 &&
        dataFilter.price.split("-")[1] * 1 === 0
      ) {
        dataFilter.minPrice = dataFilter.price.split("-")[0] * 1;
        delete dataFilter.price;
        delete dataFilter.maxPrice;
      }
    }
    search(dataFilter);
  };

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
  return (
    <HomeLayout footer="two" header="two">
      <Head>
        <title>Buy used cars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Buy used cars" key="title" />
      </Head>
      {loading && <Loading />}
      <div className="buy">
        <div className="jumbotron">
          <OwlCarousel
            className="owl-theme"
            margin={10}
            responsive={responsive}
          // autoplay
          // loop
          // autoplayTimeout={5000}
          >
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                  </div>
                </div>
              </div>

              <img src="https://storage.googleapis.com/cars45-web-bucket/buy-banner.png" alt="banner" />
            </div>
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                  </div>
                </div>
              </div>

              <img src="https://storage.googleapis.com/cars45-web-bucket/buy-banner.png" alt="banner" />
            </div>
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                  </div>
                </div>
              </div>

              <img src="https://storage.googleapis.com/cars45-web-bucket/buy-banner.png" alt="banner" />
            </div>
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                  </div>
                </div>
              </div>

              <img src="https://storage.googleapis.com/cars45-web-bucket/buy-banner.png" alt="banner" />
            </div>
          </OwlCarousel>
          <div className="row banner-bottom d-none d-md-flex">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="banner-bottom-container mr-0 mr-md-4 ml-4 ml-md-5">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search brands"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={(e) =>
                          setData({ ...data, make: e.target.value })
                        }
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-link"
                          onClick={() => search(data)}
                          type="button"
                          id="button-addon2"
                        >
                          <img src="https://storage.googleapis.com/cars45-web-bucket/search.svg" alt="search" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-3 col-xl-2">
                    <p className="teal-color find">Find Cars By:</p>
                  </div>
                  <div className="col">
                    <MakeDropdown
                      name={data.make}
                      data={carMakeData}
                      getSelectedMake={getSelectedMake}
                    />
                  </div>
                  <div className="col">
                    {/* <Dropdown name={'Model'} /> */}
                    <select
                      className="form-control"
                      id="model"
                      name="model"
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="">Model</option>
                      {carModelData.map((model, i) => (
                        <option key={i} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    {/* <Dropdown name={'Year'} /> */}
                    <select
                      className="form-control"
                      name="year"
                      id="year"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Year</option>
                      {carYearData.map((year, i) => (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    {/* <Dropdown name={'Grade'} /> */}
                    <select
                      className="form-control"
                      name="grade"
                      id="grade"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                  <div className="col d-lg-none d-xl-flex">
                    {/* <Dropdown name={'Price'} /> */}
                    <select
                      className="form-control"
                      name="price"
                      id="price"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Price</option>
                      <option value="0-1000000">0 - ₦1m</option>
                      <option value="1000000-2000000">₦1m - ₦2m</option>
                      <option value="2000000-4000000">₦2m - ₦4m</option>
                      <option value="4000000-6000000">₦4m - ₦6m</option>
                      <option value="6000000-10000000">₦6m - ₦10m</option>
                      <option value="10000000-0">₦10m - Above</option>
                    </select>
                  </div>
                  <div className="col d-lg-none d-xl-flex">
                    {/* <Dropdown name={'Transmission'} /> */}
                    <select
                      className="form-control transmission"
                      name="trim"
                      id="trim"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Transmission</option>
                      {carTrimData.map((trim, i) => (
                        <option value={trim.filter_id} key={i}>
                          {trim.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE   */}
          <div className="row banner-bottom d-flex d-md-none">
            <div className="col-12">
              <div className="banner-bottom-container mr-0 mr-md-4 ml-4 ml-md-5">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search brands"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={(e) =>
                          setData({ ...data, make: e.target.value })
                        }
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-link"
                          onClick={() => search(data)}
                          type="button"
                          id="button-addon2"
                        >
                          <img src="https://storage.googleapis.com/cars45-web-bucket/search.svg" alt="search" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="teal-color find">Find Cars By:</p>
                  </div>
                  <div className="col-4 text-center">
                    <MakeDropdown
                      name={data.make}
                      data={carMakeData}
                      getSelectedMake={getSelectedMake}
                    />
                  </div>
                  <div className="col-4 text-center">
                    {/* <Dropdown name={'Model'} /> */}
                    <select
                      className="form-control"
                      id="model"
                      name="model"
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="">Model</option>
                      {carModelData.map((model, i) => (
                        <option key={i} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4 text-center">
                    {/* <Dropdown name={'Year'} /> */}
                    <select
                      className="form-control"
                      name="year"
                      id="year"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Year</option>
                      {carYearData.map((year, i) => (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6 ml-3 text-center">
                    {/* <Dropdown name={'Grade'} /> */}
                    <select
                      className="form-control"
                      name="grade"
                      id="grade"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                  <div className="col-6 d-none text-center">
                    {/* <Dropdown name={'Price'} /> */}
                    <select
                      className="form-control"
                      name="price"
                      id="price"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Price</option>
                      <option value="0-1000000">0 - ₦1m</option>
                      <option value="1000000-2000000">₦1m - ₦2m</option>
                      <option value="2000000-4000000">₦2m - ₦4m</option>
                      <option value="4000000-6000000">₦4m - ₦6m</option>
                      <option value="6000000-10000000">₦6m - ₦10m</option>
                      <option value="10000000-0">₦10m - Above</option>
                    </select>
                  </div>
                  <div className="col-12 d-none text-center">
                    {/* <Dropdown name={'Transmission'} /> */}
                    <select
                      className="form-control transmission"
                      name="trim"
                      id="trim"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Transmission</option>
                      {carTrimData.map((trim, i) => (
                        <option value={trim.filter_id} key={i}>
                          {trim.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed-socials">
            <div>
              <Link href="http://facebook.com/cars45.NG">
                <button className="btn btn-link">
                  <img
                    src="https://storage.googleapis.com/cars45-web-bucket/fb.svg"
                    className="fb"
                    alt="facebook"
                  />
                </button>
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/cars45ng/">
                <button className="btn btn-link">
                  <img src="https://storage.googleapis.com/cars45-web-bucket/insta.svg" alt="instagram" />
                </button>
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/cars45ng">
                <button className="btn btn-link">
                  <img src="https://storage.googleapis.com/cars45-web-bucket/tw.svg" alt="twitter" />
                </button>
              </Link>
            </div>
            <div>
              <button className="btn btn-link">
                <img src="https://storage.googleapis.com/cars45-web-bucket/yt.svg" alt="youtube" />
              </button>
            </div>
          </div>
        </div>

        {carData.length ? (
          <div className="car-list">
            <div className="container">
              <div className="row d-none d-xl-flex">
                {carData.length >= 5
                  ? carData.slice(0, 5).map((car, i) => (
                    <div className="col mb-5" key={i}>
                      <Carlist {...props} car={car} />
                    </div>
                  ))
                  : carData.map((car, i) => (
                    <div className="col mb-5" key={i}>
                      <Carlist {...props} car={car} />
                    </div>
                  ))}
              </div>

              <div className="row d-none d-lg-flex d-xl-none">
                {carData.length >= 5
                  ? carData.slice(0, 5).map((car, i) => (
                    <div className="col-lg-4 mb-5" key={i}>
                      <Carlist {...props} car={car} />
                    </div>
                  ))
                  : carData.map((car, i) => (
                    <div className="col-lg-4 mb-5" key={i}>
                      <Carlist {...props} car={car} />
                    </div>
                  ))}
              </div>

              <div className="row d-block d-md-flex d-lg-none">
                {carData.length >= 5
                  ? carData.slice(0, 5).map((car, i) => (
                    <div key={i} className="col-12 col-md-6 mb-md-3 mb-lg-0">
                      <Carlist {...props} car={car} />
                    </div>
                  ))
                  : carData.map((car, i) => (
                    <div key={i} className="col-12 col-md-6 mb-md-3 mb-lg-0">
                      <Carlist {...props} car={car} />
                    </div>
                  ))}
              </div>

              <div className="row mt-5 mb-5">
                <div className="col-md-4 offset-md-4 text-center">
                  <button
                    className="btn btn-primary dark-color orange-background"
                    onClick={() => seeAll()}
                  >
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <Budget />

        <ToastContainer align={"right"} position={"bottom"} />
      </div>
    </HomeLayout>
  );
};

export default Buy;
