import React from "react";


const Hero = (props) => {
  return (
    <div class="hero" style={{background: `url(${props.bg}) no-repeat center center`}}>
      {props.children}
    </div>
  );
};

export default Hero;
