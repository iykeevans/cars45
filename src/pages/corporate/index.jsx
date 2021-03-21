import React from "react";

import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout"
import { services, advantage, faqs } from "../../asset/data/service";
import Accordion from "../../components/faq-accordion"

const Corporate = (props) => {
  return (
    <HomeLayout footer="two" >
    <div className="service">
      <div className="container">
        <div className="hero ">
          <div className="overley">
            <form className=" col-12 col-lg-3 d-flex flex-column p-4 ml-lg-5">
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
          <div className="d-flex justify-content-around flex-column flex-lg-row">
            {services.map((service, index) => (
              <div className="card mb-5 mx-auto" key={index}>
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
        <div className="container bg-green  py-5 px-lg-5 d-flex flex-column flex-lg-row">
          <div className="col-lg-8">
            {
              faqs.map((faq, index)=>(
                <Accordion faq={faq} index={index}/>

              ))
            }
          </div>
          <div className="col-lg-4 green text-white p-5 mb-4 d-flex flex-column">
            <p>Need an attractive service plan for a fleet of cars?</p>
            <p className="mt-5 mb-5"> Let our experts tailor a plan for you.</p>
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

export default Corporate;
