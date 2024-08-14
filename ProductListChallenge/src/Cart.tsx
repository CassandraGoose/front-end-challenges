import emptyCartImage from "/assets/images/illustration-empty-cart.svg";
import removeItemImage from "/assets/images/icon-remove-item.svg";
import carbonImage from "/assets/images/icon-carbon-neutral.svg";
import { ICartItem } from "./interfaces";

export default function Cart({
  cartItems,
  removeFromCart,
  initiateModal,
}: {
  cartItems: ICartItem[];
  removeFromCart: (dessert: string) => void;
  initiateModal: (cartTotal: number) => void;
}) {
  function getTotalCartLength() {
    return cartItems.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
  }

  function getTotal() {
    return cartItems.reduce((acc, item) => {
      acc += item.quantity * item.price;
      return acc;
    }, 0);
  }

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col justify-center items-center md:w-1/3 md:h-min">
      <h2 className="text-2xl font-bold text-primary self-start">
        Your Cart ({getTotalCartLength()})
      </h2>
      {cartItems.length === 0 ? (<>
        <img className="py-4" src={emptyCartImage} alt="dessert icon for cart" />
        <p className="text-main-rose-500 pb-4">
          Your added items will appear here
        </p>
      </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.name} className="w-full space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col mt-4 space-y-2">
                  <p className="font-lg font-medium">{item.name}</p>
                  <div className="flex justify-start font-sm space-x-2">
                    <p className="text-primary">{item.quantity}x</p>
                    <p className="font-lg text-main-rose-500 font-thin">
                      @{`$${item.price.toFixed(2)}`}
                    </p>
                    <p className="font-regular">
                      {(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="rounded-full border border-main-rose-300 self-center p-[2px]" onClick={() => removeFromCart(item.name)}>
                  <img src={removeItemImage} alt="remove item" />
                </button>
              </div>
              <hr className="border-none h-[1px] text-main-rose-500 bg-main-rose-100" />
            </div>
          ))}
          <div className="flex justify-between w-full py-4 items-center">
            <p>Order Total</p>
            <p className="text-xl font-bold">${getTotal().toFixed(2)}</p>
          </div>
          <div className="rounded-md bg-main-rose-100 w-full flex justify-evenly items-center p-4 mt-2">
            <img src={carbonImage} alt="carbon image" />
            <p>
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="bg-primary p-4 mt-6 mb-2 rounded-full w-full text-white active:brightness-75" onClick={() => initiateModal(getTotal())}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
