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
          <div className="heading mb-5">We service most makes and models</div>
          <div className="d-flex justify-content-center container-fluid">
            <img
              src="/assets/images/car-logo.svg"
              alt="car logo"
              className="mr-2"
            />
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="heading">Frequently Asked Questions</div>
        <div className="container bg-green  p-5 d-flex">
          <div className="col-8">
            <div className="border">
              <div className="title">
                Where can I find the nearest GoMechanic45 workshop from my
                location?
              </div>
              <div className="comment">
                Our growing network of workshops currently provide coverage to
                the Mainland and Island areas of Lagos, Port Harcourt, Abuja and
                several major towns and cities across Nigeria.
              </div>
            </div>
          </div>
          <div className="col-4 green text-white p-5">
            <p>Need an attractive service plan for a fleet of cars?</p>
            <p className="mt-5"> Let our experts tailor a plan for you.</p>
            <div className="bg-orange">
              <div className="img">
                <img
                  src="/assets/images/phone-call.svg"
                  alt="car logo"
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
  );
};

export default Sell_car;
