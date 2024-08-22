import Slider from "./Slider";
import SubscriptioninfoItem from "./SubscriptionInfoItem";
const subscriptionInfoText = ['Unlimited websites', '100% data ownership', 'Email reports'];

export default function Card() {

  return (
    <div className="flex flex-col justify-center items-center bg-[white] rounded-lg py-4 w-5/6 shadow-xl shadow-light-grayish-blue space-y-4">
      <p className="uppercase">100k pageviews</p>
      <Slider />
      <p>
        <span className="text-3xl font-semibold text-dark-desaturated-blue">
          $16.00
        </span>{" "}
        / month
      </p>
      <label className="flex items-center justify-between w-5/6">
        <span>monthly billing </span>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-less-light-grayish-blue rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span>
          Yearly Billing
          <span className="rounded-full p-1 text-[0.5rem] font-semibold bg-light-grayish-red text-light-red">
            -25%
          </span>
        </span>
      </label>

      <hr />
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
