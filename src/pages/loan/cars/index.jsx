import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Loading from "../../../components/loadingScreen";
import HomeLayout from "../../../components/layouts/home-layout";
import Socials from "../../../components/socials";
import Chat from "../../../components/chat";
import CarList from "../../../components/car-list2";

const SourceBanner = styled.section`
  background: url("/assets/images/loan/cant-find-what-you-want.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
`;

const Button = styled.button`
  background: #ff9101;
  border: none;
  padding: 0.7rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const AllLoanableCars = (props) => {
  const router = useRouter();

  const [carData, setCarData] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]);

  const [loading, setLoading] = useState(false);

  return (
    <HomeLayout footer="two">
      <div className="loan">
        <div className="jumbotron">
          <div className="banner-container"></div>
          <Socials />
        </div>

        <div className="overview">
          <Chat />

          <div className="container">
            <div className="overview-container">
              <div className="row">
                {carData.map((car, index) => (
                  <CarList car={car} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <SourceBanner className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="font-weight-bold mb-4">Can't find what you want</h2>

          <Button
            className="rounded"
            onClick={() => router.push({ pathname: "/loan/source-car" })}
          >
            CLICK HERE
          </Button>
        </SourceBanner>
      </div>
    </HomeLayout>
  );
};

export default AllLoanableCars;
