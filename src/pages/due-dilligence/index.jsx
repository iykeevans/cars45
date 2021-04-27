import React from "react";
import Chat from "../../components/chat";
import Feedbackbutton from "../../components/feedback-button";
import HomeLayout from "../../components/layouts/home-layout";

const mockedData = {
  inspection: {
    title1: "Determine the current market value of the vehicle",
    title2: "Get your car inspected",
    items: [
      {
        image: "/assets/icons/book.svg",
        alt: "book",
        text: "Book an inspection right here or walk into any of our centers",
      },
      {
        image: "/assets/icons/money.svg",
        alt: "money",
        text: "Make a deposit of ₦10,000 at your inspection center of choice.",
      },
      {
        image: "/assets/icons/inspect-done.svg",
        alt: "inspect info",
        text: "The inspection is carried within an hour.",
      },
      {
        image: "/assets/icons/inspection-report.svg",
        alt: "inspection-report",
        text: "Receive your inspection result within 30 minutes later!",
      },
    ],
  },
  button: {
    text: "Book An Inspection",
  },
};

const DueDilligence = (props) => {
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
                  src="/assets/images/inspection.png"
                  alt="inspect"
                  alt="inspect"
                />
                <p>{mockedData.inspection.title1}</p>
              </div>

              <div className="col-lg-8">
                <h2 className="inspect-header text-center">
                  {mockedData.inspection.title2}
                </h2>

                {mockedData.inspection.items.map((item) => (
                  <div className="row ml-4 mb-4">
                    <div className="col-md-2 inspect-info-img">
                      <img className="book" src={item.image} alt="book" />
                    </div>
                    <div className="col-md-6 details align-self-center">
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

                <button className="btn btn-secondary orange-button mt-5 mb-5">
                  {mockedData.button.text}
                </button>
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
  );
};

export default DueDilligence;
