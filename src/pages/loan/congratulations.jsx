import React from "react";
import HomeLayout from "../../components/layouts/home-layout";

export default function LoanCongratulations() {
  return (
    <HomeLayout>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          src="/assets/images/loan/congrats.png"
          alt="congratulations"
          style={{ height: "60vh" }}
        />
        <h2 className="my-4">You loan application is being processed</h2>
        <img
          src="/assets/images/loan/congrats-car.png"
          alt="congrats car"
          className="align-self-start"
          style={{ height: "40vh" }}
        />
      </div>
    </HomeLayout>
  );
}
