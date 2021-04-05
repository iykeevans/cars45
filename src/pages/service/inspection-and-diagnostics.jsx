import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import ServiceInfoItem from "../../components/services-info/services-info-item";

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

export default function InspectionAndDiagnostics() {
  const router = useRouter();

  const handleRequestAService = () => {
    const query = Object.keys(router.query).length ? { ...router.query } : {};

    router.push({
      pathname: "/service/book-a-repair",
      query: { ...query, serviceType: "Inspection and diagnostics" },
    });
  };

  return (
    <HomeLayout>
      <div className="container-fluid">
        {/* tab section */}
        <TabContainer className="d-flex flex-column flex-md-row px-5 py-1">
          {services.map((service, index) => (
            <TabText
              currentRoute={"Inspection and diagnostics" === service.title}
              className="d-flex flex-column justify-content-center rounded mx-1"
              onClick={() => router.push({ pathname: service.link })}
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
          <Heading className="mb-2">Inspection and Diagnostics</Heading>

          <section className="d-flex flex-column flex-md-row p-3 border mb-4">
            <div>
              <img
                src="/assets/images/services/inspection_diagnostics.jpg"
                alt="basic"
                style={{ height: 250, width: 250 }}
                className="mr-3"
              />
            </div>

            <div style={{ width: "100%" }}>
              <div className="container" style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-5 text-left" style={{ padding: 0 }}>
                    <ServiceInfoItem text="Engine scanning" />

                    <ServiceInfoItem text="Electrical scanning" />

                    <ServiceInfoItem text="Complete suspension check" />

                    <ServiceInfoItem text="Fluids and coolant check" />
                  </div>

                  <div className="col-md-5" style={{ padding: 0 }}>
                    <ServiceInfoItem text="Exhaust/emission check" />
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
            REQUEST A SERVICE NOW
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
}
