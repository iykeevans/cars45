import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Button = styled.button`
  background: #ed1f26;
  border: none;
  padding: 0.7rem 2rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Caroverview = ({ car, interestedInCar }) => {
  const router = useRouter();

  return (
    <div className="car-overview">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="more-container">
            <div className="row">
              <div className="col-md-12 text-left">
                <h5 className="overview">Overview</h5>
              </div>
              <div className="col-6 mb-3 mb-sm-0 col-md-2">
                <div className="d-flex car-type">
                  <img src="/assets/icons/car-type.svg" alt="type" />
                  <p>{car.make}</p>
                </div>
              </div>
              <div className="col-6 mb-3 mb-sm-0 col-md-2">
                <div className="d-flex fuel">
                  <img src="/assets/icons/fuel.svg" alt="type" />
                  <p>{car.fuel}</p>
                </div>
              </div>
              <div className="col-6 mb-3 mb-sm-0 col-md-2">
                <div className="d-flex transmission">
                  <img src="/assets/icons/transmission.svg" alt="type" />
                  <p>{car.fuel}</p>
                </div>
              </div>
              {/* <div className="col-12 mb-3 mb-sm-0 col-md-3">
                <div className="d-flex stars">
                  <img src="/assets/icons/stars.svg" alt="type" />
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-md-12 text-left mt-4">
                <h5 className="overview">General Information</h5>

                <div className="col-md-6">
                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Make</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.make}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Model</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.model}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Year</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.year}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Mileage</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.mileage}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Location</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>Car45, {car.city}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Transmission</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.trim}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Selling Condition</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.sellingCondition}</p>
                    </div>
                  </div>

                  <div className="row border-bottom">
                    <div className="col-6">
                      <p>Colour</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>{car.color}</p>
                    </div>
                  </div>

                  <div className="text-center less">
                    <button className="btn btn-link">View less</button>
                  </div>

                  {/* <div className="d-flex justify-content-end">
                    
                  </div> */}
                </div>

                {car.financeable ? <div className="d-flex justify-content-end">
                  <Button
                    className="rounded text-white"
                    onClick={() => {
                      let interested = { interestedInCar }

                      router.push({ pathname: "/loan/personal-information", query: { data: JSON.stringify(interested) } })
                    }}
                  >
                    Proceed To Access Loan
                  </Button>
                </div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroverview;
