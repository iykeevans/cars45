import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../asset/scss/home.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = (props) => {
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
    return (
        <div>
            <div className="jumbotron">

                <OwlCarousel
                    className='owl-theme'
                    margin={10}
                    responsive={responsive}
                    autoplay
                    loop
                    autoplayTimeout={5000}
                >
                    <div class='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>

                        <img src="/assets/images/banner.svg" alt="banner" />
                    </div>
                    <div class='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner.svg" alt="banner" />

                    </div>
                    <div class='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner.svg" alt="banner" />

                    </div>
                    <div class='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner.svg" alt="banner" />

                    </div>

                </OwlCarousel>
                <div className="row banner-bottom">
                    <div className="col-md-8 offset-md-2">
                        <div className="banner-bottom-container text-center">
                            <h3>UNSURE WHICH VEHICLE YOU ARE LOOKING FOR</h3>
                        </div>
                    </div>
                </div>


                <button className="btn btn-danger">Feedback</button>

            </div>


            <div className="section2 dark-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 align-self-center">
                            <p className="white-color mt-4">SELECT VEHICLE TYPE</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/suv.svg" alt="suv" />
                                        <p className="text-center dark-color">SUV</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/pickup.svg" alt="pickup," />
                                        <p className="text-center dark-color">PICKUP</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/coupe.svg" alt="coupe" />
                                        <p className="text-center dark-color">COUPE</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/suv.svg" alt="convertible" />
                                        <p className="text-center dark-color">CONVERTIBLE</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/sedan.svg" alt="sedan" />
                                        <p className="text-center dark-color">SEDAN</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="car-option">
                                        <img src="/assets/icons/mini.svg" alt="mini" />
                                        <p className="text-center dark-color">MINICAR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 text-right">
                            <button className="btn btn-link message teal-button"><img src="/assets/icons/message.svg" /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home