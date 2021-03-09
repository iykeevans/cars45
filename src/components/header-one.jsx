import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../assets/scss/header.scss'

const HeaderOne = (props) => {

    return (
        <div className="header-one">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-4 phone-box">
                        <div className="top-phone">
                            <img src="/assets/icons/phone.svg" alt="phone" />
                            <p className="darkgrey-color">+234 818 984 0160</p>
                            <div className="divider"></div>
                            <p className="darkgrey-color">+234 818 984 0160</p>
                        </div>
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
                                <NavLink exact className="nav-link" activeClassName="nav-active" to="/">Buy a Car <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/sell">Sell a Car</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/swap">Swap Cars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/loan">Car Loan</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/franchise">Become a Franchise</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/corporate">Corporate Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/import">Import</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="nav-active" to="/referral">Referral Program</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn btn-outline-secondary" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Services</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink className="dropdown-item" to="/about">About Us</NavLink>
                                    <div className="dropdown-divider" />
                                    <NavLink className="dropdown-item" to="/check">Background Check</NavLink>
                                    <div className="dropdown-divider" />
                                    <NavLink className="dropdown-item" to="/dealer">Become A Dealer</NavLink>
                                    <div className="dropdown-divider" />
                                    <NavLink className="dropdown-item" to="/iaas">Inspection As A Service</NavLink>
                                    <div className="dropdown-divider" />
                                    <NavLink className="dropdown-item" to="/preorder">Preorder a Car</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderOne