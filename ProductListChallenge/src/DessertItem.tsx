import cartImage from "/assets/images/icon-add-to-cart.svg";
import decrementQuantityImage from "/assets/images/icon-decrement-quantity.svg";
import incrementQuantityImage from "/assets/images/icon-increment-quantity.svg";
import { IDessert } from "./interfaces";

export default function DessertItem({
  dessert,
  addToCart,
  cartQuantity,
  removeFromCart,
}: {
  dessert: IDessert;
  addToCart: (dessert: IDessert) => void;
  removeFromCart: (dessert: string) => void;
  cartQuantity: number;
}) {
  return (
    <div className="mt-8 md:w-1/3 md:pr-4">
      <div className={`${cartQuantity > 0 && 'border border-2 border-primary'} relative flex justify-center rounded-lg`}>
        <img
          className="md:hidden w-full h-auto rounded-lg"
          src={dessert.image.mobile}
          alt={dessert.name}
        />
        <img
          className="md:inline hidden h-auto rounded-lg aspect-square object-cover"
          src={dessert.image.desktop}
          alt={dessert.name}
        />
        <div className="w-[40%] lg:w-3/5 md: w-4/5 absolute -bottom-5">
          {cartQuantity > 0 ? (
            <div className="w-full flex justify-between items-center bg-primary text-white rounded-full p-2">
              <button className="rounded-full border border-white self-center p-[2px] aspect-square flex justify-center items-center" onClick={() => removeFromCart(dessert.name)}>
                <img src={decrementQuantityImage} alt="decrease item in cart" />
              </button>
              {cartQuantity}
              <button className="rounded-full border border-white self-center p-[2px]" onClick={() => addToCart(dessert)}>
                <img src={incrementQuantityImage} alt="increase item in cart" />
              </button>
            </div>
          ) : (
            <button
              className="w-full flex justify-evenly items-center bg-white border border-main-rose-500 rounded-full md:text-xs lg:text-sm p-2"
              onClick={() => addToCart(dessert)}
            >
              <img className="md:max-w-4" src={cartImage} alt="cart icon" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="pt-8 space-y-1">
        <p className="text-sm font-extralight text-main-rose-500">
          {dessert.category}
        </p>
        <p className="font-lg font-medium">{dessert.name}</p>
        <p className="font-lg text-primary font-medium">{`$${dessert.price.toFixed(
          2
        )}`}</p>
      </div>
    </div>
  );
}
