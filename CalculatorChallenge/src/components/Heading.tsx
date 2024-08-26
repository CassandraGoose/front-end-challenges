export default function Heading() {
  return (
    <div className="flex justify-between items-center">
      <h1>calc</h1>
      <div className="flex justify-between items-end space-x-2 text-xs font-medium w-5/12">
        <p className="uppercase">Theme</p>
        <div className="flex flex-col justify-center items-center w-2/3">
          <label
            htmlFor="theme-options"
            className="w-5/6 flex justify-between items-center"
          >
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </label>
          <input
            type="range"
            min="1"
            max="3"
            step="1"
            className="w-full custom-slider"
            id="theme-options"
          />
        </div>
      </div>
    </div>
  );
}
