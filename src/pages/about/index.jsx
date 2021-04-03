import React from "react";
import HomeLayout from "../../components/layouts/home-layout";
import Link from 'next/link';
import Hero_layout from "../../components/layouts/hero-layout";

const About = () => {
  return (
    <HomeLayout footer="two" >
      <div className="about">
        <div className="hero d-none d-lg-block ">
          <div className="overley"></div>
        </div>
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
            <li>Phone: 0818 984 0160 | 01 888 3367 </li>
            <li>E-Mail: help@cars45.com</li>
            <li>Facebook:<Link href="https://www.instagram.com/cars45ng/"> https://www.instagram.com/cars45ng/</Link></li>
            <li>Twitter:<Link href="https://twitter.com/cars45ng"> https://twitter.com/cars45ng</Link></li>
            <li>Instagram:<Link href="https://www.linkedin.com/company/cars45/"> https://www.linkedin.com/company/cars45/</Link></li>
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
};

export default About;
