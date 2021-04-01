import React from "react";
import styled from "styled-components";
import ServiceInfoItem from "./services-info-item";

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function TyresAndWheelCare() {
  return (
    <div className="pl-md-5">
      <Heading className="mb-2">Tyres and Wheel Care</Heading>

      <section className="d-flex flex-column flex-md-row p-3 shadow-sm border mb-4">
        <div>
          <img
            src="/assets/images/services/tyres_replacement.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Tyres replacement</h6>
        </div>
      </section>

      <section className="position-relative d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/wheel_care_replacement.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Wheel care</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Wheel alignment" />

                <ServiceInfoItem text="Wheel balancing" />

                <ServiceInfoItem text="Tyre rotation" />

                <ServiceInfoItem text="Camber adjustments" />
              </div>

              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Tyre wear pattern inspection" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
