import React from 'react';
import Link from "next/link";
import HomeLayout from "../../../../components/layouts/home-layout"

const Brandnewdetails = () => {
    return (
        <HomeLayout>


            <div className="border-top">
                <div className="brandnewdetails">
                    <div className="row bread border-bottom">
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><img src="/assets/icons/home.png" alt="home" /></a></li>
                                    <li className="breadcrumb-item"><a href="#">Toyota</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Highlander</li>
                                    <li className="breadcrumb-item active" aria-current="page">2015 Toyota Highlander</li>
                                </ol>
                            </nav>
                        </div>

                        <div className="col-md-6">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Filters</label>
                                    <div className="col-sm-3">
                                        <select className="form-control">
                                            <option value="">Toyota</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="form-control">
                                            <option value="">Highlander</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-2">
                                        <select className="form-control">
                                            <option value="">Year</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-secondary teal-button">GO <img src="/assets/icons/arrow-right-white.svg" alt="go" /></button>
                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>

                    <div className="car-details">
                        <div className="container">
                            <div className="main-picture">
                                <div className="price-quote">
                                    <p className="p-start">Discounted retail price</p>
                                    <div className="d-flex border-bottom pb-2">
                                        <h4 className="discount-price">₦ 15,000,000</h4>
                                        <p className="partnership mt-1">Monthly pricing</p>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div>
                                            <p className="p-start">Per month maintenance</p>
                                            <h4>₦ 50,900</h4>
                                        </div>
                                        <div className="border-right ml-3 mr-3" />
                                        <div>
                                            <p className="partnership">Partnership</p>

                                            <img src="/assets/icons/partner.png" alt="partner" />

                                        </div>
                                    </div>
                                    <button className="btn btn-secondary teal-button btn-block">Get Custom Price Quote</button>
                                </div>
                            </div>

                            <div className="main-details">
                                <div className="car-title">
                                    <h1>2020 Toyota Highlander</h1>
                                    <p><span>Style: </span>LE 4dr Front-wheel Drive <img src="/assets/icons/arrow-down.png" alt="arrow-down" /> </p>
                                </div>

                                <div className="tab-titles">
                                    <div>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="rewards-tab" data-toggle="tab" href="#rewards" role="tab" aria-controls="rewards" aria-selected="false">Rewards</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="spec-tab" data-toggle="tab" href="#spec" role="tab" aria-controls="spec" aria-selected="false">Specs</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="features-tab" data-toggle="tab" href="#features" role="tab" aria-controls="features" aria-selected="false">Features</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">Photos</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="colours-tab" data-toggle="tab" href="#colours" role="tab" aria-controls="colours" aria-selected="false">Colours</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="border-bottom overview">
                                                    <h2>WHAT'S NEW</h2>
                                                    <p>Fresh off a redesign last year, the 2021 Toyota Highlander sticks close to a winning formula. The major addition this year is the XSE trim, which brings an inverted grille and a sport-tuned suspension. Improved headlights and more safety features are also standard.</p>

                                                    <p>Otherwise, Toyota’s popular midsize crossover SUV carries over with minimal changes. The Highlander’s competition has grown sharper in recent years – in addition to the perennially popular Honda Pilot, rivals from Kia and Hyundai are waiting in the wings.</p>

                                                </div>

                                                <div className="border-bottom overview">
                                                    <h2>CHOOSING YOUR TOYOTA HIGHLANDER</h2>
                                                    <p>The Highlander comes in six trims: L, LE, XLE, XSE, Limited, and Platinum. Pricing starts at $35,985 including destination for the base L model and extends to $48,140 for the Platinum</p>

                                                </div>

                                                <div className="border-bottom overview">
                                                    <h2>ENGINE CHOICES</h2>
                                                    <p>The Highlander is limited to a single engine: a 3.5-liter V6 making 295 horsepower and 263 pound-feet of torque. Power runs through an eight-speed automatic transmission to two or four wheels. Properly equipped, the Highlander can tow up to 5,000 pounds.</p>

                                                    <p>All-wheel drive is a $1,600 option throughout the lineup, but not every trim gets the same version. The lower three trims use a simpler system that shuttles power to the rear wheels when necessary. The top three trims have a more sophisticated all-wheel drive, which can distribute torque from side to side for maximum traction.</p>

                                                    <p>The EPA fuel economy estimated check in at 21 miles per gallon city, 29 mpg highway, and 24 combined with front-wheel drive, or 20/27/23 mpg (city/highway/combined) with AWD.</p>

                                                    <img src="/assets/images/interior1.svg" alt="interior" />

                                                </div>


                                                <div className="border-bottom overview">
                                                    <h2>PASSENGER AND CARGO CAPACITY</h2>
                                                    <p>Seating capacity for the Highlander starts at eight, although upper trims swap in captain’s chairs in the second row. That row slides back and forth based on who’s sitting where, which is lucky given that the third row starts with only 27.7 inches of leg room.</p>

                                                    <p>Cargo capacity starts at 16 cubic feet and expands up to 84.3 with everything folded. Those aren’t bad numbers, although rivals like the Ford Explorer and Hyundai Palisade offer slightly more..</p>

                                                    <img src="/assets/images/interior1.svg" alt="interior" />

                                                </div>


                                                <div className="border-bottom overview">
                                                    <h2>SAFETY FEATURES</h2>
                                                    <p>It’s no accident that the Highlander is a hit with families. Every model gets automatic emergency braking, adaptive cruise control, and lane keeping assist. All trims except the base L get blind-spot monitoring, and the options list includes parking sensors and a surround-view camera.</p>

                                                    <p>The IIHS was impressed enough with last year’s Highlander to give it a Top Safety Pick award, which should carry over when this year's model is tested.</p>

                                                </div>

                                                <div className="border-bottom overview">
                                                    <h2>CONNECTIVITY</h2>
                                                    <p>Most Highlanders use an 8-inch infotainment touchscreen, which gets a full complement of USB ports and is compatible with Apple CarPlay and Android Auto. Navigation is included from the Limited trim upward, and Platinum models get a 12.3-inch screen with JBL audio.</p>

                                                </div>

                                            </div>


                                            <div className="tab-pane fade" id="rewards" role="tabpanel" aria-labelledby="rewards-tab">
                                                <div className="rewards">
                                                    <p className="from">From partners</p>
                                                    <p className="others">Partners Advertised promotions</p>
                                                </div>

                                                <div className="rewards">
                                                    <p className="from">From partners</p>
                                                    <p className="others">Comprehensive Insurance </p>
                                                    <p className="others">Gallon of Oil, etc.</p>
                                                </div>

                                            </div>


                                            <div className="tab-pane fade" id="spec" role="tabpanel" aria-labelledby="spec-tab">
                                                <div className="spec">
                                                    <div className="spec-overview">
                                                        <h2>2021 TOYOTA HIGHLANDER SPECS & SAFETY</h2>

                                                        <p>The table below shows all 2021 Toyota Highlander specs by style, including MPG (fuel economy), transmission details, and interior and exterior dimensions. Additionally, find 2021 Toyota Highlander warranty and reliability information, such as limits on bumper-to-bumper coverage and major components.</p>

                                                        <p className="small">Compare all 2021 Toyota Highlander models side-by-side</p>
                                                    </div>


                                                    <div className="row mb-5">
                                                        <div className="col-md-10">
                                                            <div className="row border-bottom">
                                                                <div className="col-md-4 summary align-self-end pb-3">
                                                                    <h4>Overview</h4>
                                                                </div>
                                                                <div className="col-md-1 border-right pb-3" />
                                                                <div className="col-md-7 styles pb-3">
                                                                    <p className="select">Select Style</p>
                                                                    <p className="styles">L 4dr Front-wheel Drive - MSRP $36,085 <img src="/assets/icons/teal-caret-down.svg" alt="select" /></p>

                                                                    <div className="buttons">
                                                                        <button className="btn btn-secondary teal-button mr-3">Price It Now</button>

                                                                        <button className="btn btn-secondary teal-button">Get Monthly Payment</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row style-details">
                                                                <div className="col-md-4 pt-3">
                                                                    <p>Engine</p>
                                                                    <p>Transmission</p>
                                                                    <p>Fuel Economy City</p>
                                                                    <p>Fuel Economy Hwy</p>
                                                                    <p>Bumper to Bumper Months/Miles</p>
                                                                </div>
                                                                <div className="col-md-1 border-right pt-3" />
                                                                <div className="col-md-7 pt-3">
                                                                    <p>3.5L V-6 295 HP 263.0 ft.lbs. @ 4,700 rpm</p>
                                                                    <p>8-spd sequential shift control auto w/OD</p>
                                                                    <p>21.0 mpg</p>
                                                                    <p>29.0 mpg</p>
                                                                    <p>36/36,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row mt-5 mb-5">
                                                        <div className="col-md-10">
                                                            <div className="row border-bottom">
                                                                <div className="col-md-4 summary align-self-end pb-3">
                                                                    <h4>STEERING AND SUSPENSION</h4>
                                                                </div>
                                                                <div className="col-md-1 border-right pb-3" />
                                                                <div className="col-md-7 styles pb-3">
                                                                    <p className="select">Select Style</p>
                                                                    <p className="styles">L 4dr Front-wheel Drive - MSRP $36,085 <img src="/assets/icons/teal-caret-down.svg" alt="select" /></p>

                                                                    <div className="buttons">
                                                                        <button className="btn btn-secondary teal-button mr-3">Price It Now</button>

                                                                        <button className="btn btn-secondary teal-button">Get Monthly Payment</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row style-details">
                                                                <div className="col-md-4 pt-3">
                                                                    <p>Electronic Stability</p>
                                                                    <p>Front Suspension</p>
                                                                    <p>Front Anti-Roll Bar</p>
                                                                    <p>Front Springs</p>
                                                                    <p>Front Shocks</p>
                                                                    <p>Rear Suspension</p>
                                                                    <p>Rear Anti-Roll Bar</p>
                                                                    <p>Rear Springs</p>
                                                                    <p>Rear Shocks</p>
                                                                    <p>Steering</p>
                                                                    <p>Brakes</p>
                                                                    <p>Vented Disc Brakes</p>
                                                                    <p>Wheels</p>
                                                                    <p>Wheels</p>
                                                                    <p>Spare Tire and Wheel	</p>
                                                                </div>
                                                                <div className="col-md-1 border-right pt-3" />
                                                                <div className="col-md-7 pt-3">
                                                                    <p>electronic stability</p>
                                                                    <p>strut</p>
                                                                    <p>front anti-roll bar</p>
                                                                    <p>coil</p>
                                                                    <p>gas-pressurized</p>
                                                                    <p>independent multi-link</p>
                                                                    <p>rear anti-roll bar</p>
                                                                    <p>coil</p>
                                                                    <p>gas-pressurized</p>
                                                                    <p>rack & pinion</p>
                                                                    <p>4-wheel disc</p>
                                                                    <p>front</p>
                                                                    <p>18.0 " painted aluminum</p>
                                                                    <p>P235/65VR18.0BSW AS</p>
                                                                    <p>compact steel </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="colours" role="tabpanel" aria-labelledby="colours-tab">
                                                <div className="color">
                                                    <h2 className="mt-4 mb-5">2021 TOYOTA HIGHLANDER COLOURS</h2>
                                                    <img src="/assets/images/highlander-color.svg" alt="..." />


                                                    <div className="row mt-5">
                                                        <div className="col-md-8">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="exterior">
                                                                        <div className="row border">
                                                                            <div className="col-md-8 top">
                                                                                <h5>EXTERIOR</h5>

                                                                            </div>


                                                                            <div className="col-md-4 top">
                                                                                <h5>COLORS</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">

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
                    </div>

                </div>
            </div>
        </HomeLayout>
    )
}

export default Brandnewdetails
