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
import { toast, ToastContainer } from "react-nextjs-toast";

const AllCars = (props) => {
  const router = useRouter();
  const [page, setPage] = useState(typeof window !== "undefined" ? window?.history?.state?.options?.pagination : {})

  useEffect(() => {
    if (page?.total) getPagination()
  }, [page]);

  const [carData, setCarData] = useState({});
  const [searchParams, setSearchParams] = useState(typeof window !== "undefined" ? window?.history?.state?.options?.searchParams : {})
  const [searchResultData, setSearchResultData] = useState(
    typeof window !== "undefined" ? window?.history?.state?.options?.carData : []
  );
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ currentPage: 1, pages: [], limit: 50, total: 0, paginationLimit: [0, 5], count: 1 })


  const getPagination = () => {
    console.log('getting parameters')
    if (page.total) {
      let total = page.total
      let pages = Math.ceil(total / pagination.limit)
      console.log(pages)
      let pageNumber = []
      let count = 0
      for (let i = 1; i <= pages; i++) {
        pageNumber = [...pageNumber, i]
        count += 1
        if (count === pages) {
          setPagination({ ...pagination, pages: pageNumber, total: pages })
        }
      }
    }

    // let carData = window?.history?.state?.options?.carData
    // let pages = Math.ceil(carData?.length / pagination.limit)
    // let total = pages
    // let pageData = []
    // let count = 0
    // for (let i = 1; i <= pages; i++) {
    //   pageData = [...pageData, i]
    //   count += 1
    //   if (count === pages) {
    //     setPagination({ ...pagination, pages: pageData, total })
    //   }
    // }
  }
  const getSearchParams = (search) => {
    setSearchParams(search)
  }

  const resetSearch = () => {
    console.log('resetting')
    setLoading(true);
    getCall(`${endpoints.getSearch({ ...searchParams, start: 1 })}`)
      .then((response) => {
        const resData = response.data.data;
        setLoading(false);
        if (response.status === 200) {
          if (resData === "No cars in our repository fits your filter.") {
            return toast.notify("No cars in our repository fits your filter.", {
              duration: 5,
              title: "Success",
              type: "warning",
            });
          }
          const resDataArr = Object.values(resData).filter(
            (item) => item.status
          );
          if (resDataArr.length < 1) {
            return toast.notify(
              "No Available cars in our repository fits your filter.",
              {
                duration: 5,
                title: "Success",
                type: "warning",
              }
            );
          }
          if (resData.totalCars[0]) {
            let total = resData.totalCars[0].total
            let pages = Math.ceil(total / pagination.limit)
            console.log(pages)
            let pageNumber = []
            let count = 0
            for (let i = 1; i <= pages; i++) {
              pageNumber = [...pageNumber, i]
              count += 1
              if (count === pages) {
                setPagination({ ...pagination, currentPage: 1, paginationLimit: [0, 5], count: 1, pages: pageNumber, total: pages })
              }
            }
          }
          setSearchResultData(resDataArr)
        } else {
          setLoading(false);
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
        toast.notify("No Available cars in our repository fits your filter.", {
          duration: 5,
          title: "Success",
          type: "error",
        });
      });
  }

  const next = (page) => {
    let currentPage = page ? page : pagination.currentPage + 1
    let count = pagination.count + 1
    setPagination({ ...pagination, currentPage, paginationLimit: count === 6 ? [pagination.paginationLimit[0] + 5, pagination.paginationLimit[1] + 5] : pagination.paginationLimit, count: count === 6 ? 1 : count })
    setLoading(true);
    getCall(`${endpoints.getSearch({ ...searchParams, start: currentPage })}`)
      .then((response) => {
        const resData = response.data.data;

        setLoading(false);
        if (response.status === 200) {
          if (resData === "No cars in our repository fits your filter.") {
            return toast.notify("No cars in our repository fits your filter.", {
              duration: 5,
              title: "Success",
              type: "warning",
            });
          }
          const resDataArr = Object.values(resData).filter(
            (item) => item.status
          );
          if (resDataArr.length < 1) {
            return toast.notify(
              "No Available cars in our repository fits your filter.",
              {
                duration: 5,
                title: "Success",
                type: "warning",
              }
            );
          }

          setSearchResultData(resDataArr)
        } else {
          setLoading(false);
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        toast.notify("No Available cars in our repository fits your filter.", {
          duration: 5,
          title: "Success",
          type: "error",
        });
      });
  }
  const prev = () => {
    if (pagination.currentPage === 2) {
      console.log(pagination.currentPage)
      return resetSearch()
    }
    let currentPage = pagination.currentPage - 1
    let count = pagination.count - 1
    setPagination({ ...pagination, currentPage, paginationLimit: count === 1 || count === 0 ? [pagination.paginationLimit[0] - 5, pagination.paginationLimit[1] - 5] : pagination.paginationLimit, count: count === 1 || count === 0 ? 5 : count })
    setLoading(true);
    getCall(`${endpoints.getSearch({ ...searchParams, start: currentPage })}`)
      .then((response) => {
        const resData = response.data.data;

        setLoading(false);
        if (response.status === 200) {
          if (resData === "No cars in our repository fits your filter.") {
            return toast.notify("No cars in our repository fits your filter.", {
              duration: 5,
              title: "Success",
              type: "warning",
            });
          }
          const resDataArr = Object.values(resData).filter(
            (item) => item.status
          );
          if (resDataArr.length < 1) {
            return toast.notify(
              "No Available cars in our repository fits your filter.",
              {
                duration: 5,
                title: "Success",
                type: "warning",
              }
            );
          }

          setSearchResultData(resDataArr)
        } else {
          setLoading(false);
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "Something when wrong",
            type: "warning",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        toast.notify("No Available cars in our repository fits your filter.", {
          duration: 5,
          title: "Success",
          type: "error",
        });
      });
  }
  return (
    <HomeLayout>
      {loading && <Loading />}
      <div className="home">
        <div className="jumbotron">
          <button
            className="btn btn-danger"
            onClick={() => router.push("/feedback")}
          >
            Feedback
          </button>
        </div>

        <Search setSearchResultData={setSearchResultData} getSearchParams={getSearchParams} setPage={setPage} />

        <div className="container my-5">
          {/* <div className="row d-none d-md-flex"> */}
          <div className="row">

            {searchResultData?.map((car, index) => (
              <div className="col-lg-3">
                <CarList car={car} key={index} />
              </div>
            ))}


          </div>

          {pagination.pages.length ? <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5">
              <li className={pagination.currentPage === 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={() => prev()} tabIndex={-1} aria-disabled="true">Previous</a>
              </li>
              {pagination.pages.slice(pagination.paginationLimit[0], pagination.paginationLimit[1]).map(page => (
                <li key={page} className={page === pagination.currentPage ? "page-item active" : "page-item"}><button className="page-link btn btn-link" href="#" key={page}>{page}</button></li>
              ))}
              {pagination.currentPage !== pagination.total ? <li className="page-item"><button className="page-link btn btn-link" href="#">...</button></li> : null}

              <li className={pagination.currentPage >= pagination.total ? "page-item disabled" : "page-item"}>
                <a className={"page-link"} onClick={() => next()}>Next</a>
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
      <ToastContainer align={"right"} position={"bottom"} />

    </HomeLayout>
  );
};

export default AllCars;
