import React, { useState } from "react";
import styled from "styled-components";

import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout";
import { services, advantage, faqs } from "../../asset/data/service";
import Accordion from "../../components/faq-accordion";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Button = styled.button`
  background: #21b7ac;
  border: none;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Service = (props) => {
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleFuelType, setVehicleFuelType] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [carStartStatus, setCarStartStatus] = useState("yes");
  const [fluidLeakageStatus, setFluidLeakageStatus] = useState("yes");
  const [smokeStatus, setSmokeStatus] = useState("yes");

  const handleCheckService = (event) => {
    event.preventDefault();
    console.log("I am submitting");
  };

  return (
    <HomeLayout footer="two">
      <div className="service servicing">
        <div className="container">
          <div className="hero ">
            <div className="overley">
              <form
                className=" col-12 col-lg-3 d-flex flex-column p-4 ml-lg-5"
                onSubmit={handleCheckService}
              >
                <div className="heading mb-4">
                  The Best Car Service Awaits You
                </div>

                <select name="brand" id="brand" className="form-control mb-3">
                  <option
                    value={vehicleMake}
                    onChange={({ target }) => setVehicleMake(target.value)}
                  >
                    Select Make
                  </option>
                </select>

                <select name="brand" id="brand" className="form-control mb-3">
                  <option
                    value={vehicleModel}
                    onChange={({ target }) => setVehicleModel(target.value)}
                  >
                    Select Model
                  </option>
                </select>

                <select
                  name="brand"
                  id="brand"
                  className="form-control mb-3"
                  value={vehicleFuelType}
                  onChange={({ target }) => setVehicleFuelType(target.value)}
                >
                  <option value="">Fuel Type</option>
                  <option value="diesel">Diesel</option>
                  <option value="petrol">Petrol</option>
                </select>

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="form-control mb-4"
                  value={phoneNo}
                  onChange={({ target }) => setPhoneNo(target.value)}
                />

                <button className="mt-4 d-flex">CHECK SERVICE</button>
              </form>
            </div>
          </div>

          {/* services section */}
          <div className="service-section pt-5">
            <h2 className="text-center font-weight-bold mb-5 text-white">
              SERVICES
            </h2>

            <div className="px-4">
              <GridBox>
                {services.map(({ title, image }, index) => (
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#eee",
                      height: 210,
                    }}
                    key={index}
                  >
                    <img src={image} alt={title} className="mb-3" />
                    <h6>{title}</h6>
                  </div>
                ))}
              </GridBox>
            </div>
          </div>

          {/* advantages section */}
          <div className="advantage">
            <h2 className="text-white mb-5 text-center">
              The MeKanic 45 Advantage
            </h2>
            <div className="d-flex justify-content-around mt-5 flex-column flex-lg-row">
              {advantage.map((adv, index) => (
                <div className="card mb-5 mx-auto" key={index}>
                  <div className="top d-flex flex-column align-items-center  ">
                    <div className="ing">
                      <img src={adv.image} alt="check box" className="mr-2" />
                    </div>

                    <div className="ing">
                      <img
                        src="/assets/images/service-car.svg"
                        alt="check box"
                        className="mr-2"
                      />
                    </div>
                  </div>
                  <div className="body">
                    <div className="title">{adv.title}</div>
                    <div className="content">{adv.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* remote diagnostics sections */}
          <div className="mt-5 px-5 py-5" style={{ background: "#E4E4E4" }}>
            <h2 className="text-center mb-5">Remote Diagnostics</h2>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <h6>Car is not starting</h6>
                <div class="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="ableToTurnKey"
                    value="yes"
                    checked={carStartStatus === "yes"}
                    onChange={({ target }) => setCarStartStatus(target.value)}
                  />

                  <label
                    className="custom-control-label"
                    htmlFor="ableToTurnKey"
                  >
                    I am able to turn the key
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="unableToTurnKey"
                    value="no"
                    checked={carStartStatus === "no"}
                    onChange={({ target }) => setCarStartStatus(target.value)}
                  />

                  <label
                    className="custom-control-label"
                    htmlFor="unableToTurnKey"
                  >
                    I am unable to turn the key
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <h6>Fluids are leaking</h6>
                <div class="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="isLeaking"
                    value="yes"
                    checked={fluidLeakageStatus === "yes"}
                    onChange={({ target }) =>
                      setFluidLeakageStatus(target.value)
                    }
                  />
                  <label className="custom-control-label" htmlFor="isLeaking">
                    Leakage observed inside the car
                  </label>
                </div>

                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="notLeaking"
                    value="no"
                    checked={fluidLeakageStatus === "no"}
                    onChange={({ target }) =>
                      setFluidLeakageStatus(target.value)
                    }
                  />
                  <label className="custom-control-label" htmlFor="notLeaking">
                    Leakage observed outside the car
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <h6>Smoke/steam is coming out of the car</h6>
                <div className="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="steam/smoke"
                    value="yes"
                    checked={smokeStatus === "yes"}
                    onChange={({ target }) => setSmokeStatus(target.value)}
                  />

                  <label className="custom-control-label" htmlFor="steam/smoke">
                    Steam coming from the engine
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="notLeaking"
                    value="no"
                    checked={smokeStatus === "no"}
                    onChange={({ target }) => setSmokeStatus(target.value)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlValidation2"
                  >
                    Steam coming from the exhaust
                  </label>
                </div>
              </div>

              <Button className="rounded mt-5 text-white">
                REQUEST A CALLBACK
              </Button>
            </div>
          </div>

          {/* brands section */}
          <div className="brand container ">
            <h2 className="mb-5 text-center font-weight-bold">
              We service most makes and models
            </h2>

            <div className="d-flex justify-content-center container-fluid">
              <img
                src="/assets/images/car-logo.svg"
                alt="car logo"
                className="mr-2"
              />
            </div>
          </div>
        </div>

        {/* faq */}
        <div className="faq-section">
          <h2 className="text-center font-weight-bold mb-5">
            Frequently Asked Questions
          </h2>

          <div className="container bg-green  py-5 px-lg-5 d-flex flex-column flex-lg-row">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <Accordion faq={faq} key={index} />
              ))}
            </div>

            <div className="col-lg-4 green text-white p-5 mb-4 d-flex flex-column">
              <p>Need an attractive service plan for a fleet of cars?</p>
              <p className="mt-5 mb-5">
                {" "}
                Let our experts tailor a plan for you.
              </p>
              <div className="bg-orange mt-auto">
                <div className="img">
                  <img
                    src="/assets/images/phone-call.svg"
                    alt="mobile call"
                    className="mr-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Security />

        <Chat />
      </div>
    </HomeLayout>
  );
};

export default Service;
