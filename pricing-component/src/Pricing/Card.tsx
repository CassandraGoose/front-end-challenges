import Slider from "./Slider";
import SubscriptioninfoItem from "./SubscriptionInfoItem";
import BillingToggle from './BillingToggle';
const subscriptionInfoText = ['Unlimited websites', '100% data ownership', 'Email reports'];

export default function Card() {

  return (
    <div className="flex flex-col justify-center items-center bg-[white] rounded-lg py-8 w-11/12 shadow-xl shadow-light-grayish-blue space-y-8">
      <p className="uppercase">100k pageviews</p>
      <Slider />
      <p>
        <span className="text-3xl font-semibold text-dark-desaturated-blue">
          $16.00
        </span>{" "}
        / month
      </p>
      <BillingToggle />

      <hr className="border-t border-1 border-light-grayish-blue w-full" />

      <div className="flex flex-col w-5/6 space-y-2">
        {subscriptionInfoText.map((text) => {
          return (
            <SubscriptioninfoItem key={text} text={text} />
          );
        })}
      </div>
      <button className="bg-dark-desaturated-blue rounded-full py-2 w-1/2 font-semibold text-less-light-grayish-blue">
        Start my trial
      </button>
    </div>
  );
}
