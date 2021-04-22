import React from "react";
import { useRouter } from "next/router";


const Carlist = ({ car }) => {

  const router = useRouter();
  const handleRoute = (sku) => {
    router.push({
      pathname: "/buy/car/[id]",
      query: { id: sku },
    });
  };
  return (
    <div className="listing mt-5">
      <div
        className="card"
        onClick={() => handleRoute(`${car.make}_${car.sku}`)}
      >
        <img src={!car.image ? "/assets/images/carlistimg-demo@2x.png" : `https://buy.cars45.com/image/${car.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="row border-bottom">
            <div className="col-8 col-md-8">
              <p>
                {car.year} {car.make} {car.model}
              </p>
            </div>
            <div className="col-4 col-md-4 text-right">
              {car.grade && <img
                className="inspection-badge"
                src={`/assets/icons/badge-${car.grade.toLowerCase()}.svg`}
                alt={car.grade}
              />}
            </div>
          </div>
          <div className="row condition text-center">
            <div className="col-5 col-md-5 text-center pr-0">
              <div className={car?.sellingCondition === 'nigerian used' ? "nigeria" : 'foreign'}>
                <p>{car.sellingCondition ? car.sellingCondition : "Foreign Used"}</p>
              </div>
            </div>
            <div className="col-2 col-md-2">
              <div className="vertical-line" />
            </div>
            <div className="col-5 col-md-5 text-center pl-0">
              {car?.carCategory && <div className={car?.carCategory === 'C45-Direct' ? 'direct' : "market"}>
                <p>{car?.carCategory}</p>
              </div>}
              {/* <div className="direct">
                                                <p>Car45-Direct</p>
                                            </div> */}
              {/* <div className="market">
                                                <p>Car-45 Marketplace</p>
                                            </div> */}
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12">
              <p className="price">₦ {(car?.price * 1)?.toLocaleString()}</p>
              <p className="mile">
                <small>Mileage: </small>
                {car.mileage}
              </p>
              <p className="year">
                <small>Year: </small>
                {car.year}
              </p>
              <p className="id">
                <small>Car ID </small>
                {car.sku}
              </p>
            </div>
          </div>
          {car?.financeable ? <img
            src="/assets/icons/car-badge.svg"
            className="car-badge"
            alt="car-badge"
          /> : null}
        </div>
      </div>
    </div>
  );
};

export default Carlist;
