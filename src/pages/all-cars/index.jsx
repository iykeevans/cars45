import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Search from "../../components/search-car"

import Chat from "../../components/chat";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import Loading from "../../components/loadingScreen";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import InputRange from "react-input-range";
import HomeLayout from "../../components/layouts/home-layout";
import CarList from "../../components/car-list2";
import next from "next";

const Home = (props) => {
  const router = useRouter();
  useEffect(() => {
  }, []);

  const [carData, setCarData] = useState({});
  const [searchResultData, setSearchResultData] = useState(
    window?.history?.state?.options?.carData || []
  );
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ from: 0, to: 20, currentPage: 1, pages: [] })
  const responsive = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };
  const responsivefeatures = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 4,
    },
  };
  const response = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };

 
  return (
    <HomeLayout>
      {loading && <Loading />}
      <div className="home">
        <div className="jumbotron">
          <button
            className="btn btn-danger"
            onClick={() => props.history.push("/feedback")}
          >
            Feedback
          </button>
        </div>

        <Search/>

        <div className="container my-5">
          {/* <div className="row d-none d-md-flex"> */}
          <div className="row">
            {/* .slice(pagination.from, pagination.to) */}
            {searchResultData.map((car, index) => (
              <CarList car={car} />
            ))}
          </div>

          {pagination.pages.length ? <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5">
              <li className={pagination.currentPage === 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={() => prev()} tabIndex={-1} aria-disabled="true">Previous</a>
              </li>
              {pagination.pages.map(page => (
                <li className="page-item"><button className="page-link btn btn-link" href="#" key={page}>{page}</button></li>
              ))}

              <li className="page-item">
                <a className={pagination.currentPage === pagination.pages ? "page-link disabled" : "page-link"} onClick={() => next()}>Next</a>
              </li>
            </ul>
          </nav> : null}
        </div>

        <div className="section6">
          <div className="container">
            <div className="col-md-12">
              <div className="faq">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="row faq1 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img
                                src="/assets/icons/searching.svg"
                                alt="search"
                              />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row faq2 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img src="/assets/icons/naira.svg" alt="search" />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row faq3 justify-content-center">
                      <div className="col-10 col-md-10">
                        <div className="row">
                          <div className="col-3 col-md-2 align-self-center">
                            <div>
                              <img src="/assets/icons/cycle.svg" alt="search" />
                            </div>
                          </div>
                          <div className="col-9 col-md-10 align-self-center mt-3">
                            <p>ARE YOU LOOKING FOR A CAR?</p>
                            <p className="small">
                              Search our inventory with thousands of cars and
                              more cars are adding on a daily basis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 col-md-1"></div>
                    </div>
                  </div>
                </div>
                <p className="questions">
                  QUESTIONS? CALL US : <strong>+234 818 984 0160</strong>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </HomeLayout>
  );
};

export default Home;
