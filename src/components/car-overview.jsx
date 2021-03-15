import React from 'react';
import '../asset/scss/car-overview.scss'


const Caroverview = (props) => {
    React.useEffect(() => {

    })


    return (

        <div className="car-overview">
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

    )
}

export default Caroverview;