import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
  const { cartTotal } = useContext(ShopContext);

  return (
    <div className="flex flex-col w-full sm:w-96">
      <div className="text-2xl text-start">
        <Title text1="CART" text2="TOTALS"></Title>
      </div>
      <div className=" flex flex-col">
        <div className="flex justify-between">
          <p className=" text-md font-medium">Subtotal</p>
          <p>
            {"Rs "}
            {cartTotal}
          </p>
        </div>
        <hr className=" bg-gray-400 my-2" />
        <div className=" flex justify-between">
          <p className=" text-md font-medium">Shipping Fee</p>
          <p>
            {"Rs "}
            {`${cartTotal ? 100 : 0}`}
          </p>
        </div>
        <hr className=" bg-gray-400 my-2" />

        <div className=" flex justify-between">
          <p className=" text-md font-bold">Total</p>
          <p>
            {"Rs "}
            {`${+cartTotal ? cartTotal + 100 : 0}`}
          </p>
        </div>
        <hr className=" bg-black my-6" />
      </div>
    </div>
  );
};

export default CartTotals;
