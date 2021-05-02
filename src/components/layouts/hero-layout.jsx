import React from "react";

const Hero = (props) => {
  return (
    <div
      className="hero"
      style={{ background: `url(${props.bg}) no-repeat center center` }}
    >
      {props.children}
    </div>
  );
};

export default Hero;
