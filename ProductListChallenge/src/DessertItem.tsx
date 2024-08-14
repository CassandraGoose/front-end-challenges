import { IDessert } from "./interfaces";
import AddToCartButton from "./AddToCartButton";
import IncrementDecrementItemButton from "./IncrementDecrementItemButton";

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
      <div
        className={`${
          cartQuantity > 0 && "border border-2 border-primary"
        } relative flex justify-center rounded-lg`}
      >
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
        <div className="w-[40%] lg:w-3/5 md:w-4/5 absolute -bottom-5">
          {cartQuantity > 0 ? (
            <IncrementDecrementItemButton
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              cartQuantity={cartQuantity}
              dessert={dessert}
            />
          ) : (
            <AddToCartButton dessert={dessert} addToCart={addToCart} />
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
