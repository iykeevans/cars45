import React from 'react'
import Chat from "../../components/chat";
import Feedbackbutton from '../../components/feedback-button';
import HomeLayout from "../../components/layouts/home-layout"

const PrivateIndividual = (props) => {
    return (
        <HomeLayout >
            <div className="ride-hailing">
                <div className="jumbotron">
                    <Feedbackbutton {...props} />
                </div>

                <div className="get-inspected">
                    <div className="container">
                        <Chat />

                        <div className="row">
                            {/* <div className="col-md-12"> */}
                            <div className="col-md-4 inspect-img">
                                <img src="/assets/images/inspection.png" alt="inspect" alt="inspect" />
                                <p>Full inspection to ascertain your car condition</p>
                            </div>
                            <div className="col-md-8">
                                <h2 className="inspect-header text-center">Get your car inspected</h2>
                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img className="book" src="/assets/icons/book.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Book an inspection right here or walk into any of our centers</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 align-self-center inspect-info-img">
                                        <img src="/assets/icons/money.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Make a deposit of ₦5,000 at your inspection center of choice.</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img src="/assets/icons/inspect-done.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>The inspection is carried within an hour.</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img className="report" src="/assets/icons/inspection-report.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Receive your inspection result within 30 minutes later!</p>
                                    </div>
                                </div>

                                <button className="btn btn-secondary orange-button mt-5 mb-5">Book An Inspection</button>
                            </div>
                            {/* </div> */}

                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="bottom-div">
                            <img src="/assets/icons/security.svg" alt="security" />
                            <p>Cars45 is commited to keeping your information safe</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default PrivateIndividual;
