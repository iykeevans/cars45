import React from 'react';
import Link from 'next/link'
import Budget from '../../components/budget';
import Chat from "../../components/chat";
import Feedbackbutton from '../../components/feedback-button';
import HomeLayout from "../../components/layouts/home-layout"


const Brandnew = (props) => {
    const next = () => {
        let ele = document.getElementById('scroll')
        ele.scrollLeft += 230
    }
    return (
        <HomeLayout>
        <div className="brandnew">
            <div className="jumbotron">
                <h1>THE EASIEST WAY TO BUY YOUR NEXT CAR</h1>
                <Feedbackbutton {...props} />
            </div>
            <Chat {...props} />

            <div className="brands">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="h-shop">Shop by Brand</h3>
                        </div>
                    </div>
                    <div className="row brand-row">
                        <Link href={`/brandnew/toyota`} className="col">
                            <a  className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/toyota.svg" alt="toyota" />
                            </div>
                        </a>
                        </Link>
                        <Link href={`/brandnew/toyota`} className="col">
                            <a  className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/ford.svg" alt="ford" />
                            </div>
                        </a>
                        </Link>
                        <Link href={`/brandnew/toyota`} className="col">
                            <a  className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/honda.svg" alt="honda" />
                            </div>
                        </a>
                        </Link>
                        <Link href={`/brandnew/toyota`} className="col">
                            <a  className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/nissan.svg" alt="nissan" />
                            </div>
                        </a>
                        </Link>
                        <Link href={`/brandnew/toyota`} className="col">
                            <a  className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/jeep.svg" alt="jeep" />
                            </div>
                        </a>
                        </Link>
                    </div>


                    <div className="row brand-row">
                        <div className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/bmw.svg" alt="bmq" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/volks.svg" alt="volks" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/akura.svg" alt="akura" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-container">
                                <img src="/assets/icons/hyundai.svg" alt="hyundai" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="see-container">
                                <div className="see-all text-center">
                                    <h4>SEE ALL BRANDS</h4>


                                    <img src="/assets/icons/teal-arrow-down.svg" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mb-3" />
                </div>
            </div>

            <div className="type mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="h-shop">Shop by Type</h3>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="type-container" id="scroll">
                            <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/suv.svg" alt="suv" />
                                    <p>SUV</p>
                                </div>
                            </div>
                            <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/pickup.svg" alt="pickup" />
                                    <p>PICKUP</p>
                                </div>
                            </div>

                            <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/coupe.svg" alt="coupe" />
                                    <p>COUPE</p>
                                </div>
                            </div>

                            <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/sedan.svg" alt="sedan" />
                                    <p>SEDAN</p>
                                </div>
                            </div>

                            <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/mini.svg" alt="mini" />
                                    <p>MINI</p>
                                </div>
                            </div>

                            {/* <div className="type-content text-center">
                                <div className="align-self-center">
                                    <img src="/assets/icons/mini.svg" alt="mini" />
                                    <p>MINI</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <button onClick={() => next()} className="btn btn-link"><img src="/assets/icons/arrow-right.svg" alt="..." /></button>
                </div>
            </div>

            <div className="price">
                <Budget {...props} />
            </div>

        </div>
        </HomeLayout>
    )
}

export default Brandnew;
