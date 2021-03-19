import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import "../../asset/scss/hero.scss";
// import Chat from "../chat";

const Hero = (props) => {
  return (
    <div classNmae="hero" style={{background: `url("/assets/icons/search.svg") no-repeat center center`}}>
      {props.children}
    </div>
  );
};

export default Hero;
