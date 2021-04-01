import React from "react";
import styled from "styled-components";
import ServiceInfoItem from "./services-info-item";

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function AC() {
  return (
    <div className="pl-md-5">
      <Heading className="mb-2">AC Services and Repair</Heading>

      <section className="d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/periodic_ac_repair.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Periodic AC Service</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="AC gas top-up" />

                <ServiceInfoItem text="AC filter cleaning/replacement" />

                <ServiceInfoItem text="AC vents cleaning" />

                <ServiceInfoItem text="HVAC system inspection" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/ac_repair.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">AC Repair</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Condenser replacement" />

                <ServiceInfoItem text="Compressor replacement" />

                <ServiceInfoItem text="AC system overhaul" />

                <ServiceInfoItem text="AC system configuration" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
