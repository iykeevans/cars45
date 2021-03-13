import React from 'react';
import '../../asset/scss/home.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';


const Home = (props) => {
    React.useEffect(() => {
        document.getElementById('open-modal').click()
    })

    const [value, setValue] = React.useState({ min: 0, max: 0 })
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
    const responsivefeatures = {
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
            items: 4
        }
    }
    const response = {
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
    }
    return (
        <div>
            {/* dynamic modal buttons */}
            <button data-target="#popup-modal" className="d-none" id="open-modal" data-toggle="modal">open modal</button>
            <div className="jumbotron">

                <OwlCarousel
                    className='owl-theme'
                    margin={10}
                    responsive={responsive}
                    autoplay
                    loop
                    autoplayTimeout={5000}
                >
                    <div className='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>

                        <img src="/assets/images/banner.svg" alt="banner" />
                    </div>
                    <div className='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner.svg" alt="banner" />

                    </div>
                    <div className='item'>
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>Selling, buying and swapping cars has never been this easy</h1>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/banner.svg" alt="banner" />

                    </div>
                    <div className='item'>
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


                <button className="btn btn-danger" onClick={() => props.history.push('/feedback')}>Feedback</button>

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


                    <form className="mt-5">
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <select name="make" className="form-control">
                                    <option selected>Any Make</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <select name="model" className="form-control">
                                    <option selected>Any Model</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <select name="status" className="form-control last">
                                    <option selected>Vehicle Status</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <div className="row">

                                    <label htmlFor="formControlRange" className="col-sm-4 pl-0 pr-0 col-form-label">PRICE RANGE</label>
                                    <div className="col-sm-8">
                                        {/* <input type="range" class="form-control-range" id="formControlRange" /> */}

                                        <InputRange
                                            maxValue={1000}
                                            minValue={0}
                                            value={value}
                                            onChange={value => setValue({ ...value })} />
                                    </div>


                                </div>
                            </div>
                            <div className="form-group col-md-3">
                                <select name="make" className="form-control">
                                    <option selected>Min Year</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <select name="model" className="form-control">
                                    <option selected>Max Year</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <div className="row ">

                                    <p className="col-sm-7 text-right advance">ADVANCE SEARCH</p>
                                    <div className="col-sm-5">
                                        {/* <input type="range" class="form-control-range" id="formControlRange" /> */}
                                        <button type="submit" className="btn btn-primary">SEARCH THE VEHICLE <img src="/assets/icons/caret-right.svg" alt="go" /></button>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <div className="section3 grey-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 text-center">
                            <h2 className="section3-title">FEATURED CARS</h2>
                        </div>

                        <div className="col-md-12 ">
                            <OwlCarousel
                                className='owl-theme'
                                margin={60}
                                responsive={responsivefeatures}
                                nav={true}
                                dots={false}
                                autoplay
                                // loop
                                autoplayTimeout={5000}
                                navText={['<img src="/assets/icons/caretLeft.svg" />', '<img src="/assets/icons/caretRight.svg" />']}
                            >
                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-img">
                                                <img src="/assets/images/featureone.svg" alt="featured" />
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-9">
                                                    <div className="price">
                                                        <h4>N 500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <img className="badge" src="/assets/icons/badge-a.svg" alt="A" />

                                                </div>
                                            </div>

                                            <div className="row pulse">
                                                <div className="col-md-9 car-name">
                                                    <h5>2014 FORD EDGE</h5>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div className="recent-indicator">
                                                        <p>NEW</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <img src="/assets/images/pulse.svg" alt="..." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 speedometer">
                                                    <img src="/assets/icons/speedometer.svg" alt="speedometer" />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="speed">50,000 KM</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 others">
                                                    <p>Used<strong>.</strong>2014<strong>.</strong>Automatic<strong>.</strong>NG-45874</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-img">
                                                <img src="/assets/images/featureone.svg" alt="featured" />
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-9">
                                                    <div className="price">
                                                        <h4>N 500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <img className="badge" src="/assets/icons/badge-a.svg" alt="A" />

                                                </div>
                                            </div>

                                            <div className="row pulse">
                                                <div className="col-md-9 car-name">
                                                    <h5>2014 FORD EDGE</h5>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div className="recent-indicator">
                                                        <p>NEW</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <img src="/assets/images/pulse.svg" alt="..." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 speedometer">
                                                    <img src="/assets/icons/speedometer.svg" alt="speedometer" />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="speed">50,000 KM</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 others">
                                                    <p>Used<strong>.</strong>2014<strong>.</strong>Automatic<strong>.</strong>NG-45874</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-img">
                                                <img src="/assets/images/featureone.svg" alt="featured" />
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-9">
                                                    <div className="price">
                                                        <h4>N 500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <img className="badge" src="/assets/icons/badge-a.svg" alt="A" />

                                                </div>
                                            </div>

                                            <div className="row pulse">
                                                <div className="col-md-9 car-name">
                                                    <h5>2014 FORD EDGE</h5>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div className="recent-indicator">
                                                        <p>NEW</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <img src="/assets/images/pulse.svg" alt="..." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 speedometer">
                                                    <img src="/assets/icons/speedometer.svg" alt="speedometer" />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="speed">50,000 KM</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 others">
                                                    <p>Used<strong>.</strong>2014<strong>.</strong>Automatic<strong>.</strong>NG-45874</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-img">
                                                <img src="/assets/images/featureone.svg" alt="featured" />
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-9">
                                                    <div className="price">
                                                        <h4>N 500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <img className="badge" src="/assets/icons/badge-a.svg" alt="A" />

                                                </div>
                                            </div>

                                            <div className="row pulse">
                                                <div className="col-md-9 car-name">
                                                    <h5>2014 FORD EDGE</h5>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div className="recent-indicator">
                                                        <p>NEW</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <img src="/assets/images/pulse.svg" alt="..." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 speedometer">
                                                    <img src="/assets/icons/speedometer.svg" alt="speedometer" />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="speed">50,000 KM</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 others">
                                                    <p>Used<strong>.</strong>2014<strong>.</strong>Automatic<strong>.</strong>NG-45874</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="featured-img">
                                                <img src="/assets/images/featureone.svg" alt="featured" />
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-9">
                                                    <div className="price">
                                                        <h4>N 500,000</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <img className="badge" src="/assets/icons/badge-a.svg" alt="A" />

                                                </div>
                                            </div>

                                            <div className="row pulse">
                                                <div className="col-md-9 car-name">
                                                    <h5>2014 FORD EDGE</h5>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div className="recent-indicator">
                                                        <p>NEW</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <img src="/assets/images/pulse.svg" alt="..." />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 speedometer">
                                                    <img src="/assets/icons/speedometer.svg" alt="speedometer" />
                                                </div>
                                                <div className="col-md-10">
                                                    <p className="speed">50,000 KM</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 others">
                                                    <p>Used<strong>.</strong>2014<strong>.</strong>Automatic<strong>.</strong>NG-45874</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section4">
                <div className="container">
                    <div className="row" style={{ height: '350px' }}>
                        <div className="col-md-3 align-self-center">
                            <h3>Want to know what your car worth?</h3>
                        </div>
                        <div className="col-md-8 align-self-center">
                            <h1>Get a <strong>FREE*</strong> Valuation Now</h1>
                            <div className="text-center mt-4">
                                <button className="btn btn-secondary">Get it</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel
                                className='owl-theme'
                                margin={60}
                                responsive={response}
                                nav={true}
                                dots={false}
                                autoplay
                                // loop
                                autoplayTimeout={5000}
                                navText={['<img src="/assets/icons/caretLeft.svg" />', '<img src="/assets/icons/caretRight.svg" />']}
                            >
                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="img-cont">
                                                <div className="img">
                                                    <img src="/assets/images/user.svg" alt="user" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-9 user-details text-center">
                                            <p className="name">Adebayo Oyewole</p>
                                            <img src="/assets/images/quote.svg" alt="..." />
                                            <p className="detail">Excellent Customer service. I had a great experience selling my car on Cars45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='item'>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="img-cont">
                                                <div className="img">
                                                    <img src="/assets/images/user.svg" alt="user" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-9 user-details text-center">
                                            <p className="name">Adebayo Oyewole</p>
                                            <img src="/assets/images/quote.svg" alt="..." />
                                            <p className="detail">Excellent Customer service. I had a great experience selling my car on Cars45</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section6">
                <div className="container">
                    <div className="col-md-12">
                        <div className="faq">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row faq1 justify-content-center">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-2 align-self-center">
                                                    <div>
                                                        <img src="/assets/icons/searching.svg" alt="search" />
                                                    </div>

                                                </div>
                                                <div className="col-md-10 align-self-center mt-3">
                                                    <p>ARE YOU LOOKING FOR A CAR?</p>
                                                    <p className="small">Search our inventory with thousands of cars and more cars are adding on a daily basis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row faq2 justify-content-center">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-2 align-self-center">
                                                    <div>
                                                        <img src="/assets/icons/naira.svg" alt="search" />
                                                    </div>

                                                </div>
                                                <div className="col-md-10 align-self-center mt-3">
                                                    <p>ARE YOU LOOKING FOR A CAR?</p>
                                                    <p className="small">Search our inventory with thousands of cars and more cars are adding on a daily basis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row faq3 justify-content-center">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-2 align-self-center">
                                                    <div>
                                                        <img src="/assets/icons/cycle.svg" alt="search" />
                                                    </div>

                                                </div>
                                                <div className="col-md-10 align-self-center mt-3">
                                                    <p>ARE YOU LOOKING FOR A CAR?</p>
                                                    <p className="small">Search our inventory with thousands of cars and more cars are adding on a daily basis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="questions">QUESTIONS? CALL US :  <strong>+234 818 984 0160</strong></p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Modal */}
            <div>
                <div className="modal fade" id="popup-modal" tabIndex={-1} aria-labelledby="popup" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="popup"><img src="/assets/icons/Cars45logo.svg" alt="logo" /></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div> */}
                            <div className="modal-body">
                                <div className="row mt-2">
                                    <div className="col-md-10 text-center">
                                        <img className="logo" src="/assets/icons/Cars45logo.svg" alt="logo" />
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <button className="btn btn-link">
                                            <img className="close" data-dismiss="modal" src="/assets/icons/close.svg" alt="close" />
                                        </button>
                                    </div>
                                </div>

                                <div className="row pb-5 pl-5 pr-5">
                                    <div className="col-md-12 text-center">
                                        <div className="question">
                                            <p>Can we ask you a few questions to make car45.com better</p>
                                        </div>

                                        <h3>It'll take 3 minutes</h3>
                                        <div>
                                            <button className="btn btn-success">YES, I'LL ANSWER NOW</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-success">Sure, But When I'm Done</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-secondary">NO THANKS</button>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home