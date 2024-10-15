import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotals from "../components/CartTotals";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { products, currency, cartItems, updateQuantity } =
      useContext(ShopContext);
    const [cartData, setCartData] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }, [cartItems]);
  return (
    <div className=" border-t pt-14 flex flex-col gap-4">
      <div className=" text-2xl mb-3">
        <Title text1="YOUR" text2="CART"></Title>
      </div>
      <div>
        {cartData.map((item: any, i: number) => {
          const productData = products.find(
            (product: any) => product._id === item._id
          );
          return (
            <div
              key={i}
              className="py-4 border-t  border-b text-gray-700  grid grid-cols-[4fr_0.5_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {" "}
              <div className=" flex items-start gap-6">
                <img
                  className=" w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                    <div className=" flex items-center gap-5  mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="pz-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </p>
                </div>
              </div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  if (value === "" || value === "0") {
                    return;
                  }
                  updateQuantity(item._id, item.size, +value);
                }}
                className=" border max-w-14 p-1 sm:px-2 py-1"
                type="number"
                name="qty"
                min={1}
                defaultValue={item.quantity}
                id=""
              />{" "}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <CartTotals></CartTotals>
      <button
        onClick={() => navigate("/place-order")}
        className=" bg-black text-white py-4 w-80 sm:w-96"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
