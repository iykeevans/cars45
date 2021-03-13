import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../asset/scss/hero.scss";
import Chat from "../chat";

const Hero = (props) => {
  return (
    <div class="hero" style={{background: `url(${props.bg}) no-repeat center center`}}>
      {props.children}
    </div>
  );
};

export default Hero;
