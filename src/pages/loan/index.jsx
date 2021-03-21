import React from 'react';
import Chat from '../../components/chat';
import Socials from '../../components/socials';
import HomeLayout from "../../components/layouts/home-layout"

const Loan = (props) => {
    return (
        <HomeLayout footer="two">
        <div className="loan">
            <div className="jumbotron">
                <div className="banner-container">
                    <h1>No collateral / No application fee</h1>
                </div>
                <Socials />
            </div>

            <div className="overview">
                <Chat />
                <div className="container">
                    <div className="overview-container">
                        <div className="row section1">
                            <div className="col-md-12">
                                <h1>Overview</h1>
                                <p>Consumer financing is the ability of financial institutions (banks) to provide funds to customers interested in purchasing cars. For this to happen, customers must meet certain criteria laid down by the financial institutions which qualifies the customer to gain access to the funds.</p>
                            </div>
                        </div>
                        <div className="row section2">
                            <div className="col-md-12">
                                <h1>Criteria for qualifying customers for financing</h1>
                                <p>For customers to qualify for financing, certain criteria must be met. Some of these criteria are but not limited to:</p>
                            </div>
                        </div>
                        <div className="row section3">
                            <div className="col-md-6 steps-bg">

                            </div>
                            <div className="col-md-6 steps">
                                <ol>
                                    <li><strong>Inflow:</strong> Monthly salary for employees, and revenue for business owners over a period (Minimum of 6 months, or 1 year)</li>

                                    <li><strong>Revenue source:</strong> Either employees earning a monthly salary or business owners generating monthly or periodic revenue.</li>
                                </ol>
                                <p>These points are factored in to determine a customer/applicant’s profile in comparison to the amount the customer seeks for financing.</p>
                            </div>
                        </div>

                        <div className="benefits">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="text-center">BENEFITS</h2>
                                </div>
                                <div className="col-md-5 mb-4 text-center">
                                    <img className="purchase" src="/assets/images/purchase.svg" alt="purchase" />
                                    <div className="benefit-container">
                                        <img className="purchase-check" src="/assets/icons/purchase-check.svg" alt="check" />
                                        <p>Purchase vehicles and pay over a period (usually 12 months)</p>
                                    </div>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-5 text-center">
                                    <img className="purchase mt-5" src="/assets/images/car.svg" alt="purchase" />
                                    <div className="benefit-container">
                                        <img className="purchase-check" src="/assets/icons/purchase-check.svg" alt="check" />
                                        <p>Walk away with your car from day 1</p>
                                    </div>
                                </div>
                                <div className="col-md-5 text-center">
                                    <img className="purchase" src="/assets/images/hand-key.svg" alt="purchase" />
                                    <div className="benefit-container">
                                        <img className="purchase-check" src="/assets/icons/purchase-check.svg" alt="check" />
                                        <p>Own your car at the end of payment</p>
                                    </div>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-5 text-center">
                                    <img className="low-interest" src="/assets/images/low-interest.svg" alt="purchase" />
                                    <div className="benefit-container">
                                        <img className="purchase-check" src="/assets/icons/purchase-check.svg" alt="check" />
                                        <p>Low interest rates on your payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5 mb-4">
                            <button className="btn btn-secondary orange-button">GET PRE-APPROVED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </HomeLayout>
    )
}

export default Loan
