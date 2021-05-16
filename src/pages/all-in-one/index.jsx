import React, { useState } from "react";
import Chat from "../../components/chat";
import Feedbackbutton from "../../components/feedback-button";
import HomeLayout from "../../components/layouts/home-layout";
import BookingForm from "../../components/booking";

const mockedData = {
  inspection: {
    title1: "Determine the current market value of the vehicle",
    title2: "Get your car inspected",
    items: [
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/book.svg",
        alt: "book",
        text: "Book an inspection right here or walk into any of our centers",
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/money.svg",
        alt: "money",
        text: "Make a deposit of ₦10,000 at your inspection center of choice.",
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/inspect-done.svg",
        alt: "inspect info",
        text: "The inspection is carried within an hour.",
      },
      {
        image: "https://storage.googleapis.com/cars45-web-bucket/inspection-report.svg",
        alt: "inspection-report",
        text: "Receive your inspection result within 30 minutes later!",
      },
    ],
  },
  button: {
    text: "Book An Inspection",
  },
};

const AllInOne = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <HomeLayout>
      <div className="ride-hailing">
        <div className="jumbotron">
          <Feedbackbutton {...props} />
        </div>

        <div className="get-inspected">
          <div className="container">
            <Chat />

            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-4 inspect-img d-none d-lg-block">
                <img
                  src="https://storage.googleapis.com/cars45-web-bucket/inspection.png"
                  alt="inspect"
                  alt="inspect"
                />
                <p>{mockedData.inspection.title1}</p>
              </div>

              <div className="col-lg-8">
                <h2 className="inspect-header text-center">
                  {mockedData.inspection.title2}
                </h2>

                {mockedData.inspection.items.map((item, index) => (
                  <div className="row ml-4 mb-4" key={index}>
                    <div className="col-md-2 inspect-info-img">
                      <img className="book" src={item.image} alt="book" />
                    </div>
                    <div className="col-md-6 details align-self-center">
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

                <button className="btn btn-secondary orange-button mt-5 mb-5" data-toggle="modal"
                  data-target="#popup-modal">
                  {mockedData.button.text}
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="col-md-12">
            <div className="bottom-div">
              <img src="https://storage.googleapis.com/cars45-web-bucket/security.svg" alt="security" />
              <p>Cars45 is commited to keeping your information safe</p>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div>
          <div
            className="modal fade"
            id="popup-modal"
            tabIndex={-1}
            aria-labelledby="popup"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                {/* <div className="modal-header">
                                <h5 className="modal-title" id="popup"><img src="https://storage.googleapis.com/cars45-web-bucket/Cars45logo.svg" alt="logo" /></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div> */}
                <div className="modal-body">
                  <div className="row mt-2">
                    <div className="col-9 col-md-10 text-center">
                      <img
                        className="logo"
                        src="https://storage.googleapis.com/cars45-web-bucket/Cars45logo.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="col-2 col-md-2 text-right">
                      <button className="btn btn-link">
                        <img
                          className="close"
                          data-dismiss="modal"
                          src="https://storage.googleapis.com/cars45-web-bucket/close.svg"
                          alt="close"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="row pb-5 pl-2 pl-md-5 pr-2 pr-md-5">
                    <div className="col-md-12 text-center">
                      <div className="question">
                        <p>Schedule Your Car Inspection</p>
                      </div>
                    </div>

                    <BookingForm setLoading={setLoading} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </HomeLayout>
  );
};

export default AllInOne;
