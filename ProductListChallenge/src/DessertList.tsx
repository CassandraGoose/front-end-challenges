import { useEffect, useState } from "react";
import DessertItem from "./DessertItem";
import { IDessert, ICartItem } from "./interfaces";

export default function DessertList({
  addToCart,
  cartItems,
  removeFromCart,
}: {
  addToCart: (dessert: IDessert) => void;
  cartItems: ICartItem[];
  removeFromCart: (dessert: string) => void;
}) {
  const [desserts, setDesserts] = useState<IDessert[]>([]);

  // IRL, I'd want to use something like Tanstack-query to get free caching, background updates, etc. 
  // it's free real estate.
  useEffect(() => {
    const getDesserts = async () => {
      const res = await fetch("/data.json");
      if (!res.ok || res.status !== 200)
        throw new Error("Failed to fetch desserts");
      const desserts = await res.json();
      setDesserts(desserts);
    };

    getDesserts();
  }, []);

  function getItemCartQuantity(dessert: IDessert) {
    const item = cartItems.find((item) => item.name === dessert.name);
    return item ? item.quantity : 0;
  }

  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl md:text-4xl font-bold">Desserts</h1>
      <div className="my-8 md:my-0 md:flex md:flex-wrap md:justify-between">
        {desserts.length > 0 &&
          desserts.map((dessert) => {
            return (
              <DessertItem
                key={dessert.name}
                dessert={dessert}
                cartQuantity={getItemCartQuantity(dessert)}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
      </div>
    </div>
  );
}
