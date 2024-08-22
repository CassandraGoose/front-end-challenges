import iconCheck from '../assets/icon-check.svg';

export default function SubscriptionInfoItem({ text }: { text: string }) {
  return (
    <div className="flex w-full justify-center items-center space-x-4">
      <img className="w-4 h-4" src={iconCheck} alt="checkmark" />
      <p>{text}</p>
    </div>
  );
}
