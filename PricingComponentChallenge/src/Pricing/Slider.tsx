import { useState } from "react";
import { ISliderValue, ISliderValues } from "../interfaces";

export default function Slider({
  sliderValues,
  setCurrentSliderValue,
  sliderWidth,
}: {
  sliderValues: ISliderValues;
  setCurrentSliderValue: React.Dispatch<React.SetStateAction<ISliderValue>>;
  sliderWidth: number;
}) {
  const [mouseDownThumb, setMouseDownThumb] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSliderValue = sliderValues[parseInt(e.target.value)];
    setCurrentSliderValue(currentSliderValue);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        className={`w-5/6 custom-slider ${mouseDownThumb ? "thumbActive" : ""}`}
        type="range"
        id="pageviews"
        name="pageviews"
        list="pageview-values"
        onChange={handleSliderChange}
        onMouseDown={() => setMouseDownThumb(true)}
        onMouseUp={() => setMouseDownThumb(false)}
        step="25"
        min="0"
        max="100"
        style={{
          background: `linear-gradient(
            to right,
            var(--left-track-color) 0%,
            var(--left-track-color) ${sliderWidth}%,
            var(--track-color) ${sliderWidth}%,
            var(--track-color) 100%
          )`,
        }}
      />

      <datalist id="pageview-values">
        <option className="hidden" value="0" label="10k" />
        <option className="hidden" value="25" label="50k" />
        <option className="hidden" value="50" label="100k" />
        <option className="hidden" value="75" label="500k" />
        <option className="hidden" value="100" label="1m" />
      </datalist>
    </div>
  );
}
