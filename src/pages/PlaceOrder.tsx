import { useNavigate } from "react-router-dom";
import CartTotals from "../components/CartTotals";
import Title from "../components/Title";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { cartItems, setOrders, orders } = useContext(ShopContext);

  const handlePlaceOrder = () => {
    const cartCopy = structuredClone(cartItems);
    setOrders(cartCopy);
    navigate("/orders");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div>
        <div className="text-2xl text-start py-6">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="flex flex-col gap-3">
            <input
              className="border border-slate-300 p-2 leading-6 tracking-wider"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border border-slate-300 p-2 leading-6 tracking-wider"
              type="text"
              placeholder="Street Address"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="Zipcode"
            />
            <input
              className="border border-slate-300 p-2 w-full leading-6 tracking-wider"
              type="text"
              placeholder="Country"
            />
          </div>
        </div>
      </div>

      <div className="py-6">
        <CartTotals />
        <button
          onClick={handlePlaceOrder}
          className="bg-black text-white py-4 w-80 sm:w-96"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
