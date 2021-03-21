import React from 'react';
import Link  from "next/link";
import HomeLayout from "../../components/layouts/home-layout"

const Brandnewbrand = () => {
    return (
        <div className="brand-new-brand">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 border-bottom heading ">
                        <h5>New Toyota Modals: Make A Selection</h5>
                    </div>

                    <div className="col-md-12 filters">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Filters</label>
                                <div className="col-sm-2">
                                    <select className="form-control">
                                        <option value="">Toyota</option>
                                    </select>
                                </div>
                                <div className="col-sm-2">
                                    <select className="form-control">
                                        <option value="">All Vehicle Types</option>
                                    </select>
                                </div>
                                <div className="col-sm-2">
                                    <select className="form-control">
                                        <option value="">All Price Ranges</option>
                                    </select>
                                </div>
                            </div>

                        </form>

                    </div>
                    <div className="border-bottom" />


                </div>

                <div className="list">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">4 Runner</p>
                                        <img src="/assets/images/4runner.svg" alt="4-runner" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">86</p>
                                        <img src="/assets/images/Toyota-86.svg" alt="86" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Avalon</p>
                                        <img src="/assets/images/avalon.svg" alt="4-runner" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Camry</p>
                                        <img src="/assets/images/camry.svg" alt="Camry" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Corolla</p>
                                        <img src="/assets/images/corolla.svg" alt="Corolla" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Highlander</p>
                                        <img src="/assets/images/highlander.svg" alt="Highlander" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Land Cruiser</p>
                                        <img src="/assets/images/landcruiser.svg" alt="Land Cruiser" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Mirai</p>
                                        <img src="/assets/images/mirai.svg" alt="Mirai" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Prius</p>
                                        <img src="/assets/images/prius.svg" alt="Prius" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Rav 4</p>
                                        <img src="/assets/images/rav4.svg" alt="Rav4" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Sequoia</p>
                                        <img src="/assets/images/sequoia.svg" alt="Sequoia" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Sienna</p>
                                        <img src="/assets/images/sienna.svg" alt="sienna" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>


                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Tacoma</p>
                                        <img src="/assets/images/tacoma.svg" alt="tacoma" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Tundra</p>
                                        <img src="/assets/images/tundra.svg" alt="tundra" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-5">
                                    <div className="list-container text-center">
                                        <p className="name">Venza</p>
                                        <img src="/assets/images/venza.svg" alt="Venza" />
                                        <p className="price"><span>From</span> ₦ 15,000,000</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="related">
                    <p className="related-head">RELATED TOYOTA VEHICLES</p>
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <ul>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                                <li>
                                    <Link href="/"><a>Toyota 4runner</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout(Brandnewbrand);
