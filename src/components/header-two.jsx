import React from 'react';
// import { NavLink, Link } from 'react-router-dom'
import Link from 'next/link'
// import '../asset/scss/header.scss'


const HeaderTwo = (props) => {

    return (
        <div>
            <div className="header-one">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-5 search-box">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search brands, model, year and much more" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-link" type="button" id="button-addon2"><img src="/assets/icons/search.svg" alt="search" /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 hot">
                            <img src="/assets/icons/hotdeals.svg" alt="hot" />
                        </div>
                        <div className="col-md-1 profile">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/assets/icons/profile-icon.svg" alt="profile" /></button>
                                <div className="dropdown-menu">
                                    <button className="dropdown-item btn btn-link darkgrey-color" >Sign In</button>
                                    <div className="dropdown-divider" />
                                    <button className="dropdown-item btn btn-link darkgrey-color" >Register</button>
                                </div>
                            </div>

                        </div>

                    </div>


                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img className="logo" src="/assets/icons/Cars45logo.svg" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link exact className="nav-link" activeClassName="nav-active" href="/buy"><a > Buy a Car <span className="sr-only">(current)</span></a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/sell"><a >Sell a Car</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/swap"><a >Swap Cars</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/loan"><a >Car Loan</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/franchise"><a >Become a Franchise</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/corporate"><a >Corporate Service</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/import"><a >Import</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="nav-active" href="/referral"><a >Referral Program</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle btn btn-outline-secondary" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Services</button>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" href="/about"><a >About Us</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/check"><a >Background Check</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/dealer"><a >Become A Dealer</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/iaas"><a >Inspection As A Service</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/preorder"><a >Preorder a Car</a></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default HeaderTwo