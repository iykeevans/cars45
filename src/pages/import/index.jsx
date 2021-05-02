import React from "react";

import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout";

const mockedData = {
  hero: {
    title: "We are CAR-pable",
  },
  carTypes: [
    {
      image: "/assets/images/clean-car.webp",
      title: "Clean cars",
      paragraph: "New or Foreign New cars without damages",
      button: {
        text: "Go there",
        image: "/assets/images/arrow-right.svg",
      },
    },
    {
      image: "/assets/images/salvage-car.webp",
      title: "Salvaged Cars",
      paragraph: "Cars with repairable damages",
      button: {
        text: "Go there",
        image: "/assets/images/arrow-right.svg",
      },
    },
  ],
  service: {
    title: "How it works",
    items: [
      "You choose the car make, model, year and specifications you want",
      "Specify if you want a clean car without damages or a car with repairable damages",
      "We find the specific car with the best possible cost and send you the details.",
      "You make a down payment for the card and we begin the purchasing process",
      "We deliver the car to your preferred location within 60days",
    ],
  },
};

const Import_car = () => {
  return (
    <HomeLayout footer="two">
      <div className="import-car">
        <div className="hero ">
          <div className="overley">
            <div className=" text-center">{mockedData.hero.title}</div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex flex-column flex-lg-row justify-content-center ">
            {mockedData.carTypes.map((item, index) => (
              <div
                className={`col-6 py-4 ${index == 0 ? "border-right" : ""}`}
                key={index}
              >
                {index == 1 && <span> </span>}
                <div
                  className={`card   ${
                    index == 0 ? "ml-lg-auto mr-lg-5" : "ml-lg-5"
                  } `}
                >
                  <div className="top">
                    <img
                      src={item.image}
                      alt={item.title.toLowerCase()}
                      className="mr-3"
                    />
                  </div>

                  <div className="heading">{item.title}</div>
                  <p>{item.paragraph}</p>
                  <button className="btn mb-4 mx-5 text-white d-flex justify-content-end">
                    {item.button.text}
                    <div className="ml-5 arrow">
                      <img
                        src={item.button.image}
                        alt={item.button.text.toLowerCase()}
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="how-work mt-5 text-white5 mb-5">
          <div className="overley py-5">
            <div className="container mx-auto">
              <div className="h1 text-center">{mockedData.service.title}</div>
              {mockedData.service.items.map((item, index) => (
                <div
                  className="word py-3 text-dark text-center mt-4"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Security />
      </div>
    </HomeLayout>
  );
};

export default Import_car;
