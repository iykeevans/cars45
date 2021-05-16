import { useEffect, useState } from "react";
import HomeLayout from "../../components/layouts/home-layout";

const mockedData = {
  pageTitle: "BUYING A USED CAR?",
  pageParagraph1:
    "Make an informed decision with an instant Vehicle History Report",
  pageParagraph2: `The 17-character VIN can be found either on the body of the vehicle or
  in its documents`,
};

export default function BuyUsedCar() {
  const [state, setState] = useState();

  useEffect(() => { }, []);

  return (
    <HomeLayout footer="two">
      <div className="hero buying-a-used-car">
        <div className="container">
          <h1 className="header">{mockedData.pageTitle} </h1>
          <p className="buy-info">{mockedData.pageParagraph1}</p>
          {/* <div className="score">
        <p className="score-check"><Mark className="score-img"/> PREVIOUS ACCIDENT</p>
        <p className="score-check"><Mark className="score-img"/> SERVICE RECORDS </p>
        <p className="score-check"><Mark className="score-img"/> MILEAGE ROLLBACK</p>
        <p className="score-check"><Mark className="score-img"/> SALVAGE VEHICLE</p>
        <p className="score-check"><Mark className="score-img"/> PREVIOUS OWNERS</p>
      </div> */}
          <div className="buying-input">
            <input />
            <button>
              <img
                src={"https://storage.googleapis.com/cars45-web-bucket/search-icon.svg"}
                className=""
                alt="search icon"
              />
            </button>
          </div>
          <p>{mockedData.pageParagraph2}</p>
        </div>
      </div>
    </HomeLayout>
  );
}
