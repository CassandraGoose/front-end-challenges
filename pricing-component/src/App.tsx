import "./App.css";
import circlesImg from "./assets/pattern-circles.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center text-grayish-blue h-1/4">
        <h1 className="font-semibold text-2xl text-dark-desaturated-blue">Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
        <img src={circlesImg} alt="decorative circles" className="absolute -z-10" />
      </div>
      <div className="flex flex-col justify-center items-center bg-[white] rounded-lg py-4 w-5/6 shadow-xl shadow-light-grayish-blue">
        100k pageviews
        <div>slider here</div>
        <div>$16.00 / month</div>
        <div>monthly billind toggle</div>
        <hr />
        <div>
          <p>Unlimited websties</p>
          <p>100% data ownership</p>
          <p>Email reports</p>
        </div>
        <button>Start my trial</button>
      </div>
    </div>
  );
}

export default App;
