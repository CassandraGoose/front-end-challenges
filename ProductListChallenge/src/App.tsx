import { useState, useCallback } from "react";
import DessertList from "./DessertList";
import Cart from "./Cart";
import ConfirmationModal from "./ConfirmationModal";
import { ICartItem, IDessert } from "./interfaces";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  // since app will rerender so much due to the cart, i don't want these functions to be recreated every time.
  const addToCart = useCallback((dessert: IDessert) => {
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
  }, [cart]);

  const removeFromCart = useCallback((dessert: string) => {
    const updatedCart = cart.filter((item) => {
      if (item.name === dessert) {
        item.quantity -= 1;
      }
      return item.quantity > 0;
    });

    setCart(updatedCart);
  }, [cart])

  const initiateModal = useCallback((cartTotal: number) => {
    setCartTotal(cartTotal);
    setShowModal(true);
  }, []);

  const startNewOrder = useCallback(() => {
    setShowModal(false);
    setCart([]);
  }, []);

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
