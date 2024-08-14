import { useState } from "react";
import DessertList from "./DessertList";
import Cart from "./Cart";
import ConfirmationModal from "./ConfirmationModal";
import { ICartItem, IDessert } from "./interfaces";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCart(dessert: IDessert) {
    // we loop regardless, but only loop once if found so this is my vote:
    let updatedIndex = -1;
    const updatedCart = cart.map((item, i) => {
      if (item.name === dessert.name) {
        updatedIndex = i;
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });

    if (updatedIndex > -1) setCart(updatedCart);
    else
      setCart([
        ...updatedCart,
        {
          name: dessert.name,
          quantity: 1,
          price: dessert.price,
          thumbnail: dessert.image.thumbnail,
        },
      ]);
  }

  function removeFromCart(dessert: string) {
    const updatedCart = cart.filter((item) => {
      if (item.name === dessert) {
        item.quantity -= 1;
      }
      return item.quantity > 0;
    });

    setCart(updatedCart);
  }

  function initiateModal(cartTotal: number) {
    setCartTotal(cartTotal);
    setShowModal(true);
  }

  function startNewOrder() {
    setShowModal(false);
    setCart([]);
  }

  return (
    <main className="p-4 md:p-12 md:px-16 md:flex">
      <DessertList
        addToCart={addToCart}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
      <Cart
        cartItems={cart}
        removeFromCart={removeFromCart}
        initiateModal={initiateModal}
      />
      {showModal && (
        <ConfirmationModal
          startNewOrder={startNewOrder}
          cart={cart}
          cartTotal={cartTotal}
        />
      )}
    </main>
  );
}

export default App;
