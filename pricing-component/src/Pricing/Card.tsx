import { useState } from "react";
import Slider from "./Slider";
import SubscriptioninfoItem from "./SubscriptionInfoItem";
import BillingToggle from "./BillingToggle";
import { ISliderValues, ISliderValue } from "../interfaces";

const subscriptionInfoText = [
  "Unlimited websites",
  "100% data ownership",
  "Email reports",
];

const sliderValues: ISliderValues = {
  0: {
    value: 0,
    price: 8,
    pageViews: "10k",
  },
  25: {
    value: 25,
    price: 12,
    pageViews: "50k",
  },
  50: {
    value: 50,
    price: 16,
    pageViews: "100k",
  },
  75: {
    value: 75,
    price: 24,
    pageViews: "500k",
  },
  100: {
    value: 100,
    price: 36,
    pageViews: "1m",
  },
};

export default function Card() {
  const [currentSliderValue, setCurrentSliderValue] = useState<ISliderValue>(
    sliderValues[50]
  );

  return (
    <div className="flex flex-col justify-center items-center bg-[white] rounded-lg py-8 w-11/12 shadow-xl shadow-light-grayish-blue space-y-8">
      <p className="uppercase">{currentSliderValue.pageViews} Pageviews</p>
      <Slider
        sliderWidth={currentSliderValue.value}
        sliderValues={sliderValues}
        setCurrentSliderValue={setCurrentSliderValue}
      />
      <BillingToggle currentSliderValue={currentSliderValue} />
      <hr className="border-t border-1 border-light-grayish-blue w-full" />
      <div className="flex flex-col w-5/6 space-y-2">
        {subscriptionInfoText.map((text) => {
          return <SubscriptioninfoItem key={text} text={text} />;
        })}
      </div>
      <button className="bg-dark-desaturated-blue rounded-full py-2 w-1/2 font-semibold text-less-light-grayish-blue hover:text-white">
        Start my trial
      </button>
    </div>
  );
}
