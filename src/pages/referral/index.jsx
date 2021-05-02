import { useState, useRef, useEffect } from "react";
import { auto_slides } from "../../asset/data/service";
import HomeLayout from "../../components/layouts/home-layout";
import Link from 'next/link';
import Recommeneded from "../../components/recommended"


export default function Autopreneur() {
  const ref = useRef();
  const [state, setstate] = useState(auto_slides);
  let [currentSlide, setCurrent] = useState(0);

  const prev = () => {
    if (currentSlide === 0) {
      return setCurrent(state.length - 1);
    }
    return setCurrent((currentSlide -= 1));
  };

  const next = () => {
    if (currentSlide === state.length - 1) {
      return setCurrent(0);
    }
    return setCurrent((currentSlide += 1));
  };


  return (
    <HomeLayout footer="two" >
      <div className="autopreneneur-container">
        {state[currentSlide].element}
        <div className="autopreneneur-carousel">
          {/* <div className="autopreneneur-navigator"> */}
          <div className="left-slide navigator" onClick={prev}>
            <h1>&#x2039;</h1>
          </div>
          <div className="right-slide navigator" onClick={next}>
            <h1>&#x203A;</h1>
          </div>
          {/* </div> */}
          <div className="autopreneneur-content">
            {state[currentSlide].content}
          </div>
        </div>
        <Link href="https://autopreneur.cars45.ng/">Get started</Link>
        <div className="autopreneneur-line"></div>
        <div className="d-none d-lg-flex mt-3 pb-5 mb-5">
          <Recommeneded />

        </div>
      </div>
    </HomeLayout>
  );
}
