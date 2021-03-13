import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../../asset/scss/sell-car.scss";
import Chat from "../chat";
import Hero_layout from "../layouts/hero-layout";
import Security from "../security";

const Sell_car = (props) => {
  return (
    <div className="sell-car">
      <Hero_layout bg="/assets/images/car_sell.svg" />
      <div className="text-area container pb-5  ">
        <div className="heading mb-5 text-center">
          Sell your car without stress
        </div>
        <form className=" col-lg-7 d-flex flex-column">
          <select name="brand" id="brand" className="form-control">
            <option value="">Brand</option>
          </select>
          <select name="brand" id="brand" className="form-control">
            <option value="">Modal</option>
          </select>
          <select name="brand" id="brand" className="form-control">
            <option value="">Gear Type</option>
          </select>
          <select name="brand" id="brand" className="form-control">
            <option value="">Select an Inspection center</option>
          </select>
          <input
            type="date"
            className="form-control "
            placeholder="Select a Date and Time"
          />
          <input
            type="tel"
            className="form-control "
            placeholder="Enter your phone number"
          />
          <button className="mt-4">Continue</button>
        </form>
      </div>
      <Security />
      <Chat />
    </div>
  );
};

export default Sell_car;
