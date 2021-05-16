import React from 'react';
import Slider from "react-slick";
import Carlist from "../../../components/car-list";
import Caroverview from '../../../components/car-overview';
import Carfeatures from '../../../components/car-features';
import Carinspection from '../../../components/car-inspection';
import HomeLayout from "../../../components/layouts/home-layout"

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
                    <img className={`slideClass${i}`} style={{ width: '70px', height: '50px' }} src={`https://storage.googleapis.com/cars45-web-bucket/car${i + 1}.jpeg`} />
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
            <div className="car-details mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-12 col-md-3 title-container">
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
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car1.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car2.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car3.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car4.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car5.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car6.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car7.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car8.jpeg" />
                                            </div>
                                            <div>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/car8.jpeg" />
                                            </div>

                                        </Slider>
                                        <div className="prev-button-container">
                                            <button type="button" data-role="none" className="btn btn-link prev-button" onClick={() => slider.slickPrev()}><img src="https://storage.googleapis.com/cars45-web-bucket/prev.svg" alt="prev" /></button>
                                        </div>
                                        <div className="next-button-container">
                                            <button type="button" data-role="none" className="btn btn-link  next-button" onClick={() => next()}><img src="https://storage.googleapis.com/cars45-web-bucket/next.svg" alt="next" /></button>
                                        </div>

                                    </div>
                                    <div className="col-md-5 quick-details">
                                        <div className="row quick-details-container mt-3">
                                            <div className="col-5 col-md-5 align-self-center">
                                                <h5>2016 Honda Pilot</h5>
                                            </div>
                                            <div className="col-1 col-md-1 text-right">
                                                <div className="border-right" />
                                            </div>
                                            <div className="col-5 col-md-5 align-self-center">
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
                                        <Caroverview {...props} car={{}} />

                                    </div>


                                    <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                                        <div className="mt-3 border-top border-bottom pb-5">
                                            <div className="container pl-0 pl-md-5 pt-0 pt-md-3">
                                                <h5 className="overview">Features</h5>

                                                <Carfeatures  {...props} car={{}} />
                                            </div>
                                        </div>
                                    </div>




                                    <div className="tab-pane fade" id="inspection" role="tabpanel" aria-labelledby="inspection-tab">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <Carinspection {...props} car={{}} />
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
            </div >
        </HomeLayout>
    )
}

export default Cardetails;