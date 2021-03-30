import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false })

import GridDropdown from 'react-grid-dropdown'
import Dropdown from '../../components/dropdown'
import MakeDropdown from '../../components/make-dropdown'
import Carlist from '../../components/car-list';
import InputRange from 'react-input-range';
import HomeLayout from "../../components/layouts/home-layout";
import Budget from "../../components/budget";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import Loading from "../../components/loadingScreen";


const Buy = (props) => {
    const [carData, setCarData] = useState({});
    const [carMakeData, setCarMakeData] = useState([]);
    const [carModelData, setCarModelData] = useState([]);
    const [carYearData, setCarYearData] = useState([]);
    const [carTrimData, setCarTrimData] = useState([]);
    const [errorText, setErrorText] = useState("");
    const [showError, setshowError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState({ min: 0, max: 0 });
    const router = useRouter()

    useEffect(() => {

      getMakes();
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

    const responsive = {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    };
    console.log({carMakeData})
    return (
        <HomeLayout footer="two" header="two">
            <div className="buy">
                <div className="jumbotron">

                    <OwlCarousel
                        className='owl-theme'
                        margin={10}
                        responsive={responsive}
                    // autoplay
                    // loop
                    // autoplayTimeout={5000}
                    >
                        <div className='item'>
                            <div className="banner-text">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                                    </div>
                                </div>
                            </div>

                            <img src="/assets/images/buy-banner.png" alt="banner" />
                        </div>
                        <div className='item'>
                            <div className="banner-text">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                                    </div>
                                </div>
                            </div>

                            <img src="/assets/images/buy-banner.png" alt="banner" />
                        </div>
                        <div className='item'>
                            <div className="banner-text">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                                    </div>
                                </div>
                            </div>

                            <img src="/assets/images/buy-banner.png" alt="banner" />
                        </div>
                        <div className='item'>
                            <div className="banner-text">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h1>Buy Verified Cars on Cars45 Marketplace</h1>
                                    </div>
                                </div>
                            </div>

                            <img src="/assets/images/buy-banner.png" alt="banner" />
                        </div>

                    </OwlCarousel>
                    <div className="row banner-bottom">
                        <div className="col-12 col-lg-8 offset-lg-2">
                            <div className="banner-bottom-container mr-0 mr-md-4 ml-4 ml-md-5">
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search brands" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-link" type="button" id="button-addon2"><img src="/assets/icons/search.svg" alt="search" /> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="teal-color find">Find Cars By:</p>
                                    </div>
                                    <div className="col">
                                        <MakeDropdown name={'Make'} data={carMakeData}/>
                                        {/* <GridDropdown
                                        label="Model"
                                        activeItem={activeItem}
                                        items={
                                            [{ section: 'Toyota', label: 'Venza', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camrytrhwhwhehhwhqh', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Corrola', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Honda', label: 'Accord', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '740i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '320i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '540M', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C350', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E500', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'Maybach', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Rolls Royce', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Bently', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }]
                                        }
                                    /> */}
                                    </div>
                                    <div className="col">
                                        <Dropdown name={'Model'} />
                                        {/* <GridDropdown
                                        label="Model"
                                        activeItem={activeItem}
                                        items={
                                            [{ section: 'Toyota', label: 'Venza', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camrytrhwhwhehhwhqh', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Corrola', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Honda', label: 'Accord', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '740i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '320i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '540M', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C350', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E500', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'Maybach', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Rolls Royce', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Bently', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }]
                                        }
                                    /> */}
                                    </div>
                                    <div className="col">
                                        <Dropdown name={'Year'} />

                                    </div>
                                    <div className="col">
                                        <Dropdown name={'Grade'} />

                                    </div>
                                    <div className="col">
                                        <Dropdown name={'Price'} />

                                    </div>
                                    <div className="col">
                                        <Dropdown name={'Transmission'} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed-socials">
                        <div>
                            <button className="btn btn-link"><img src="/assets/icons/fb.svg" className="fb" alt="facebook" /></button>

                        </div>
                        <div>
                            <button className="btn btn-link"><img src="/assets/icons/insta.svg" alt="facebook" /></button>

                        </div>
                        <div>
                            <button className="btn btn-link"><img src="/assets/icons/tw.svg" alt="facebook" /></button>

                        </div>
                        <div>
                            <button className="btn btn-link"><img src="/assets/icons/yt.svg" alt="facebook" /></button>

                        </div>
                    </div>


                </div>



                <div className="car-list">
                    <div className="container">
                        <div className="row d-none d-lg-flex">
                            <div className="col">

                                <Carlist {...props} />
                            </div>

                            <div className="col">

                                <Carlist {...props} />
                            </div>

                            <div className="col">

                                <Carlist {...props} />
                            </div>

                            <div className="col">

                                <Carlist {...props} />
                            </div>

                            <div className="col">

                                <Carlist {...props} />
                            </div>
                        </div>


                        <div className="row d-block d-md-flex d-lg-none">
                            <div className="col-12 col-md-6 mb-md-3 mb-lg-0">

                                <Carlist {...props} />
                            </div>

                            <div className="col-12 col-md-6 mb-md-3 mb-lg-0">

                                <Carlist {...props} />
                            </div>

                            <div className="col-12 col-md-6 mb-md-3 mb-lg-0">

                                <Carlist {...props} />
                            </div>

                            <div className="col-12 col-md-6 mb-md-3 mb-lg-0">

                                <Carlist {...props} />
                            </div>

                            <div className="col-12 col-md-6 mb-md-3 mb-lg-0">

                                <Carlist {...props} />
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col-md-4 offset-md-4 text-center">
                                <button className="btn btn-primary dark-color orange-background">See All</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Budget />




            </div >
        </HomeLayout>
    )
}

export default Buy