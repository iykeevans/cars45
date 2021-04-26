import React from "react";
import { dealer_details, dealer_points } from "../../asset/data/service";
import Dealergoals from "../../components/dealer-goals";
import Dealerpoint from "../../components/dealerpoints";
import HomeLayout from "../../components/layouts/home-layout";
import Link from "next/link";

const mockData = {
  hero: {
    title: "Become a Franchise Dealer",
  },
  about: `Driven by a mission to build an ecosystem that enhances,enables and
  drives trade within Nigeria's automotive sector, Cars45 is Nigeria's
  largest digital automotive trading platform. We are a go-to platform
  providing people and businesses with a convenient and reliable way to
  buy, sell and swap used cars using modern innovative and
  technologically driven processes.`,
  why: {
    title: "We Are Highly Committed",
    paragraph1: () => (
      <p>
        We have an unparalleled commitment to quality and our innovative,
        evolving product and service offerings attest to this.
        <br /> With the support of Cars45 Management and Staff, we will keep you
        going for SUCCESS.
      </p>
    ),
    tagline: "“ Motivation gets you started; Commitment keeps you going ”",
    footNote: () => (
      <p>
        We provide the safest marketplace for you. Access to our inventory of
        certified cars.
        <br /> Verified Documents and paperwork. Simple Car Transfer and
        payment.
      </p>
    ),
  },
  plan: {
    title: "The BIG Idea – Project F.A.S.T",
    goals: dealer_details,
    points: dealer_points,
    statement: "WITH LOVE FROM US TO YOU",
  },
  journey: {
    title: "Start Your Journey",
    items: [
      `Have little or no Car Dealership experience and/or interested in
    owning a lucrative retail franchise`,
      `Extensive Car dealership experience, with car lots in one or
    several locations and would like to join our network`,
      `Commitment to operational excellence, customer service and a
    strong willingness to learn and practice Cars45 Business Model`,
      `Demonstrate exceptional managerial and business acumen`,
    ],
  },
  footer: {
    warningText: "warning Cars45 is committed to keeping your information safe",
    contact: {
      title: "Contact Team F.A.S.T",
      cta: "To Join our Dealer Program",
      information: () => (
        <span>
          Contact: <br />
          4TH FLOOR, CIPM BUILDING, <br />
          CIPM AVENUE, ALAUSA, IKEJA, LAGOS, NIGERIA <br />
          +234 818 984 0160, +234 908 747 4947, +234 908 769 5935 <br />
          franchise@cars45.com
        </span>
      ),
    },
  },
};

export default function Dealer() {
  return (
    <HomeLayout footer="two">
      <div className="dealer-container">
        <div className="dealer-banner">
          {/* <div className="cover"></div>
        <img src="./assets/images/dealer.jpg" /> */}
          <h1 className="header">{mockData.hero.text}</h1>
        </div>
        <div className="dealer-intro">
          <p>{mockData.about}</p>
        </div>
        <div className="dealer-commitment">
          <h1>{mockData.why.title}</h1>
          {mockData.why.paragraph1()}
          <h5 className="motivation">{mockData.why.tagline}</h5>

          {mockData.why.footNote}

          <div className="line"></div>

          <h1>{mockData.plan.title}</h1>
          <div className="dealer-details">
            {mockData.plan.goals.map((item, index) => (
              <Dealergoals key={index} {...item} />
            ))}
          </div>

          <div className="dealer-points">
            <div className="dealer-point-meet">
              {mockData.plan.points.map((text, index) => (
                <Dealerpoint key={index} text={text} />
              ))}
            </div>
            <p className="dealer-point-statement">{mockData.plan.statement}</p>
          </div>
        </div>

        <div className="dealer-journey">
          <h1>{mockData.journey.title}</h1>
          <ul>
            {mockData.journey.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div className="dealer-form-field">
          <form className="dealer-form">
            <Link
              href="https://app.pipefy.com/public/form/yP4VaDaG"
              className="mt-4 btn btn-secondary orange-button"
            >
              Sign Up
            </Link>
          </form>

          <div className="color-footer"></div>
        </div>
        <div className="deal-contact-details">
          <div className="deal-contact-security">
            <img
              src="/assets/icons/security.svg"
              alt="security"
              className="mr-2"
            />
            <p>{mockData.footer.warningText}</p>
          </div>
          <div className="contact-line"></div>
          <h1>{mockData.footer.contact.title}</h1>
          <p>
            <strong>{mockData.footer.contact.cta}</strong> <br />
            {mockData.footer.contact.information()}
          </p>
        </div>
      </div>
    </HomeLayout>
  );
}
