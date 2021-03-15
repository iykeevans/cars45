import React from 'react';
import '../../asset/scss/cardetails.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scroller } from "react-scroll";

const Cardetails = (props) => {
    React.useEffect(() => {

    })

    var reffs = {}

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
                                <div className="col-md-5">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cardetails;