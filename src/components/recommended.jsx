import { useState, useRef, useEffect } from "react";
import Carlist from "./car-list2";
import { getCall, postCall } from "../api/request";
import endpoints from "../api/endPoints";
import Loading from "./loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";

const mockedData = {
  title: "Recommended Marketplace Cars For You",
};

export default function Autopreneur() {
  const ref = useRef();
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search();
  }, []);

  const slide = (position) => {
    let left = ref.current.scrollLeft;
    switch (position) {
      case "next":
        ref.current.scroll(left + 510, 0);
        return;
      case "prev":
        ref.current.scroll(left - 510, 0);
        return;
      default:
        return;
    }
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
              (item) =>
                (item.grade === "A" ||
                  item.grade === "B" ||
                  item.grade === "C") &&
                item.carCategory
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

  return (
    <>
      {loading && <Loading />}
      <div className="autopreneneur-rec-carousel">
        <h1 onClick={() => slide("prev")}>&#x2039;</h1>
        <div className="autopreneneur-suggestion">
          <h4>{mockedData.title}</h4>
          <div ref={ref} className="autopreneneur-recommended">
            {carData.map((item, index) => (
              <div className="mr-2 mr-md-0 ml-md-0 ml-2">
                <Carlist key={index} car={item} />
              </div>

            ))}
          </div>
        </div>
        <h1 onClick={() => slide("next")}>&#x203A;</h1>
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </>
  );
}
