import orderConfirmedImage from "/assets/images/icon-order-confirmed.svg";
import { ICartItem } from "./interfaces";

export default function ConfirmationModal({
  startNewOrder,
  cart,
  cartTotal,
}: {
  startNewOrder: () => void;
  cart: ICartItem[];
  cartTotal: number;
}) {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      className="fixed bottom-0 md:top-0 right-0 w-full h-full flex md:justify-center md:items-center items-end"
    >
      <div className="relative flex flex-col bg-white md:rounded-lg rounded-t-lg p-6 space-y-4">
        <img
          className="self-start w-1/12"
          src={orderConfirmedImage}
          alt="order confirmed"
        />
        <h3 className="text-3xl md:text-4xl font-bold">Order Confirmed</h3>
        <p className="text-xs text-main-rose-300">
          We hope you enjoy your food!
        </p>
        <div className="bg-main-rose-100 py-4 px-6 rounded-lg text-sm">
          {cart.map((item) => {
            return (
              <div key={item.name} className="w-full space-y-4">
                <div className="flex justify-between items-center my-2">
                  <div className="flex space-x-4">
                    <img
                      className="rounded-lg w-auto h-16"
                      src={item.thumbnail}
                      alt={item.name}
                    />
                    <div className="flex flex-col space-y-2">
                      <p className="font-lg font-medium">{item.name}</p>
                      <div className="flex justify-start font-sm space-x-2">
                        <p className="text-primary font-medium">
                          {item.quantity}x
                        </p>
                        <p className="font-lg text-main-rose-500 font-thin ">
                          @{`$${item.price.toFixed(2)}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-regular font-medium ml-16">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
                <hr className="border-none h-[1px] text-main-rose-500 bg-main-rose-100 brightness-95" />
              </div>
            );
          })}
          <div className="flex justify-between items-center w-full pt-4">
            <p className="text-sm text-main-rose-500">Order Total</p>
            <p className="text-lg font-bold">${cartTotal.toFixed(2)}</p>
          </div>
        </div>
        <button
          className="bg-primary p-4 mt-6 mb-2 rounded-full w-full text-white active:brightness-75"
          onClick={() => startNewOrder()}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
