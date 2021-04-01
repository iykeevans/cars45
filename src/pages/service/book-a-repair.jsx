import React, { useState } from "react";
import styled from "styled-components";

import { services } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";

const Button = styled.button`
  background: #21b7ac;
  border: none;
  padding: 0.7rem 2rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Heading = styled.h2`
  color: #21b7ac;
`;

export default function BookARepair() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
  };

  return (
    <HomeLayout>
      <div className="container d-flex flex-column align-items-center">
        <Heading className="text-center mt-5 mb-4">Book A Car Repair</Heading>

        <form
          className="p-4 mb-5 rounded d-flex flex-column"
          style={{ background: "#eee", width: "45vw" }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNo"
              value={phoneNo}
              onChange={({ target }) => setPhoneNo(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              value={brand}
              onChange={({ target }) => setBrand(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              value={model}
              onChange={({ target }) => setModel(target.value)}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="serviceType">Service Type</label>
            <select
              className="custom-select"
              id="serviceType"
              value={serviceType}
              required
              onChange={({ target }) => setServiceType(target.value)}
            >
              <option selected disabled value="">
                Choose...
              </option>
              {services.map((service, index) => (
                <option key={index} value={service.title.toLowerCase()}>
                  {service.title}
                </option>
              ))}
            </select>

            <div className="invalid-feedback">Please select a valid state.</div>
          </div>

          <div className="form-group">
            <label htmlFor="city">Select a City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location(street)</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={({ target }) => setLocation(target.value)}
            />
          </div>

          <Button className="text-center rounded align-self-center text-white">
            Submit
          </Button>
        </form>
      </div>
    </HomeLayout>
  );
}
