import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import ServiceInfoItem from "../../components/services-info/services-info-item";

const mockedData = {
  title: "Scheduled packages",
  basicService: {
    title: "Basic Service",
    image: "/assets/images/services/periodic_services_basic.jpg",
    firstColumn: [
      "Engine oil replacement",
      "Oil filter replacement",
      "Air filter clean",
    ],
    secondColumn: ["Spark plugs check", "Car wash"],
  },
  standardService: {
    title: "Standard Service",
    image: "/assets/images/services/periodic_services_standard.jpg",
    firstColumn: () => [
      ...mockedData.basicService.firstColumn,
      ...mockedData.basicService.secondColumn,
    ],
    secondColumn: [
      "Cabin filter cleaning",
      "Front brake pads serviced",
      "Rear brake shoes serviced",
      "Car scan",
      "Check coolants and fluid",
    ],
  },
  premiumService: {
    title: "Comprehensive Service",
    image: "/assets/images/services/periodic_services_comprehensive.jpg",
    firstColumn: () => [...mockedData.standardService.firstColumn()],
    secondColumn: () => [...mockedData.standardService.secondColumn],
    thirdColumn: ["Wheel alignment", "Wheel balancing", "Tyre rotation"],
  },
  button: {
    text: "REQUEST A SERVICE NOW",
  },
};

const TabContainer = styled.div`
  height: 80px;
  border: 1px solid #10cac1;
`;

const TabText = styled.li`
  font-size: 12px;
  font-weight: 700;
  list-style: none;
  flex-grow: 1;
  text-align: center;
  &:hover {
    background: #dbfffd;
  }
  cursor: pointer;
  background: ${(props) => props.currentRoute && "#DBFFFD"};
`;

const Button = styled.button`
  background: #ff9101;
  border: none;
  margin-bottom: 10rem;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function PeriodicServices() {
  const router = useRouter();

  const handleRequestAService = () => {
    const query = Object.keys(router.query).length ? { ...router.query } : {};

    router.push({
      pathname: "/service/book-a-repair",
      query: { ...query, serviceType: "Periodic Services" },
    });
  };

  return (
    <HomeLayout>
      <div className="container-fluid">
        {/* tab section */}
        <TabContainer className="d-flex flex-column flex-md-row px-5 py-1">
          {services.map((service, index) => (
            <TabText
              currentRoute={"Periodic services" === service.title}
              className="d-flex flex-column justify-content-center rounded mx-1"
              onClick={() => router.push({ pathname: `${service.link}` })}
              key={index}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ height: 36 }}
                className="mb-2"
              />
              <span>{service.title}</span>
            </TabText>
          ))}
        </TabContainer>

        <div className="pl-md-5 mt-4">
          <Heading className="mb-2">{mockedData.title}</Heading>

          <section className="d-flex flex-column flex-md-row p-3 border mb-4">
            <div>
              <img
                src={mockedData.basicService.image}
                alt="basic"
                style={{ height: 250, width: 250 }}
                className="mr-3"
              />
            </div>

            <div style={{ width: "100%" }}>
              <h6 className="mb-3 font-weight-bold">
                {mockedData.basicService.title}
              </h6>

              <div className="container" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-5 text-left" style={{ padding: 0 }}>
                    {mockedData.basicService.firstColumn.map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>

                  <div className="col-md-5" style={{ padding: 0 }}>
                    {mockedData.basicService.secondColumn.map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="position-relative d-flex flex-column flex-md-row p-3 border mb-4">
            <div
              className="position-absolute px-3 text-white py-1 text-white"
              style={{ right: 0, top: 0, backgroundColor: "#10CAC1" }}
            >
              RECOMMENDED
            </div>

            <div>
              <img
                src={mockedData.standardService.image}
                alt="standard"
                style={{ height: 250, width: 250 }}
                className="mr-3"
              />
            </div>

            <div style={{ width: "100%" }}>
              <h6 className="mb-3 font-weight-bold">
                {mockedData.standardService.title}
              </h6>

              <div className="container" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-5 text-left" style={{ padding: 0 }}>
                    {mockedData.standardService.firstColumn().map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>

                  <div className="col-md-5" style={{ padding: 0 }}>
                    {mockedData.standardService.secondColumn.map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="d-flex flex-column flex-md-row p-3 border mb-5">
            <div>
              <img
                src={mockedData.premiumService.image}
                alt="basic"
                style={{ height: 250, width: 250 }}
                className="mr-3"
              />
            </div>

            <div style={{ width: "100%" }}>
              <h6 className="mb-3 font-weight-bold">
                {mockedData.premiumService.title}
              </h6>

              <div className="container" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-4 text-left" style={{ padding: 0 }}>
                    {mockedData.premiumService.firstColumn().map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>

                  <div className="col-md-4" style={{ padding: 0 }}>
                    {mockedData.premiumService.secondColumn().map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>

                  <div className="col-md-4" style={{ padding: 0 }}>
                    {mockedData.premiumService.thirdColumn.map((item, i) => (
                      <ServiceInfoItem text={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            className="text-center rounded"
            onClick={handleRequestAService}
          >
            {mockedData.button.text}
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
}
