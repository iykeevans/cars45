import React from 'react';
import '../../asset/scss/cardetails.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carlist from "../car-list";

const Cardetails = (props) => {
    React.useEffect(() => {

    })

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
            return (
                <a>
                    <img className={`slideClass${i}`} style={{ width: '70px', height: '50px' }} src={`/assets/images/car${i + 1}.jpeg`} />
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
        console.log(document.getElementsByClassName('slick-thumb').scrollLeft)
        // scroller.scrollTo(`slideClass${val}`, {
        //     duration: 800,
        //     delay: 0,
        //     smooth: "easeInOutQuart",
        //     offset: 100
        // });
    }
    const next = () => {
        slider.slickNext()
    }

    return (
        <div className="car-details mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-3 title-container">
                            <div className="d-flex justify-content-between title">
                                <p>Home</p>
                                <p>Honda Pilot</p>
                                <p>2016 Honda Pilot</p>
                            </div>
                        </div>
                        <div className="car-container">
                            <div className="row">
                                <div className="col-md-7">
                                    <Slider {...settings} ref={c => (slider = c)}>
                                        <div>
                                            <img src="/assets/images/car1.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car2.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car3.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car4.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car5.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car6.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car7.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car8.jpeg" />
                                        </div>
                                        <div>
                                            <img src="/assets/images/car8.jpeg" />
                                        </div>

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
                                        <div className="col-md-5 align-self-center">
                                            <h5>2016 Honda Pilot</h5>
                                        </div>
                                        <div className="col-md-1 text-right">
                                            <div className="border-right" />
                                        </div>
                                        <div className="col-md-5 align-self-center">
                                            <h5>₦ 10,360,000</h5>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="simple-details">2016 •automatic •27,471Km •NG-526229</p>
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
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <div className="more-container">
                                                <div className="row">
                                                    <div className="col-md-12 text-left">
                                                        <h5 className="overview">Overview</h5>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="d-flex car-type">
                                                            <img src="/assets/icons/car-type.svg" alt="type" />
                                                            <p>SUV</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="d-flex fuel">
                                                            <img src="/assets/icons/fuel.svg" alt="type" />
                                                            <p>Petrol</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="d-flex transmission">
                                                            <img src="/assets/icons/transmission.svg" alt="type" />
                                                            <p>Automatic</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="d-flex stars">
                                                            <img src="/assets/icons/stars.svg" alt="type" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 text-left mt-4">
                                                        <h5 className="overview">General Information</h5>

                                                        <div className="col-md-6">
                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Make</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Honda</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Model</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Pilot</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Year</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>2016</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Mileage</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>27471</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Location</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Car45, Porthacourt</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Transmission</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Automatic</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Selling Condition</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Registered</p>
                                                                </div>
                                                            </div>

                                                            <div className="row border-bottom">
                                                                <div className="col-md-6">
                                                                    <p>Colour</p>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <p>Black</p>
                                                                </div>
                                                            </div>

                                                            <div className="text-center less">
                                                                <button className="btn btn-link">View less</button>
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>


                                <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                                    <div className="mt-3 border-top border-bottom pb-5">
                                        <div className="container pl-5 pt-3">
                                            <h5 className="overview">Features</h5>

                                            <div className="row">
                                                <div className="col-md-9 feature-list">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Cool box</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Sunroof</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>DVD System</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Remote Key Box</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Car Tracker</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Park Assist</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Heated Seats</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Seat Massager</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Parking Sensor</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Push Start Stop</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Reverse Camera</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Navigation System</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Adaptive Head Lamp</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Bluetooth Hands Free</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Touchscreen Audio System</p>
                                                        </div>
                                                        <div className="col-md-6 text-left">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="tab-pane fade" id="inspection" role="tabpanel" aria-labelledby="inspection-tab">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-3 inspection-menu">
                                                    <ul>
                                                        <li>
                                                            <button className="btn btn-outline-secondary active btn-block">Interior</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-secondary btn-block">Exterior</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-secondary btn-block">Transmission</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-secondary btn-block">Engine</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-secondary btn-block">AC & Electrical</button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-secondary btn-block">Steering & Brake</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-9 inspection-details">
                                                    <div className="row">
                                                        <div className="col-md-1 align-self-center">
                                                            <img src="/assets/icons/check.svg" alt="check" />
                                                        </div>
                                                        <div className="col-md-11 align-self-center">
                                                            <p>No damage to the roof upholstery except regular use wear and tear</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-1 align-self-center">
                                                            <img src="/assets/icons/check.svg" alt="check" />
                                                        </div>
                                                        <div className="col-md-11">
                                                            <p>No damage to the seat upholstery except regular use wear and tear</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-1 align-self-center">
                                                            <img src="/assets/icons/check.svg" alt="check" />
                                                        </div>
                                                        <div className="col-md-11">
                                                            <p>No damage to the dashboard fittings except regular use wear and tear</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-1 align-self-center">
                                                            <img src="/assets/icons/check.svg" alt="check" />
                                                        </div>
                                                        <div className="col-md-11">
                                                            <p>All door fittings and trims available with no damages</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-1 align-self-center">
                                                            <img src="/assets/icons/no-check.svg" alt="check" />
                                                        </div>
                                                        <div className="col-md-11">
                                                            <p>Steering Wheel Controls not in working condition</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
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
                                    <Carlist key={index} />
                                ))}
                            </div>
                        </div>
                        <h1 onClick={() => slide("next")}>&#x203A;</h1>
                    </div>

                </div>



            </div>
        </div >
    )
}

export default Cardetails;