import { useState } from "react";
import iconSlider from "../assets/icon-slider.svg";

const sliderValues: { [key: number]: { price: number; pageViews: string; sliderValue: number } } = {
  0: {
    price: 0,
    pageViews: 'Please select amount of page views',
    sliderValue: 0,
  },
  1: {
    price: 8,
    pageViews: '10k',
    sliderValue: 20,
  },
  2: {
    price: 12,
    pageViews: '50k',
    sliderValue: 40,
  },
  3: {
    price: 16,
    pageViews: '100k',
    sliderValue: 60,
  },
  4: {
    price: 24,
    pageViews: '500k',
    sliderValue: 80,
  },
  5: {
    price: 36,
    pageViews: '1m',
    sliderValue: 100,
  },
};

export default function Slider() {
  const [sliderWidth, setSliderWidth] = useState(45);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderWidth(sliderValues[parseInt(e.target.value)].sliderValue);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        className="w-5/6 custom-slider"
        type="range"
        id="pageviews"
        name="pageviews"
        list="pageview-values"
        onChange={handleSliderChange}
        step="1"
        min="0"
        max="5"
        style={{
          background: `linear-gradient(
            to right,
            var(--left-track-color) 0%,
            var(--left-track-color) ${sliderWidth}%,
            var(--track-color) ${sliderWidth}%,
            var(--track-color) 100%
          )`
        }}
      />


      <datalist id="pageview-values">
      <option className="hidden" value="0" label="Please select amount of page views
      " disabled/>
      <option className="hidden" value="1" label="10k" />
      <option className="hidden" value="2" label="50k" />
      <option className="hidden" value="3" label="100k" />
      <option className="hidden" value="4" label="500k" />
      <option className="hidden" value="5" label="1m" />
      </datalist>
    </div>
  );
}
