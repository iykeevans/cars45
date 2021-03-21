import React from "react";

import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout"


const Sell_car = (props) => {
  return (
    <HomeLayout >
    <div className="sell-car">
      <div className="hero ">
        </div>
      <div className="text-area container pb-5  ">
        <div className="heading mb-5 mt-5 mt-lg-0 text-center">
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
    </HomeLayout>
  );
};

export default Sell_car;
