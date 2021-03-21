import React from "react";
// import { NavLink, Link } from "react-router-dom";


import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout"

const Swap_car = (props) => {
  return (
<>
{
  <HomeLayout footer="two">
    <div className="swap-car">
      <div className="hero">
      </div>
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
    </HomeLayout>
    }
    </>
  );
};

export default Swap_car;
