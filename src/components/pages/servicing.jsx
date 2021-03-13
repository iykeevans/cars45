import React from "react";

import "../../asset/scss/service.scss";
import Chat from "../chat";
import Security from "../security";
import { services, advantage, faq } from "../../asset/data/service";

const Sell_car = (props) => {
  return (
    <div className="service">
      <div className="container">
        <div className="hero ">
          <div className="overley">
            <form className=" col-lg-3 d-flex flex-column p-4">
              <div className="heading mb-4">
                The Best Car Service Awaits You
              </div>
              <select name="brand" id="brand" className="form-control mb-3">
                <option value="">Select Your Car Details*</option>
              </select>

              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="form-control mb-4"
              />
              <button className="mt-4 d-flex mb-5">CHECK PRICE</button>
            </form>
          </div>
        </div>
        <div className="service-section">
          <div className="heading">SERVICES</div>
          <div className="d-flex justify-content-around">
            {services.map((service, index) => (
              <div className="card  " key={index}>
                <div className="top">
                  <img src={service.image} alt="services" />
                </div>
                <div className="card-body">
                  <div className="title">{service.title}</div>
                  <div className="content pl-2">{service.content}</div>
                  {service?.list?.length > 0 &&
                    service?.list.map((item, index) => (
                      <div className="list d-flex mt-2">
                        <img
                          src="/assets/icons/check-green.svg"
                          alt="check box"
                          className="mr-2"
                        />{" "}
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="advantage">
          <div className="heading mb-5">The Gomechanic45 Advantage</div>
          <div className="d-flex justify-content-around mt-5">
            {advantage.map((adv, index) => (
              <div className="card ">
                <div className="top d-flex flex-column align-items-center">
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
        <div className="brand container ">
          <div className="heading mb-5">
          We service most makes and models
          </div>
          <div className="d-flex justify-content-center">
                    <img
                      src="/assets/images/car-logo.svg"
                      alt="check box"
                      className="mr-2"
                    />
                  </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="heading">
        Frequently Asked Questions
        </div>
        <div className="container bg-green">


        </div>

      </div>
      <Security />
      <Chat />
    </div>
  );
};

export default Sell_car;
