import { ISliderValue } from "../interfaces";

export default function PricePerMonth({ yearlyBillingSelected, currentSliderValue}: { yearlyBillingSelected: boolean, currentSliderValue: ISliderValue }) {
  return ( <p>
    <span className="text-3xl font-semibold text-dark-desaturated-blue">
      {yearlyBillingSelected
        ? `$${(currentSliderValue.price * 0.75).toFixed(2)}`
        : `$${(currentSliderValue.price).toFixed(2)}`}
    </span>{" "}
    / month
  </p>);
}