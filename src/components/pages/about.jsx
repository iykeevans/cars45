import React from "react";

import "../../asset/scss/about.scss";

import Hero_layout from "../layouts/hero-layout";

const About = () => {
  return (
    <div className="about">
              <div className="hero ">
          <div className="overley">

          </div>
        </div>
      {/* <Hero_layout bg="/assets/images/car-about-us.png" /> */}
      <div className="container mt-5">
        <div className="heading">About Us</div>
        <p>
          Cars45 brand provides consumers with the opportunity to buy cars
          online and offline. Car dealers and end-users can now have access to a
          rich variety of cars that have been properly verified and checked,
          accompanied by a standard inspection report. What we are bringing to
          the market isn't just availability but access to cars with the right
          information such that consumers can make the right decision. Cars45
          currently has its operations spread across Lekki, Ikeja, Ikorodu,
          Oshodi and Amuwo areas of Lagos, Ibadan, Kano, Port-Harcourt, and
          Abuja.
        </p>
        <p>Find the nearest location to you here. </p>
        <p className="contact">Contact Us </p>
        <ul className="mb-5">
          <li>Phone: 08096951860</li>
          <li>E-Mail: help@carsbazr.com</li>
          <li>Facebook: @cars45.ng</li>
          <li>Twitter: @cars45ng</li>
          <li>Instagram: @cars45ng</li>
        </ul>
        
      </div>
    </div>
  );
};

export default About;
