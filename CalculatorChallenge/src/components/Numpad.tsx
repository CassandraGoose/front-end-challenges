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
    <div className="bg-very-dark-desaturated-blue w-full grid grid-cols-4 grid-rows-5 gap-2 text-very-dark-grayish-blue-text">
      {numpadItems.map((item) => {
        return (
          <div className="z-0 relative w-full h-full">
            <div className="absolute -top-[4px] bg-light-grayish-orange-keys aspect-square h-full w-full flex justify-center items-center rounded-sm">
              {item}
            </div>
            <div className=" aspect-square bg-grayish-orange-keys rounded-sm h-full"></div>
          </div>
        );
      })}
      <div className="col-start-1 col-end-3 bg-desaturated-dark-blue-keys rounded-sm flex justify-center items-center">
        RESET
      </div>
      <div className="col-start-3 col-end-5 bg-red-keys rounded-sm flex justify-center items-center">
        =
      </div>
    </div>
  );
}
