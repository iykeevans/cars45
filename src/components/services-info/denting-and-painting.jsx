import React from "react";
import styled, { css } from "styled-components";
import ServiceInfoItem from "./services-info-item";

//import image_periodic_services_basic from "/assets/images/services/";

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function DentingAndPainting() {
  return (
    <div className="pl-md-5">
      <Heading className="mb-2">Denting & Painting</Heading>

      <section className="d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/panel_painting.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Panel painting</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Front bumper" />

                <ServiceInfoItem text="Rear bumper" />

                <ServiceInfoItem text="Left/Right fender" />
              </div>

              <div className="col-md-5" style={{ padding: 0 }}>
                <ServiceInfoItem text="Bonnet/boot" />

                <ServiceInfoItem text="Door paint" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/full_body_painting.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Full Body painting</h6>
        </div>
      </section>

      <section className="d-flex flex-column flex-md-row p-3 border mb-5">
        <div>
          <img
            src="/assets/images/services/rim_painting.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Comprehensive Service</h6>
        </div>
      </section>
    </div>
  );
}
