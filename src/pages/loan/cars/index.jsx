import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Loading from "../../../components/loadingScreen";
import HomeLayout from "../../../components/layouts/home-layout";
import Socials from "../../../components/socials";
import Chat from "../../../components/chat";
import CarList from "../../../components/car-list2";

import { toast, ToastContainer } from "react-nextjs-toast";
import endpoints from "../../../api/endPoints";
import { getCall } from "../../../api/request";

const mockedData = {
  source: {
    title: "Can't find what you want",
    button: {
      text: "CLICK HERE",
    },
  },
};

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

  React.useEffect(() => {
    searchModels();
  }, []);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchModels = async () => {
    try {
      setLoading(true);
      let response = await getCall(
        `${endpoints.getSearch({ financeable: true })}`
      );
      setLoading(false);
      if (typeof response.data.data === "string") {
        return toast.notify("No cars found", {
          duration: 5,
          title: "Not found",
          type: "error",
        });
      }
      if (response.data.data.currency) delete response.data.data.currency;
      if (response.data.data.totalCars) delete response.data.data.totalCars;
      setCars(Object.values(response.data.data));
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.notify("Oops! something went wrong. keep calm and try again.", {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  };

  return (
    <HomeLayout footer="two">
      <div className="loan">
        <div className="jumbotron">
          <div className="banner-container"></div>
          <Socials />
        </div>

        {cars.length && (
          <div className="overview">
            <Chat />

            <div className="container">
              <div className="overview-container">
                <div className="row">
                  {cars.map((car, index) => (
                    <CarList car={car} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <SourceBanner className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="font-weight-bold mb-4">{mockedData.source.title}</h2>

          <Button
            className="rounded"
            onClick={() => router.push({ pathname: "/loan/source-car" })}
          >
            {mockedData.source.button.text}
          </Button>
        </SourceBanner>
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
};

export default AllLoanableCars;
