import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getCall, postCall } from "../api/request";
import { toast, ToastContainer } from "react-nextjs-toast";
import endpoints from "../api/endPoints";
import Loading from "../components/loadingScreen";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });


const Home = (props) => {


  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleRoute = (sku) => {
    router.push({
      pathname: "/buy/car/[id]",
      query: { id: sku },
    });
  };

  useEffect(() => {
    search();
  }, []);

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
  const search = () => {
    getCall(`${endpoints.getSearch()}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        if (response.status === 200) {
          if (typeof response.data.data === "string") {
            toast.notify("No car matched your search criteria", {
              duration: 5,
              title: "Not found",
              type: "error",
            });
          } else {
            if (response.data.data.currency) delete response.data.data.currency;
            const resDataArr = Object.values(response.data.data).filter(
              (item) => item.carCategory
            );
            setCarData(Object.values(resDataArr));
          }
        } else {
          toast.notify("Oops! something went wrong. keep calm and try again.", {
            duration: 5,
            title: "An error occured",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.notify("Oops! something went wrong. keep calm and try again.", {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
console.log({carData})
 
  return (
    <>
      {loading? <Loading />:
        <div className="section3 grey-background">
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4 text-center">
                <h2 className="section3-title">FEATURED CARS</h2>
              </div>

              <div className="col-md-12 ">
                <OwlCarousel
                  className="owl-theme"
                  margin={60}
                  responsive={responsivefeatures}
                  nav={true}
                  dots={false}
                  autoplay
                  // loop
                  autoplayTimeout={5000}
                  navText={[
                    '<img src="/assets/icons/caretLeft.svg" />',
                    '<img src="/assets/icons/caretRight.svg" />',
                  ]}
                >
                  { carData.map((item, index)=>(<div className="item">
                    <div className="row btn" onClick={() => handleRoute(`${item.make}_${item.sku}`)}>
                      <div className="col-md-12">
                        <div className="featured-img h-100">
                        <img src={!item.image ? "/assets/images/carlistimg-demo@2x.png" : `https://buy.cars45.com/image/${item.image}`} className="card-img-top h-100" alt="..." />
                        </div>
                        <div className="row mt-2">
                          <div className="col-9 col-md-9">
                            <div className="price">
                              <h4>₦ {(item?.price * 1)?.toLocaleString()}</h4>
                            </div>
                          </div>
                          <div className="col-3 col-md-3">
                            <img
                              className="badge"
                              src={`/assets/icons/badge-${item.grade}.svg`}
                              alt="Badge"
                            />
                          </div>
                        </div>

                        <div className="row pulse">
                          <div className="col-9 col-md-9 car-name">
                            <h5>{item.year} {item.make}</h5>
                          </div>
                          <div className="col-3 col-md-3 text-center">
                            <div className="recent-indicator">
                              <p>NEW</p>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <img src="/assets/images/pulse.svg" alt="..." />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3 col-md-2 speedometer">
                            <img
                              src="/assets/icons/speedometer.svg"
                              alt="speedometer"
                            />
                          </div>
                          <div className="col-9 col-md-10">
                            <p className="speed">{item.mileage}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 others">
                            <p>
                            {item.sellingCondition?item.sellingCondition:"Used"}<strong>.</strong>{item.year}<strong>.</strong>
                              {item.trim}<strong>.</strong>{item.sku}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>))
    }
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>}
      <ToastContainer align={"right"} position={"bottom"} />

    </>
  );
};

export default Home;
