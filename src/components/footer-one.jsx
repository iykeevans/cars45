import React from 'react';
// import { NavLink, Link } from 'react-router-dom'
// import '../asset/scss/footer.scss'
import Link from 'next/link'
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
                                    <Link href="/"><a>About Us</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Contact Us</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Our Services</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Careers</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Blog</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <ul>
                                <li>
                                    <Link href="/"><a>Inspection Centers</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Auction Locations</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Required Documents</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Common Questions</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Background Check</a></Link>
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
                                    <Link href="/"><a>Terms & Conditions</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Privacy</a></Link>
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