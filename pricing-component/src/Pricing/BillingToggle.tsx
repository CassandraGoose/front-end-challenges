import { useState } from "react";
import { ISliderValue } from "../interfaces";

export default function BillingToggle({ currentSliderValue }: { currentSliderValue: ISliderValue }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>
        <span className="text-3xl font-semibold text-dark-desaturated-blue">
          {checked ? `$${currentSliderValue.price * 0.75}` : `$${currentSliderValue.price}`}
        </span>{" "}
        / month
      </p>
      <label className="flex items-center justify-between w-3/4">
        <span>Monthly billing</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="sr-only peer"
        />
        <div
          className="relative w-11 h-6 bg-less-light-grayish-blue hover:bg-primary rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:bg-[white] after:border-2 after:border-less-light-grayish-blue after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
        ></div>
        <span>
          Yearly Billing
          <span className="absolute right-5 rounded-full px-1 text-[0.6rem] font-semibold bg-light-grayish-red text-light-red">
            -25%
          </span>
        </span>
      </label>
    </>
  );
}
