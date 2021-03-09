import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../assets/scss/footer.scss'

const Home = (props) => {

    return (
        <div className="footer-one">
            <div className="footer-section-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="logo" src="/assets/icons/logo-white.svg" alt="logo" />
                        </div>

                        <div className="col-md-3">
                            <ul>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Our Services</Link>
                                </li>
                                <li>
                                    <Link to="/">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <ul>
                                <li>
                                    <Link to="/">Inspection Centers</Link>
                                </li>
                                <li>
                                    <Link to="/">Auction Locations</Link>
                                </li>
                                <li>
                                    <Link to="/">Required Documents</Link>
                                </li>
                                <li>
                                    <Link to="/">Common Questions</Link>
                                </li>
                                <li>
                                    <Link to="/">Background Check</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 align-self-center">
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
                                    <Link to="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-right">
                            <p>2021Cars45.com. &copy;All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home