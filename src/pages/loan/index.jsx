import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Chat from "../../components/chat";
import Socials from "../../components/socials";
import HomeLayout from "../../components/layouts/home-layout";

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
            <h1>No collateral / No application fee</h1>
          </div>
          <Socials />
        </div>

        <div className="overview">
          <Chat />

          <div className="container">
            <div className="overview-container">
              <div className="row section1">
                <div className="col-md-12">
                  <h1>Buy Now, Pay Later</h1>
                  <p>
                    Do you want to own your dream car but don't have the funds?
                    Good news! You can now buy your cars by paying in monthly
                    installments. With an initial 30% deposit, you can drive
                    home with your dream car.{" "}
                  </p>
                </div>
              </div>
              <div className="row section2">
                <div className="col-md-12">
                  <h1>Criteria for qualifying customers for financing</h1>
                  <p>
                    For customers to qualify for financing, certain criteria
                    must be met. Some of these criteria are but not limited to:
                  </p>
                </div>
              </div>
              <div className="row section3">
                <div className="col-md-6 steps-bg"></div>
                <div className="col-md-6 steps">
                  <ol>
                    <li>
                      <strong>Inflow:</strong> Monthly salary for employees, and
                      revenue for business owners over a period (Minimum of 6
                      months, or 1 year)
                    </li>

                    <li>
                      <strong>Revenue source:</strong> Either employees earning
                      a monthly salary or business owners generating monthly or
                      periodic revenue.
                    </li>
                  </ol>
                  <p>
                    These points are factored in to determine a
                    customer/applicant’s profile in comparison to the amount the
                    customer seeks for financing.
                  </p>
                </div>
              </div>

              <div className="benefits">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center">BENEFITS</h2>
                  </div>
                  <div className="col-md-5 mb-4 text-center">
                    <img
                      className="purchase"
                      src="/assets/images/purchase.svg"
                      alt="purchase"
                    />
                    <div className="benefit-container">
                      <img
                        className="purchase-check"
                        src="/assets/icons/purchase-check.svg"
                        alt="check"
                      />
                      <p>
                        Purchase vehicles and pay over a period (usually 12
                        months)
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 text-center">
                    <img
                      className="purchase mt-5"
                      src="/assets/images/car.svg"
                      alt="purchase"
                    />
                    <div className="benefit-container">
                      <img
                        className="purchase-check"
                        src="/assets/icons/purchase-check.svg"
                        alt="check"
                      />
                      <p>Walk away with your car from day 1</p>
                    </div>
                  </div>
                  <div className="col-md-5 text-center">
                    <img
                      className="purchase"
                      src="/assets/images/hand-key.svg"
                      alt="purchase"
                    />
                    <div className="benefit-container">
                      <img
                        className="purchase-check"
                        src="/assets/icons/purchase-check.svg"
                        alt="check"
                      />
                      <p>Own your car at the end of payment</p>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 text-center">
                    <img
                      className="low-interest"
                      src="/assets/images/low-interest.svg"
                      alt="purchase"
                    />
                    <div className="benefit-container">
                      <img
                        className="purchase-check"
                        src="/assets/icons/purchase-check.svg"
                        alt="check"
                      />
                      <p>Low interest rates on your payment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row mt-4 pt-5"
                style={{ borderTop: "2px solid #eee" }}
              >
                <div className="col-md-5 d-flex justify-content-end">
                  <img src="/assets/images/loan/card.jpg" alt="" />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-end pb-3">
                  <h5>Look for the Badge/ Button</h5>
                  <p>
                    Find this badge on any car and be confident that we can
                    provide financing!
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-center my-5">
                <Button
                  className="text-center rounded"
                  onClick={() => router.push({ pathname: "/loan/cars" })}
                >
                  ACCESS FINANCABLE CARS
                </Button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mt-5 pl-5">
            <h5 className="mr-4">Financing Partner:</h5>
            <div style={{ height: "80px" }}>
              <img
                src="/assets/images/loan/bank-logos.jpg"
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
