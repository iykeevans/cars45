import React from "react";
import { dealer_details, dealer_points } from "../../asset/data/service";
import "../../asset/scss/deals.scss";
import Dealergoals from "../dealer-goals";
import Dealerpoint from "../dealerpoints";

export default function Dealer() {
  return (
    <div className="dealer-container">
      <div className="dealer-banner">
        {/* <div className="cover"></div>
        <img src="./assets/images/dealer.jpg" /> */}
        <h1 className="header">Become a Franchise Dealer</h1>
      </div>
      <div className="dealer-intro">
        <p>
          Driven by a mission to build an ecosystem that enhances,enables and
          drives trade within Nigeria's automotive sector, Cars45 is Nigeria's
          largest digital automotive trading platform. We are a go-to platform
          providing people and businesses with a convenient and reliable way to
          buy, sell and swap used cars using modern innovative and
          technologically driven processes.
        </p>
      </div>
      <div className="dealer-commitment">
        <h1>We Are Highly Committed</h1>
        <p>
          We have an unparalleled commitment to quality and our innovative,
          evolving product and service offerings attest to this.
          <br /> With the support of Cars45 Management and Staff, we will keep
          you going for SUCCESS.
        </p>
        <h5 className="motivation">
          “ Motivation gets you started; Commitment keeps you going ”
        </h5>
        <p>
          We provide the safest marketplace for you. Access to our inventory of
          certified cars.
          <br /> Verified Documents and paperwork. Simple Car Transfer and
          payment.
        </p>

        <div className="line"></div>

        <h1>The BIG Idea – Project F.A.S.T</h1>
        <div className="dealer-details">
          {dealer_details.map((item, index) => (
            <Dealergoals key={index} {...item} />
          ))}
        </div>

        <div className="dealer-points">
          <div className="dealer-point-meet">
            {dealer_points.map((text, index) => (
              <Dealerpoint key={index} text={text} />
            ))}
          </div>
          <p className="dealer-point-statement">WITH LOVE FROM US TO YOU</p>
        </div>
      </div>

      <div className="dealer-journey">
        <h1>Start Your Journey</h1>
        <ul>
          <li>
            Have little or no Car Dealership experience and/or interested in
            owning a lucrative retail franchise
          </li>
          <li>
            Extensive Car dealership experience, with car lots in one or several
            locations and would like to join our network
          </li>
          <li>
            Commitment to operational excellence, customer service and a strong
            willingness to learn and practice Cars45 Business Model
          </li>
          <li>Demonstrate exceptional managerial and business acumen</li>
        </ul>
      </div>
      <div className="dealer-form-field">
        <form className="dealer-form">
          <h4>Fill form below to get full brochure and application form</h4>
          <input
            type="text"
            className="form-control "
            placeholder="First name"
          />
          <input
            type="text"
            className="form-control "
            placeholder="Last name"
          />
          <input
            type="email"
            className="form-control "
            placeholder="Email"
            required
          />
          <input
            type="tel"
            className="form-control "
            placeholder="Phone"
            required
          />
          <input
            type="text"
            className="form-control "
            placeholder="City"
            required
          />
          <button className="mt-4">Sign Up</button>
        </form>
        <div className="color-footer"></div>
      </div>
      <div className="deal-contact-details">
        <div className="deal-contact-security">
        <img src="/assets/icons/security.svg" alt="security" className="mr-2" /> 
        <p>warning Cars45 is committed to keeping your information safe</p>
        </div>
        <div className="contact-line"></div>
        <h1>Contact Team F.A.S.T</h1>
        <p><strong>To Join our Dealer Program</strong> <br />
        Contact: <br />
        4TH FLOOR, CIPM BUILDING, <br/>
        CIPM AVENUE, ALAUSA, IKEJA, LAGOS, NIGERIA <br/>
        +234 818 984 0160, +234 908 747 4947, +234 908 769 5935 <br/>
        franchise@cars45.com</p>
      </div>
    </div>
  );
}
