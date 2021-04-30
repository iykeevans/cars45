import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import styled from "styled-components";

import Loading from "../../../components/loadingScreen";
import HomeLayout from "../../../components/layouts/home-layout";
import Socials from "../../../components/socials";
import Chat from "../../../components/chat";
import CarList from "../../../components/car-list2";

import { toast, ToastContainer } from "react-nextjs-toast";
import endpoints from "../../../api/endPoints";
import { getCall } from "../../../api/request";

const mockedData = {
  source: {
    title: "Can't find what you want",
    button: {
      text: "CLICK HERE",
    },
  },
};

const SourceBanner = styled.section`
  background: url("/assets/images/loan/cant-find-what-you-want.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
`;

const Button = styled.button`
  background: #ff9101;
  border: none;
  padding: 0.7rem 3rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: 500;
`;

const AllLoanableCars = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    searchModels();
  }, []);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = React.useState({})
  const [pagination, setPagination] = React.useState({ currentPage: 1, pages: [], limit: 50, total: 0, paginationLimit: [0, 5], count: 1 })

  const searchModels = async () => {
    try {
      setLoading(true);
      let response = await getCall(`${endpoints.getSearch({ financeable: true, start: 1 })}`)
      setLoading(false);
      if (typeof response.data.data === "string") {
        return toast.notify("No cars found", {
          duration: 5,
          title: "Not found",
          type: "error",
        });
      }
      if (response.data.data.currency) delete response.data.data.currency
      if (response.data.data.totalCars[0]) {
        let total = response.data.data.totalCars[0].total
        let pages = Math.ceil(total / pagination.limit)
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
      if (response.data.data.totalCars) delete response.data.data.totalCars
      setCars(Object.values(response.data.data));
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.notify("Oops! something went wrong. keep calm and try again.", {
        duration: 5,
        title: "An error occured",
        type: "error",
      });
    }
  }
  const next = (page) => {
    let currentPage = page ? page : pagination.currentPage + 1
    let count = pagination.count + 1
    setPagination({ ...pagination, currentPage, paginationLimit: count === 6 ? [pagination.paginationLimit[0] + 5, pagination.paginationLimit[1] + 5] : pagination.paginationLimit, count: count === 6 ? 1 : count })
    setLoading(true);
    getCall(`${endpoints.getSearch({ financeable: true, start: currentPage })}`)
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

          setCars(resDataArr)
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
      return searchModels()
    }
    let currentPage = pagination.currentPage - 1
    let count = pagination.count - 1
    setPagination({ ...pagination, currentPage, paginationLimit: count === 1 || count === 0 ? [pagination.paginationLimit[0] - 5, pagination.paginationLimit[1] - 5] : pagination.paginationLimit, count: count === 1 || count === 0 ? 5 : count })
    setLoading(true);
    getCall(`${endpoints.getSearch({ financeable: true, start: currentPage })}`)
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

          setCars(resDataArr)
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
    <HomeLayout footer="two">
      {loading && <Loading />}
      <Head>
        <title>Loan cars</title>
        <meta name="description" content="Find financeable cars" />
      </Head>
      <div className="loan">
        <div className="jumbotron">
          <div className="banner-container"></div>
          <Socials />
        </div>

        {cars.length && (
          <div className="overview">
            <Chat />

            <div className="container">
              <div className="overview-container overview-mob">
                <div className="row">
                  {cars.map((car, index) => (
                    <div className="col-12 col-md-6 col-lg-3">
                      <CarList car={car} key={index} />
                    </div>
                  ))}
                </div>
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
          </div>
        )}

        <SourceBanner className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="font-weight-bold mb-4">{mockedData.source.title}</h2>

          <Button
            className="rounded"
            onClick={() => router.push({ pathname: "/loan/source-car" })}
          >
            {mockedData.source.button.text}
          </Button>
        </SourceBanner>
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
};

export default AllLoanableCars;
