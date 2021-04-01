import React from "react";
import styled, { css } from "styled-components";
import ServiceInfoItem from "./services-info-item";

//import image_periodic_services_basic from "/assets/images/services/";

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Card = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function PeriodicServices() {
  return (
    <div className="pl-md-5">
      <Heading className="mb-2">Scheduled packages</Heading>

      <section className="d-flex flex-column flex-md-row p-3 border mb-4">
        <div>
          <img
            src="/assets/images/services/periodic_services_basic.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Basic Service</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Engine oil replacement" />

                <ServiceInfoItem text="Oil filter replacement" />

                <ServiceInfoItem text="Air filter clean" />
              </div>

              <div className="col-md-5" style={{ padding: 0 }}>
                <ServiceInfoItem text="Spark plugs check" />

                <ServiceInfoItem text="Car wash" />
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
            src="/assets/images/services/periodic_services_standard.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Standard Service</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-5 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Engine oil replacement" />

                <ServiceInfoItem text="Oil filter replacement" />

                <ServiceInfoItem text="Air filter clean" />

                <ServiceInfoItem text="Spark plugs check" />

                <ServiceInfoItem text="Car wash" />
              </div>

              <div className="col-md-5" style={{ padding: 0 }}>
                <ServiceInfoItem text="Cabin filter cleaning" />

                <ServiceInfoItem text="Front brake pads serviced" />

                <ServiceInfoItem text="Rear brake shoes serviced" />

                <ServiceInfoItem text="Car scan" />

                <ServiceInfoItem text="Check coolants and fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-column flex-md-row p-3 border mb-5">
        <div>
          <img
            src="/assets/images/services/periodic_services_comprehensive.jpg"
            alt="basic"
            style={{ height: 250, width: 250 }}
            className="mr-3"
          />
        </div>

        <div style={{ width: "100%" }}>
          <h6 className="mb-3 font-weight-bold">Comprehensive Service</h6>

          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-4 text-left" style={{ padding: 0 }}>
                <ServiceInfoItem text="Engine oil replacement" />

                <ServiceInfoItem text="Oil filter replacement" />

                <ServiceInfoItem text="Air filter clean" />

                <ServiceInfoItem text="Spark plugs check" />

                <ServiceInfoItem text="Car wash" />
              </div>

              <div className="col-md-4" style={{ padding: 0 }}>
                <ServiceInfoItem text="Cabin filter cleaning" />

                <ServiceInfoItem text="Front brake pads serviced" />

                <ServiceInfoItem text="Rear brake shoes serviced" />

                <ServiceInfoItem text="Car scan" />

                <ServiceInfoItem text="Check coolants and fluid" />
              </div>

              <div className="col-md-4" style={{ padding: 0 }}>
                <ServiceInfoItem text="Wheel alignment" />

                <ServiceInfoItem text="Wheel balancing" />

                <ServiceInfoItem text="Tyre rotation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
