import { useEffect, useState } from "react";
import HomeLayout from "../../components/layouts/home-layout"


export default function BuyUsedCar() {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <HomeLayout footer="two" >
    <div className="hero buying-a-used-car">
      <div className="container">
      <h1 className="header">BUYING A USED CAR? </h1>
      <p className="buy-info">Make an informed decision with an instant Vehicle History Report</p>
      {/* <div className="score">
        <p className="score-check"><Mark className="score-img"/> PREVIOUS ACCIDENT</p>
        <p className="score-check"><Mark className="score-img"/> SERVICE RECORDS </p>
        <p className="score-check"><Mark className="score-img"/> MILEAGE ROLLBACK</p>
        <p className="score-check"><Mark className="score-img"/> SALVAGE VEHICLE</p>
        <p className="score-check"><Mark className="score-img"/> PREVIOUS OWNERS</p>
      </div> */}
      <div className="buying-input">
        <input />
        <button><img src={"/asset/icons/search-icon.svg"} className="" alt="search icon"/></button>
      </div>
      <p>
        The 17-character VIN can be found either on the body of the vehicle or
        in its documents
      </p>
      </div>
    </div>
    </HomeLayout>
  );
}
