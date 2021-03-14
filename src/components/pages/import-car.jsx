import React from "react";

import "../../asset/scss/import-car.scss";
import Security from "../security";

const Import_car = () => {
  return (
    <div className="import-car">
      <div className="hero ">
        <div className="overley">
          <div className=" text-center">We are CAR-pable</div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="d-flex flex-column flex-lg-row justify-content-center ">
          <div className="col-6 border-right  py-4">
            <div className="card  ml-lg-auto mr-lg-5">
              <div className="top">
                <img
                  src="/assets/images/clean-car.svg"
                  alt="car"
                  className="mr-3"
                />
              </div>
              <div className="heading">Clean cars</div>
              <p>New or Foreign New cars without damages</p>
              <button className="btn mb-4 mx-5 text-white d-flex justify-content-end">
                Go there
                <div className="ml-5 arrow">
                  <img
                    src="/assets/images/arrow-right.svg"
                    alt="arrow"
                    
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="col-6 py-4">
            {" "}
            <div className="card  ml-lg-5">
              <div className="top">
                <img
                  src="/assets/images/salvage-car.svg"
                  alt="car"
                  className="mr-3"
                />
              </div>
              <div className="heading"> Salvaged Cars</div>
              <p> Cars with repairable damages </p>

              <p></p>
              <button className="btn mb-4 mx-5 text-white d-flex justify-content-end">
                Go there
                <div className="ml-5 arrow">
                  <img
                    src="/assets/images/arrow-right.svg"
                    alt="arrow"
                    
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="how-work mt-5 text-white5 mb-5">
        <div className="overley py-5">
          <div className="container mx-auto">
            <div className="h1 text-center">How it works</div>
            <div className="word py-3 text-dark text-center mt-4">
              You choose the car make, model, year and specifications you want
            </div>
            <div className="word py-3 text-dark text-center mt-4">
              {" "}
              Specify if you want a clean car without damages or a car with
              repairable damages
            </div>
            <div className="word py-3 text-dark text-center mt-4">
              We find the specific car with the best possible cost and send you
              the details.{" "}
            </div>
            <div className="word py-3 text-dark text-center mt-4">
              You make a down payment for the card and we begin the purchasing
              process{" "}
            </div>
            <div className="word py-3 text-dark text-center mt-4">
              We deliver the car to your preferred location within 60days{" "}
            </div>
          </div>
          {/* <div className=" text-center">We are CAR-pable</div> */}
        </div>
      </div>

      <Security />
    </div>
  );
};

export default Import_car;
