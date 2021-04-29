import React from 'react';
// import { NavLink, Link } from 'react-router-dom'
import Link from 'next/link'
// import '../asset/scss/footer.scss'


const FooterTwo = (props) => {

    return (
        <div>
            <div className="footer-one border-top">

                <div className="footer-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-9 col-md-7">
                                <div className="row">
                                    <div className="col col-md-2 d-none d-md-block">
                                        <Link href="/">About Us</Link>
                                    </div>
                                    <div className=" col col-md-2">
                                        <Link href="/">Terms Of Use</Link>
                                    </div>
                                    <div className="col col-md-2">
                                        <Link href="/">Privacy Policy</Link>
                                    </div>
                                    <div className="col col-md-1">
                                        <Link href="/">FAQs</Link>
                                    </div>
                                    <div className="col col-md-2">
                                        <Link href="/">Financing</Link>
                                    </div>
                                    <div className="col col-md-3 d-none d-md-block">
                                        <Link href="/">Become A Franchise</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-1 col-md-5">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <a href="/">help@car45.com</a>
                                    </div>
                                    <div className="col-md-6 text-right d-none d-md-block">
                                        <div className="socials">
                                            <a href=" http://facebook.com/cars45.NG" target="_blank"><img className="facebook" src="/assets/icons/fb.svg" alt="facebook" /></a>
                                            <a href="https://www.instagram.com/cars45ng/" target="_blank"><img src="/assets/icons/insta.svg" alt="instagram" /></a>
                                            <a href="https://twitter.com/cars45ng" target="_blank"><img src="/assets/icons/tw.svg" alt="twitter" /></a>
                                            <a href="/youtube.com" target="_blank"> <img src="/assets/icons/yt.svg" alt="youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-section-one">
                    <div className="container">
                        <div className="row info">

                            <div className="col-md-7">
                                <p>Cars45 brand provides consumers with the opportunity to buy cars online and offline. Car dealers and end-users can now have access to a rich variety of cars that have been properly verified and checked, accompanied by a standard inspection report. What we are bringing to the market isn't just availability but access to cars with the right information such that consumers can make the right decision. Cars45 currently has its operations spread across Lekki, Ikeja, Ikorodu, Oshodi and Amuwo areas of Lagos, Ibadan, Kano, Port-Harcourt, and Abuja.</p>
                            </div>

                            <div className="col-md-5 subscribe">
                                <p>SUBSCRIBE TO GET NOTIFIED<br /> ON GREAT OFFERS ON CARS45</p>

                                <form className="form-inline">

                                    <div className="form-group mr-4 mb-2">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your email address" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2 teal-button">SUBSCRIBE</button>
                                </form>

                            </div>


                        </div>
                        <div className="row ssl">
                            <div className="col-md-6">
                                <p>SSL Protection | Buy with confidence</p>

                                <p>buy.cars45.com has been security-scanned and is 100% protected by the Secure Socket Layer certificate. All files and data sent over this site are fully encrypted from third-party access.</p>
                            </div>

                            <div className="col-md-6">
                                <div className="socials">
                                    <a href="/facebook.com"><img className="facebook" src="/assets/icons/facebook.svg" alt="facebook" /></a>
                                    <a href="/instagram.com"><img src="/assets/icons/instagram.svg" alt="instagram" /></a>
                                    <a href="/twitter.com"><img src="/assets/icons/twitter.svg" alt="twitter" /></a>
                                    <a href="/youtube.com"> <img src="/assets/icons/youtube.svg" alt="youtube" /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <p>2021Cars45.com. &copy;All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTwo