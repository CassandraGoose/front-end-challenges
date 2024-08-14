import cartImage from "/assets/images/icon-add-to-cart.svg";
import { IDessert } from "./interfaces";

export default function AddToCartButton({
  dessert,
  addToCart,
}: {
  dessert: IDessert;
  addToCart: (dessert: IDessert) => void;
}) {
  return (
    <button
      className="w-full flex justify-evenly items-center bg-white border border-main-rose-500 rounded-full md:text-xs lg:text-sm p-2 active:border active:border-primary active:border-2"
      onClick={() => addToCart(dessert)}
    >
      <img className="md:max-w-4" src={cartImage} alt="cart icon" />
      Add to Cart
    </button>
  );
}
