import decrementQuantityImage from "/assets/images/icon-decrement-quantity.svg";
import incrementQuantityImage from "/assets/images/icon-increment-quantity.svg";
import { IDessert } from "./interfaces";

export default function IncrementDecrementItemButton({
  addToCart,
  removeFromCart,
  dessert,
  cartQuantity,
}: {
  addToCart: (dessert: IDessert) => void;
  removeFromCart: (dessert: string) => void;
  dessert: IDessert;
  cartQuantity: number;
}) {
  return (
    <div className="w-full flex justify-between items-center bg-primary text-white rounded-full p-2">
      <button
        className="rounded-full border border-white bg-primary self-center p-[2px] aspect-square flex justify-center items-center active:invert active:mix-blend-plus-lighter active:border-primary"
        onClick={() => removeFromCart(dessert.name)}
      >
        <img src={decrementQuantityImage} alt="decrement quantity" />
      </button>
      {cartQuantity}
      <button
        className="rounded-full border border-white bg-primary self-center p-[2px] active:invert active:mix-blend-plus-lighter active:border-primary"
        onClick={() => addToCart(dessert)}
      >
        <img src={incrementQuantityImage} alt="increment quantity" />
      </button>
    </div>
  );
}
