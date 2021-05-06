import React, { useState, useEffect } from "react";
import Head from 'next/head';
import styled from "styled-components";
import endPoints from "../../api/endPoints";
import { useRouter } from "next/router";

import { getCall } from "../../api/request";

import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout";
import { services, advantage, faqs } from "../../asset/data/service";
import Accordion from "../../components/faq-accordion";
import Loading from "../../components/loadingScreen";

const mockData = {
  hero: {
    form: {
      title: "The Best Car Service Awaits You",
      button: {
        text: "CHECK SERVICE",
      },
    },
  },
  service: {
    title: "SERVICES",
    items: services,
  },
  features: {
    title: "The MeKanic 45 Advantage",
    items: advantage,
  },
  benefits: {
    title: "Remote Diagnostics",
  },
  brands: {
    title: "We service most makes and models",
    image: "/assets/images/car-logo.svg",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: faqs,
  },
  footer: {
    cta: {
      paragraph1: "Need an attractive service plan for a fleet of cars?",
      paragraph2: "Let our experts tailor a plan for you.",
    },
    phone: {
      image: "/assets/images/phone-call.svg",
      data: "+234 818 984 0160",
    },
  },
};

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #eee;
  height: 210px;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

const Button = styled.button`
  background: #21b7ac;
  border: none;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const Service = (props) => {
  const [loading, setLoading] = useState(true);
  const [carMakes, setCarMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleFuelType, setVehicleFuelType] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [carStartStatus, setCarStartStatus] = useState("yes");
  const [fluidLeakageStatus, setFluidLeakageStatus] = useState("yes");
  const [smokeStatus, setSmokeStatus] = useState("yes");

  const router = useRouter();

  useEffect(() => {
    getMakes();
  }, []);

  useEffect(() => {
    if (vehicleMake) {
      getModel(vehicleMake);
    }
  }, [vehicleMake]);

  const handleCheckService = (event) => {
    event.preventDefault();
    const query = {};

    phoneNo && (query.phoneNo = phoneNo.trim());
    vehicleMake && (query.make = vehicleMake.trim());
    vehicleModel && (query.model = vehicleModel.trim());

    router.push({
      pathname: "/service/periodic-services",
      query: { ...query },
    });
  };

  const getMakes = () => {
    getCall(`${endPoints.getMake}`)
      .then(({ data: response }) => {
        setCarMakes(response.data);
      })
      .catch((error) => {
        setLoading(false)
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getModel = (make) => {
    setLoading(true);
    getCall(`${endPoints.getModel(make)}`)
      .then(({ data: response }) => {
        setLoading(true);
        setCarModels(response.data);
      })
      .catch((error) => {
        setLoading(false)
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <HomeLayout footer="two">
      <Head>
        <title>Car servicing</title>
        <meta name="description" content="Service your car" />
      </Head>
      {loading && <Loading />}
      <div className="service servicing">
        <div className="container">
          <div className="hero ">
            <div className="overley">
              <form
                className=" col-12 col-lg-3 d-flex flex-column p-4 ml-lg-5"
                onSubmit={handleCheckService}
              >
                <span className="text-black">{vehicleMake}</span>
                <div className="heading mb-4">{mockData.hero.form.title}</div>

                <select
                  name="brand"
                  id="brand"
                  className="form-control mb-3"
                  onChange={({ target }) => setVehicleMake(target.value)}
                >
                  <option value="">Select Make</option>
                  {carMakes.map((make, index) => (
                    <option value={make} key={index}>
                      {make}
                    </option>
                  ))}
                </select>

                <select
                  name="brand"
                  id="brand"
                  className="form-control mb-3"
                  disabled={!vehicleMake}
                  onChange={({ target }) => setVehicleModel(target.value)}
                >
                  <option value="">Select Model</option>
                  {carModels.map((model, index) => (
                    <option value={model} key={index}>
                      {model}
                    </option>
                  ))}
                </select>

                <select
                  name="brand"
                  id="brand"
                  className="form-control mb-3"
                  value={vehicleFuelType}
                  onChange={({ target }) => setVehicleFuelType(target.value)}
                >
                  <option value="">Fuel Type</option>
                  <option value="diesel">Diesel</option>
                  <option value="petrol">Petrol</option>
                </select>

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="form-control mb-4"
                  value={phoneNo}
                  onChange={({ target }) => setPhoneNo(target.value)}
                />

                <button className="mt-4 d-flex">
                  {mockData.hero.form.button.text}
                </button>
              </form>
            </div>
          </div>

          {/* services section */}
          <div className="service-section pt-5">
            <h2 className="text-center font-weight-bold mb-5 text-white">
              {mockData.service.title}
            </h2>

            <div className="px-4">
              <GridBox>
                {mockData.service.items.map(({ title, image, link }, index) => (
                  <GridItem
                    className="d-flex flex-column align-items-center justify-content-center"
                    key={index}
                    onClick={() => router.push({ pathname: link })}
                  >
                    <img src={image} alt={title} className="mb-3" />
                    <h6>{title}</h6>
                  </GridItem>
                ))}
              </GridBox>
            </div>
          </div>

          {/* advantages section */}
          <div className="advantage">
            <h2 className="text-white mb-5 text-center">
              {mockData.features.title}
            </h2>
            <div className="d-flex justify-content-around mt-5 flex-column flex-lg-row">
              {mockData.features.items.map((adv, index) => (
                <div className="card mb-5 mx-auto" key={index}>
                  <div className="top d-flex flex-column align-items-center  ">
                    <div className="ing">
                      <img src={adv.image} alt="check box" className="mr-2" />
                    </div>

                    <div className="ing">
                      <img
                        src="/assets/images/service-car.svg"
                        alt="check box"
                        className="mr-2"
                      />
                    </div>
                  </div>
                  <div className="body">
                    <div className="title">{adv.title}</div>
                    <div className="content">{adv.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* remote diagnostics sections */}
          <div className="mt-5 px-5 py-5" style={{ background: "#E4E4E4" }}>
            <h2 className="text-center mb-5">{mockData.benefits.title}</h2>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <h6>Car is not starting</h6>
                <div class="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="ableToTurnKey"
                    value="yes"
                    checked={carStartStatus === "yes"}
                    onChange={({ target }) => setCarStartStatus(target.value)}
                  />

                  <label
                    className="custom-control-label"
                    htmlFor="ableToTurnKey"
                  >
                    I am able to turn the key
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="unableToTurnKey"
                    value="no"
                    checked={carStartStatus === "no"}
                    onChange={({ target }) => setCarStartStatus(target.value)}
                  />

                  <label
                    className="custom-control-label"
                    htmlFor="unableToTurnKey"
                  >
                    I am unable to turn the key
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <h6>Fluids are leaking</h6>
                <div class="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="isLeaking"
                    value="yes"
                    checked={fluidLeakageStatus === "yes"}
                    onChange={({ target }) =>
                      setFluidLeakageStatus(target.value)
                    }
                  />
                  <label className="custom-control-label" htmlFor="isLeaking">
                    Leakage observed inside the car
                  </label>
                </div>

                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="notLeaking"
                    value="no"
                    checked={fluidLeakageStatus === "no"}
                    onChange={({ target }) =>
                      setFluidLeakageStatus(target.value)
                    }
                  />
                  <label className="custom-control-label" htmlFor="notLeaking">
                    Leakage observed outside the car
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <h6>Smoke/steam is coming out of the car</h6>
                <div className="custom-control custom-radio mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="steam/smoke"
                    value="yes"
                    checked={smokeStatus === "yes"}
                    onChange={({ target }) => setSmokeStatus(target.value)}
                  />

                  <label className="custom-control-label" htmlFor="steam/smoke">
                    Steam coming from the engine
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="notLeaking"
                    value="no"
                    checked={smokeStatus === "no"}
                    onChange={({ target }) => setSmokeStatus(target.value)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlValidation2"
                  >
                    Steam coming from the exhaust
                  </label>
                </div>
              </div>

              <Button
                className="rounded mt-5 text-white"
                onClick={() =>
                  router.push({ pathname: "/service/book-a-repair" })
                }
              >
                REQUEST A CALLBACK
              </Button>
            </div>
          </div>

          {/* brands section */}
          <div className="brand container ">
            <h2 className="mb-5 text-center font-weight-bold">
              {mockData.brands.title}
            </h2>

            <div className="d-flex justify-content-center container-fluid">
              <img
                src={mockData.brands.image}
                alt="car logo"
                className="mr-2"
              />
            </div>
          </div>
        </div>

        {/* faq */}
        <div className="faq-section">
          <h2 className="text-center font-weight-bold mb-5">
            {mockData.faq.title}
          </h2>

          <div className="container bg-green  py-5 px-lg-5 d-flex flex-column flex-lg-row">
            <div className="col-lg-8">
              {mockData.faq.items.map((faq, index) => (
                <Accordion faq={faq} key={index} />
              ))}
            </div>

            <div className="col-lg-4 green text-white p-5 mb-4 d-flex flex-column">
              <p>{mockData.footer.cta.paragraph1}</p>
              <p className="mt-5 mb-5"> {mockData.footer.cta.paragraph2}</p>

              <div
                className="mt-auto d-flex align-items-center"
                style={{ background: "#444343" }}
              >
                <div>
                  <img
                    src={mockData.footer.phone.image}
                    alt="mobile call"
                    style={{ height: 46 }}
                  />
                </div>

                <div className="ml-3">{mockData.footer.phone.data}</div>
              </div>
            </div>
          </div>
        </div>

        <Security />

        <Chat />
      </div>
    </HomeLayout>
  );
};

export default Service;
