import iconCheck from "../assets/icon-check.svg";

export default function SubscriptionInfoItem({ text }: { text: string }) {
  return (
    <div className="flex w-full justify-center md:justify-start items-center space-x-4">
      <img src={iconCheck} alt="checkmark" />
      <p>{text}</p>
    </div>
  );
}
