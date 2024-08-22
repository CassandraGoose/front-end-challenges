import circlesImg from "../assets/pattern-circles.svg";

export default function Heading() {
  return (
    <div className="flex flex-col justify-center items-center h-1/4 gap-y-2">
      <h1 className="font-semibold text-2xl text-dark-desaturated-blue">
        Simple, traffic-based pricing
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-1">
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
      <img
        src={circlesImg}
        alt="decorative circles"
        className="absolute -z-10"
      />
    </div>
  );
}
