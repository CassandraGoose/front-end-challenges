import { useState } from "react";
import iconSlider from "../assets/icon-slider.svg";

export default function Slider() {
  const [sliderWidth, setSliderWidth] = useState(45);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative bg-primary w-5/6 rounded-full h-2 flex items-center justify-center">
        <div
          className="absolute bg-secondary rounded-full h-2 left-0"
          style={{ width: `${sliderWidth}%` }}
        ></div>
        <div
          style={{ left: `${sliderWidth}%`, transform: "translateX(-50%)" }}
          className="absolute w-10 aspect-square bg-secondary rounded-full flex justify-center items-center shadow-primary shadow-xl"
        >
          <img src={iconSlider} alt="left and right arrows" />
        </div>
      </div>
    </div>
  );
}
