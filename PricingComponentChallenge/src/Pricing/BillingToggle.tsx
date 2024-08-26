export default function BillingToggle({
  setYearlyBillingSelected,
  yearlyBillingSelected,
}: {
  setYearlyBillingSelected: React.Dispatch<React.SetStateAction<boolean>>;
  yearlyBillingSelected: boolean;
}) {

  return (
    <>
      <label className="w-full grid md:grid-cols-9">
        <span className="col-start-3 col-end-5 flex justify-center items-center lg:justify-end">Monthly billing</span>
        <div className="col-start-5 col-end-5 flex justify-center items-center">
          <input
            type="checkbox"
            checked={yearlyBillingSelected}
            onChange={() => setYearlyBillingSelected(!yearlyBillingSelected)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-less-light-grayish-blue hover:bg-primary rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:bg-[white] after:border-2 after:border-less-light-grayish-blue after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        </div>
        <span className="flex justify-center items-center col-start-6 col-end-8 lg:col-end-7 lg:justify-start">Yearly Billing</span>
        <div className="col-start-9 col-end-9 md:col-start-8 md:col-end-8 lg:col-start-7 lg:col-end-7 flex items-center">
          <span className="md:hidden rounded-full px-1 text-[0.6rem] font-semibold bg-light-grayish-red text-light-red">
            -25%
          </span>
          <span className="hidden md:inline rounded-full px-1 text-[0.6rem] font-semibold bg-light-grayish-red text-light-red">
            25% discount
          </span>
        </div>
      </label>
    </>
  );
}
