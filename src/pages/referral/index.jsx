import { useState, useRef } from "react";
import { auto_slides } from "../../asset/data/service";
import Carlist from "../../components/car-list";
import HomeLayout from "../../components/layouts/home-layout"

export default HomeLayout(function Autopreneur() {
  const ref = useRef();
  const [state, setstate] = useState(auto_slides);
  let [currentSlide, setCurrent] = useState(0);
  const mock_cars = Array.from({ length: 10 }, (x) => x);

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

  const slide = (position) => {
      let left = ref.current.scrollLeft;
      switch (position) {
      case "next":
        ref.current.scroll(left+510,0);
        return;
      case "prev":
        ref.current.scroll(left-510,0);
        return;
      default:
        return;
    }
  };

  return (
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
      <button>Get started</button>
      <div className="autopreneneur-line"></div>
      <div className="autopreneneur-rec-carousel">
        <h1 onClick={() => slide("prev")}>&#x2039;</h1>
        <div className="autopreneneur-suggestion">
          <h4>Recommended Marketplace Cars For You</h4>
          <div ref={ref} className="autopreneneur-recommended">
            {mock_cars.map((item, index) => (
              <Carlist key={index} />
            ))}
          </div>
        </div>
        <h1 onClick={() => slide("next")}>&#x203A;</h1>
      </div>
    </div>
  );
}
)