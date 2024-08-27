const numpadItems = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "x",
];

export default function Numpad() {
  return (
    <div className="bg-very-dark-desaturated-blue-keypad p-4 rounded-lg w-full grid grid-cols-4 grid-rows-5 gap-2 text-very-dark-grayish-blue-text lg:text-base">
      {numpadItems.map((item) => {
        return (
          <div className="z-0 relative w-full h-full">
            <p
              className={`absolute -top-[4px] ${
                item === "DEL"
                  ? "bg-desaturated-dark-blue-keys text-ssm text-white font-medium"
                  : "bg-light-grayish-orange-keys"
              } aspect-square lg:aspect-video h-full w-full flex justify-center items-center rounded-sm`}
            >
              {item}
            </p>
            <div
              className={`aspect-square lg:aspect-video ${
                item === "DEL"
                  ? "bg-desaturated-dark-blue-keys-shadow"
                  : "bg-grayish-orange-keys"
              } rounded-sm h-full`}
            ></div>
          </div>
        );
      })}
      <div className="relative col-start-1 col-end-3">
        <div className="absolute -top-[4px] w-full h-full bg-desaturated-dark-blue-keys text-white text-ssm font-medium rounded-sm flex justify-center items-center">
          RESET
        </div>
        <div className="bg-desaturated-dark-blue-keys-shadow rounded-sm h-full w-full"></div>
      </div>

      <div className="relative col-start-3 col-end-5">
        <div className="absolute -top-[4px] h-full w-full bg-red-keys text-white font-medium text-ssm rounded-sm flex justify-center items-center">
          =
        </div>
        <div className="bg-dark-red-keys rounded-sm h-full w-full"></div>
      </div>
    </div>
  );
}
