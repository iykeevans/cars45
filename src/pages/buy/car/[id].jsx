import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Slider from "react-slick";
import Carlist from "../../../components/car-list";
import Caroverview from '../../../components/car-overview';
import Carfeatures from '../../../components/car-features';
import Carinspection from '../../../components/car-inspection';
import HomeLayout from "../../../components/layouts/home-layout"
import { getCall, postCall } from "../../../api/request";
import endpoints from "../../../api/endPoints";
import Loading from "../../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";


const Cardetails = (props) => {
    useEffect(() => {
        const id = props.id.split("_")[1]
        //  const id = "NG-196632"
        getSingleCar(id)
    }, [])
    const [carData, setCarData] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('Loading car details...')
    const router = useRouter()
    // const getPreviousData = (data) => {
    //     let search = decodeURIComponent(data)
    //     search = search.split('=')[1]
    //     search = JSON.parse(search)
    //     setPreviousData(search)

    // }
    const getSingleCar = (sku) => {
        setLoading(true);
        getCall(`${endpoints.getSingleCar(sku)}`)
            .then((response) => {
                const data = response.data;
                setLoading(false);
                if (response.status === 200) {
                    //   setErrorText(data.message);
                    //   setCarYearData(response.data.data);
                    if (typeof response.data.data === 'string') {
                        setCarData()
                        setMessage('Car details not found')
                        toast.notify('Oops! Can not get more details about this car', {
                            duration: 5,
                            title: "An error occured",
                            type: "error",
                        });
                        setTimeout(() => {
                            // if (previousData) {
                            //     let search = decodeURIComponent(previousData)
                            //     search = JSON.parse(search.split('=')[1])
                            //     return router.push({ pathname: '/buy', query: { data: JSON.stringify(search) } })
                            // }

                            router.back()
                        }, 5100);
                    } else {
                        return setCarData(response.data.data)
                    }
                } else {
                    //   setshowError(true);
                    //   setErrorText("Oops! something went wrong. keep calm and try again.");
                }
            })
            .catch((error) => {
                // setshowError(true);
                setLoading(false);
                // setErrorText("Oops! something went wrong. keep calm and try again.");
            });
    };


    const mock_cars = Array.from({ length: 10 }, (x) => x);
    const ref = React.useRef();

    const slide = (position) => {
        let left = ref.current.scrollLeft;
        switch (position) {
            case "next":
                ref.current.scroll(left + 510, 0);
                return;
            case "prev":
                ref.current.scroll(left - 510, 0);
                return;
            default:
                return;
        }
    };

    const settings = {
        customPaging: function (i) {
            const images = carData.images
            return (
                <a>
                    <img className={`slideClass${i}`} style={{ width: '70px', height: '50px' }} src={`https://buy.cars45.com/image/${images[i].images}`} />
                </a>
            );
        },
        // afterChange: () =>
        //     this.setState(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => getNext(next),
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var slider = React.useRef()
    const getNext = (val) => {
    }
    const next = () => {
        slider.slickNext()
    }
    return (
        <HomeLayout footer="two" header="two">
            {loading && <Loading />}
            {carData ? <div className="car-details mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-12 col-md-3 title-container">
                                <div className="d-flex justify-content-between title">
                                    <p>Home</p>
                                    <p>{carData?.make}</p>
                                    <p>{carData?.year} {carData?.make}</p>
                                </div>
                            </div>
                            <div className="car-container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <Slider {...settings} ref={c => (slider = c)}>
                                            {
                                                carData?.images?.map((img, index) => (

                                                    <div>
                                                        <img src={`https://buy.cars45.com/image/${img.images}`} />
                                                    </div>
                                                ))
                                            }

                                        </Slider>
                                        <div className="prev-button-container">
                                            <button type="button" data-role="none" className="btn btn-link prev-button" onClick={() => slider.slickPrev()}><img src="/assets/icons/prev.svg" alt="prev" /></button>
                                        </div>
                                        <div className="next-button-container">
                                            <button type="button" data-role="none" className="btn btn-link  next-button" onClick={() => next()}><img src="/assets/icons/next.svg" alt="next" /></button>
                                        </div>

                                    </div>
                                    <div className="col-md-5 quick-details">
                                        <div className="row quick-details-container mt-3">
                                            <div className="col-5 col-md-5 align-self-center">
                                                <h5>{carData?.year} {carData?.make}</h5>
                                            </div>
                                            <div className="col-1 col-md-1 text-right">
                                                <div className="border-right" />
                                            </div>
                                            <div className="col-5 col-md-5 align-self-center">
                                                <h5>₦ {(carData?.price * 1)?.toLocaleString()}</h5>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <p className="simple-details">{carData?.year} {" "} •{carData?.trim} •{carData?.mileage} •₦{(carData?.price * 1)?.toLocaleString()}</p>
                                        </div>
                                        <div className="recent">
                                            <p>12 buyers have viewed this vehicle in the last 24 hours</p>
                                        </div>


                                        <div className="mt-3">

                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="reserve-tab" data-toggle="tab" href="#reserve" role="tab" aria-controls="reserve" aria-selected="true">Reserve this car</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="refer-tab" data-toggle="tab" href="#refer" role="tab" aria-controls="refer" aria-selected="false">Refer a buyer</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="false">Pay deposit</a>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="reserve" role="tabpanel" aria-labelledby="reserve-tab">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="content-container">
                                                            <form>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Your name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="basic-addon1">+234</span>
                                                                        </div>
                                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" id="offer" placeholder="Make us an offer" />
                                                                </div>

                                                                <button type="submit" className="btn btn-primary btn-block">SPEAK TO OUR AGENT</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade" id="refer" role="tabpanel" aria-labelledby="refer-tab">...</div>



                                                <div className="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">...</div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more-details mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="details-tab" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="true">Car Details</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="features-tab" data-toggle="tab" href="#features" role="tab" aria-controls="features" aria-selected="false">Features</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="inspection-tab" data-toggle="tab" href="#inspection" role="tab" aria-controls="contact" aria-selected="false">Inspection</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="details" role="tabpanel" aria-labelledby="details-tab">
                                        <Caroverview car={carData} interestedInCar={window.location.href} />

                                    </div>


                                    <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                                        <div className="mt-3 border-top border-bottom pb-5">
                                            <div className="container pl-0 pl-md-5 pt-0 pt-md-3">
                                                <h5 className="overview">Features</h5>

                                                <Carfeatures car={carData} />
                                            </div>
                                        </div>
                                    </div>




                                    <div className="tab-pane fade" id="inspection" role="tabpanel" aria-labelledby="inspection-tab">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <Carinspection car={carData} />
                                            </div>
                                        </div>



                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="recommended mt-3 pb-5 mb-5">
                        {/* <h5 className="overview">Recommended marketplace cars for you</h5> */}

                        <div className="autopreneneur-rec-carousel">
                            <h1 onClick={() => slide("prev")}>&#x2039;</h1>
                            <div className="autopreneneur-suggestion">
                                <h4>Recommended Marketplace Cars For You</h4>
                                <div ref={ref} className="autopreneneur-recommended">
                                    {mock_cars.map((item, index) => (
                                        <Carlist key={index} car={item} />
                                    ))}
                                </div>
                            </div>
                            <h1 onClick={() => slide("next")}>&#x203A;</h1>
                        </div>

                    </div>



                </div>
            </div > :

                <div className="row">
                    <div className="col-lg-8 offset-md-2">
                        <div className="card no-details">
                            <h4>{message}</h4>
                        </div>
                    </div>
                </div>}
            <ToastContainer align={"right"} position={"bottom"} />
        </HomeLayout>
    )
}



Cardetails.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
}

export default Cardetails;