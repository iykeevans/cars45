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
                        <div className="col-12 col-md-4 col-lg-3">
                            <img className="logo" src="https://storage.googleapis.com/cars45-web-bucket/logo-white.svg" alt="logo" />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <ul>
                                <li>
                                    <Link href="/about"><a>About Us</a></Link>
                                </li>
                                <li>
                                    <Link href="/corporate"><a>Contact Us</a></Link>
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

                        <div className="col-6 col-md-4 col-lg-3">
                            <ul>
                                <li>
                                    <Link href="/premium-inspection"><a>Inspection Centers</a></Link>
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
                                    <Link href="/check"><a>Background Check</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-3 align-self-center">
                            <div className="socials">
                                <a href="http://facebook.com/cars45.NG" target="_blank"><img className="facebook" src="https://storage.googleapis.com/cars45-web-bucket/facebook.svg" alt="facebook" /></a>
                                <a href="https://www.instagram.com/cars45ng/" target="_blank"><img src="https://storage.googleapis.com/cars45-web-bucket/instagram.svg" alt="instagram" /></a>
                                <a href="https://twitter.com/cars45ng" target="_blank"><img src="https://storage.googleapis.com/cars45-web-bucket/twitter.svg" alt="twitter" /></a>
                                <a href="/youtube.com" target="_blank"> <img src="https://storage.googleapis.com/cars45-web-bucket/youtube.svg" alt="youtube" /></a>
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
                        <div className="col-md-6 text-center text-md-right">
                            <p>2021Cars45.com. &copy;All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home