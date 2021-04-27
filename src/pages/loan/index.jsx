import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Chat from "../../components/chat";
import Socials from "../../components/socials";
import HomeLayout from "../../components/layouts/home-layout";

const mockedData = {
  hero: {
    title: "No collateral / No application fee",
  },
  cta: {
    title: "Buy Now, Pay Later",
    description: `Do you want to own your dream car but don't have the funds?
    Good news! You can now buy your cars by paying in monthly
    installments. With an initial 30% deposit, you can drive
    home with your dream car.`,
  },
  requirements: {
    title: "Criteria for qualifying customers for financing",
    description: `For customers to qualify for financing, certain criteria
    must be met. Some of these criteria are but not limited to:`,
    items: [
      () => (
        <li>
          <strong>Inflow:</strong> Monthly salary for employees, and revenue for
          business owners over a period (Minimum of 6 months, or 1 year)
        </li>
      ),
      () => (
        <li>
          <strong>Revenue source:</strong> Either employees earning a monthly
          salary or business owners generating monthly or periodic revenue.
        </li>
      ),
    ],
    summary: `These points are factored in to determine a
    customer/applicant’s profile in comparison to the amount the
    customer seeks for financing.`,
  },
  benefits: {
    title: "BENEFITS",
    items: [
      {
        image: "/assets/images/purchase.svg",
        alt: "purchase",
        text: "Purchase vehicles and pay over a period (usually 12 months)",
      },
      {
        image: "/assets/images/car.svg",
        alt: "car",
        text: "Walk away with your car from day 1",
      },
      {
        image: "/assets/images/hand-key.svg",
        alt: "hand-key",
        text: "Own your car at the end of payment",
      },
      {
        image: "/assets/images/low-interest.svg",
        alt: "low-interest",
        text: "check Low interest rates on your payment",
      },
    ],
  },
  highlight: {
    image: "/assets/images/loan/card.jpg",
    title: "Look for the Badge/ Button",
    description:
      "Find this badge on any car and be confident that we can provide financing!",
  },
  button: {
    text: "ACCESS FINANCABLE CARS",
  },
  footer: {
    title: "Financing Partner:",
    image: "/assets/images/loan/bank-logos.jpg",
  },
};

const Button = styled.button`
  background: #ff9101;
  border: none;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Loan = (props) => {
  const router = useRouter();

  return (
    <HomeLayout footer="two">
      <div className="loan">
        <div className="jumbotron">
          <div className="banner-container">
            <h1>{mockedData.hero.title}</h1>
          </div>
          <Socials />
        </div>

        <div className="overview">
          <Chat />

          <div className="container">
            <div className="overview-container">
              <div className="row section1">
                <div className="col-md-12">
                  <h1>{mockedData.cta.title}</h1>
                  <p>{mockedData.cta.description}</p>
                </div>
              </div>
              <div className="row section2">
                <div className="col-md-12">
                  <h1>{mockedData.requirements.title}</h1>
                  <p>{mockedData.requirements.description}</p>
                </div>
              </div>
              <div className="row section3">
                <div className="col-md-6 steps-bg"></div>
                <div className="col-md-6 steps">
                  <ol>{mockedData.requirements.items.map((item) => item())}</ol>
                  <p>{mockedData.requirements.summary}</p>
                </div>
              </div>

              <div className="benefits">
                <div className="row justify-content-between">
                  <div className="col-md-12">
                    <h2 className="text-center">{mockedData.benefits.title}</h2>
                  </div>

                  {mockedData.benefits.items.map((item, i) => (
                    <div className="col-md-5 mb-4 text-center" key={i}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{ height: "150px", width: "auto" }}
                      />
                      <div className="benefit-container">
                        <img
                          className="purchase-check"
                          src="/assets/icons/purchase-check.svg"
                          alt="check"
                        />
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="row mt-4 pt-5"
                style={{ borderTop: "2px solid #eee" }}
              >
                <div className="col-md-5 d-flex justify-content-end">
                  <img src={mockedData.highlight.image} alt="loan card" />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-end pb-3">
                  <h5>{mockedData.highlight.title}</h5>
                  <p>{mockedData.highlight.description}</p>
                </div>
              </div>

              <div className="d-flex justify-content-center my-5">
                <Button
                  className="text-center rounded"
                  onClick={() => router.push({ pathname: "/loan/cars" })}
                >
                  {mockedData.button.text}
                </Button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mt-5 pl-5">
            <h5 className="mr-4">{mockedData.footer.title}</h5>
            <div style={{ height: "80px" }}>
              <img
                src={mockedData.footer.image}
                alt="bank-logos"
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Loan;
