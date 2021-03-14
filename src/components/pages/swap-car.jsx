import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../../asset/scss/swap-car.scss";
import Chat from "../chat";
import Hero_layout from "../layouts/hero-layout";
import Security from "../security";

const Sell_car = (props) => {
  return (
    <div className="swap-car">
      <Hero_layout bg="/assets/images/car_swap.webp" />
      <div className="text-area container pb-5  ">
        <form className=" col-lg-7 d-flex flex-column mt-5">
          <select name="brand" id="brand" className="form-control">
            <option value="">Brand</option>
          </select>
          <select name="brand" id="brand" className="form-control">
            <option value="">Modal</option>
          </select>
          <select name="brand" id="brand" className="form-control">
            <option value="">Gear Type</option>
          </select>
          <input
            type="date"
            className="form-control "
            placeholder="Select a Date and Time"
          />
          <input
            type="email"
            className="form-control "
            placeholder="Enter your email"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
          />
          <button className="mt-4 d-flex">Next <div className="arrow"><img src="/assets/icons/arrow-right.svg" alt="arrow right" /></div></button>
        </form>
      </div>
      <Security />
      <Chat />
    </div>
  );
};

export default Sell_car;
