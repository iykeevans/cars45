import React from "react";
import styled, { css } from "styled-components";
import ServiceInfoItem from "./services-info-item";

//import image_periodic_services_basic from "/assets/images/services/";

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function GeneralRepairs() {
  return (
    <div className="pl-md-5">
      <Heading className="mb-2">General Repairs</Heading>

      <section className="d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/general_repair.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Engine repairs" />

                <ServiceInfoItem text="Transmission repairs" />

                <ServiceInfoItem text="Suspension repairs" />

                <ServiceInfoItem text="Electrical repairs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
