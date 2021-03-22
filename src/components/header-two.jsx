import React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";


const HeaderTwo = (props) => {
    const router = useRouter();
    const path = router.pathname

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
                                    <Link href="/brandnew"><a className={path === "/brandnew" || path === "/brandnew/[brand]" || path === "/brandnew/[brand]/details" ? "nav-active nav-link" : "nav-link"} >Brand New Cars </a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className={path === "/buy" || path === "/sell" || path === "/swap" ? "nav-link dropdown-toggle btn btn-outline-secondary current used" : "nav-link dropdown-toggle btn btn-outline-secondary used"} id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Used Cars</button>
                                    <div className="dropdown-menu used-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link href="/buy"><a className={path === "/buy" ? "dropdown-item active" : "dropdown-item"}>Buy</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/sell"><a className={path === "/sell" ? "dropdown-item active" : "dropdown-item"} >Sell</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/swap"><a className={path === "/swap" ? "dropdown-item active" : "dropdown-item"} >Swap</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle btn btn-outline-secondary inspection" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inspection Services</button>
                                    <div className="dropdown-menu inspect" aria-labelledby="navbarDropdownMenuLink">
                                        <Link href="/ride-hailing"><a className="dropdown-item">Ride Hailing</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/private-individual"><a className="dropdown-item">Private/Individual</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/premium-inspection"><a className="dropdown-item">Premium Inspection</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/valuation"><a className="dropdown-item">Valuation</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/due-dilligence"><a className="dropdown-item">Due Dilligence</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/all-in-one"><a className="dropdown-item">All-in-one</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link href="/loan"><a className={path === "/loan" ? "nav-active nav-link" : "nav-link"}>Car Loan</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/service"><a className={path === "/service" ? "nav-active nav-link" : "nav-link"}>Service & Repair</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/franchise"><a className={path === "/franchise" ? "nav-active nav-link" : "nav-link"}>Become a Franshise</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/corporate"><a className={path === "/corporate" ? "nav-active nav-link" : "nav-link"}>Corporate Service</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/import"><a className={path === "/import" ? "nav-active nav-link" : "nav-link"}>Import Cars</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/referral"><a className={path === "/referral" ? "nav-active nav-link" : "nav-link"}>Referral Program</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle btn btn-outline-secondary" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Services</button>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" href="/about"><a className={path === '/about' ? "dropdown-item active" : "dropdown-item"}>About Us </a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/check"><a className={path === '/check' ? "dropdown-item active" : "dropdown-item"}>Background Check </a></Link>
                                        <div className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/dealer"><a className={path === '/dealer' ? "dropdown-item active" : "dropdown-item"}>Become A Dealer </a></Link>
                                        {/* <div className="dropdown-divider" />
                                    <Link className="dropdown-item" href="/iaas"><a className="dropdown-item">Inspection As A Service </a></Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item" href="/preorder"><a className="dropdown-item">Preorder a Car </a></Link> */}
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