import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import PeriodicServices from "../../components/services-info/periodic-services";
import DentingAndPainting from "../../components/services-info/denting-and-painting";
import CleaningAndDetailing from "../../components/services-info/cleaning-and-detailing";
import AC from "../../components/services-info/ac";
import TyresAndWheelCare from "../../components/services-info/tyres-and-wheel-care";
import GeneralRepairs from "../../components/services-info/general-repairs";
import InspectionAndDiagnostics from "../../components/services-info/inspection-and-diagnostics";
import UpgradesAndUplifts from "../../components/services-info/upgrades-and-uplifts";

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
  background: ${(props) => props.selected && "#DBFFFD"};
`;

const Button = styled.button`
  background: #ff9101;
  border: none;
  margin-bottom: 10rem;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

export default function info() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Periodic services");

  const handleRequestAService = () => {
    const query = Object.keys(router.query).length ? { ...router.query } : {};

    router.push({
      pathname: "/service/book-a-repair",
      query: { ...query, serviceType: selectedTab },
    });
  };

  return (
    <HomeLayout>
      <div className="container-fluid">
        {/* tab section */}
        <TabContainer className="d-flex flex-column flex-md-row px-5 py-1">
          {services.map((service, index) => (
            <TabText
              selected={selectedTab === service.title}
              className="d-flex flex-column justify-content-center rounded mx-1"
              onClick={() => setSelectedTab(service.title)}
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

        {/* tab item section */}
        <div className="mt-3">
          <div
            className={
              selectedTab !== "Periodic services" ? "d-none" : "d-block"
            }
          >
            <PeriodicServices />
          </div>

          <div
            className={
              selectedTab !== "Denting and painting" ? "d-none" : "d-block"
            }
          >
            <DentingAndPainting />
          </div>

          <div
            className={
              selectedTab !== "Cleaning and detailing" ? "d-none" : "d-block"
            }
          >
            <CleaningAndDetailing />
          </div>

          <div
            className={
              selectedTab !== "AC Services and repair" ? "d-none" : "d-block"
            }
          >
            <AC />
          </div>

          <div
            className={
              selectedTab !== "Tires and wheel care" ? "d-none" : "d-block"
            }
          >
            <TyresAndWheelCare />
          </div>

          <div
            className={selectedTab !== "General repairs" ? "d-none" : "d-block"}
          >
            <GeneralRepairs />
          </div>

          <div
            className={
              selectedTab !== "Inspection and diagnostics"
                ? "d-none"
                : "d-block"
            }
          >
            <InspectionAndDiagnostics />
          </div>

          <div
            className={
              selectedTab !== "Upgrades and uplifts" ? "d-none" : "d-block"
            }
          >
            <UpgradesAndUplifts />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            className="text-center rounded"
            onClick={handleRequestAService}
          >
            REQUEST A SERVICE NOW
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
}
