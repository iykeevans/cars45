import React from 'react';
import '../../asset/scss/buy.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-input-range/lib/css/index.css';
import GridDropdown from 'react-grid-dropdown'
import 'react-grid-dropdown/dist/style.css'
import Dropdown from '../dropdown'


const Buy = (props) => {
    React.useEffect(() => {

    })

    const [value, setValue] = React.useState({ min: 0, max: 0 })
    const [activeItem, setActiveItem] = React.useState()
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
                                <div className="col-md-12">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search brands, model, year and much more" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-link" type="button" id="button-addon2"><img src="/assets/icons/search.svg" alt="search" /> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="teal-color find">Find Cars By:</p>
                                </div>
                                <div className="col-md-3">
                                    <Dropdown />
                                    {/* <GridDropdown
                                        label="Model"
                                        activeItem={activeItem}
                                        items={
                                            [{ section: 'Toyota', label: 'Venza', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camrytrhwhwhehhwhqh', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Camry', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Toyota', label: 'Corrola', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Honda', label: 'Accord', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '740i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '320i', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'BMW', label: '540M', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'C350', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E300', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'E500', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Benz', label: 'Maybach', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Rolls Royce', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }, { section: 'Bently', label: 'itemLabel', id: 'itemId', onClick: () => setActiveItem('itemId') }]
                                        }
                                    /> */}
                                </div>
                                <div className="col-md-3">
                                    <Dropdown />

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




        </div>
    )
}

export default Buy