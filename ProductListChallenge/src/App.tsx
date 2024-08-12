import { useEffect, useState } from "react";
import "./App.css";
import cartImage from "/assets/images/icon-add-to-cart.svg";
import emptyCartImage from "/assets/images/illustration-empty-cart.svg";
interface IDessert {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    tablet: string;
    mobile: string;
    desktop: string;
  };
}

function App() {
  const [desserts, setDesserts] = useState<IDessert[]>([]);

  useEffect(() => {
    const getDesserts = async () => {
      const res = await fetch("/data.json");
      if (!res.ok || res.status !== 200)
        throw new Error("Failed to fetch desserts");
      const desserts = await res.json();
      console.log("desserts", desserts);
      setDesserts(desserts);
    };

    getDesserts();
  }, []);
  return (
    <main className="p-4 md:p-12 md:px-16 md:flex">
      <div className="md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold">Desserts</h1>
        <div className="my-8 md:my-0 md:flex md:flex-wrap md:justify-between">
          {desserts.length > 0 &&
            desserts.map((dessert) => {
              return (
                <div key={dessert.name} className="mt-8 md:w-1/3 md:pr-4">
                  <div className="relative flex justify-center">
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
                    <button className="flex justify-center items-center border border-main-rose-500 rounded-full py-2 px-6 absolute bg-white -bottom-5 md:text-xs md:py-2 md:px-4">
                      <img className="mr-1 md:max-w-4" src={cartImage} alt="cart icon" />
                      Add to Cart
                    </button>
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
            })}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center md:w-1/3 md:h-min">
        <h2 className="text-2xl font-bold text-primary self-start">
          Your Cart
        </h2>
        <img
          className="py-4"
          src={emptyCartImage}
          alt="dessert icon for cart"
        />
        <p className="text-main-rose-500 pb-4">
          Your added items will appear here
        </p>
      </div>
    </main>
  );
}

export default App;
