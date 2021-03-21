import React from 'react';
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(()=>import("react-owl-carousel"), {ssr:false})

import GridDropdown from 'react-grid-dropdown'
import Dropdown from '../../components/dropdown'
import Carlist from '../../components/car-list';
import InputRange from 'react-input-range';
import HomeLayout from "../../components/layouts/home-layout"

const Buy = (props) => {
    React.useEffect(() => {

    })

    const [value, setValue] = React.useState({ min: 0, max: 0 })
    // const [activeItem, setActiveItem] = React.useState()
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
        <HomeLayout footer="two" header="two">
        <div>
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
                    <div className="col-md-8 offset-md-2">
                        <div className="banner-bottom-container mr-4 ml-5">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search brands, model, year and much more" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-link" type="button" id="button-addon2"><img src="/assets/icons/search.svg" alt="search" /> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="teal-color find">Find Cars By:</p>
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
                    <div className="row">
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

                    <div className="row mt-5 mb-5">
                        <div className="col-md-4 offset-md-4 text-center">
                            <button className="btn btn-primary dark-color orange-background">See All</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="budget">
                <h1 className="text-center">What's Your Budget</h1>
                <div className="container">
                    <div className="budget-container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>Under ₦500k</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>500k - ₦1m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>₦1m - ₦2m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>₦2m - ₦5m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>Above ₦5m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10 offset-md-1 text-center info">
                            <h4>If you tell us your budget, we can help you find the right car</h4>
                            <p>Move the slider to set a budget range then click “Find My Car” to see great offers within you budget.You can also manually enter an amount.</p>
                        </div>


                        <div className="col-md-6 offset-md-3 mt-5">
                            <InputRange
                                maxValue={10000000}
                                minValue={0}
                                value={value}
                                step={50000}
                                onChange={value => setValue({ ...value })} />
                        </div>


                        <div className="col-md-6 offset-md-3 mt-4">
                            <form className="form-inline">
                                <div className="form-group mr-3 mb-2">
                                    <input type="text" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 teal-background">FIND MY CAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





        </div >
        </HomeLayout> 
    )
}

export default Buy