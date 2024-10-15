import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

interface IProducts {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string;
  date: number;
  bestseller: boolean;
}
const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState<IProducts[]>([]);
  useEffect(() => {
    const bestSeller = products
      .filter((data: IProducts) => data.bestseller)
      .slice(0, 5);
    setBestSellers(bestSeller);
  }, []);
  return (
    <div className="my-10">
      <div className=" text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS"></Title>
        <p className=" text-xs text-gray-600 flex w-3/4 m-auto  md:text-base font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          distinctio non quos in. Quia expedita exercitationem vero? Laboriosam
          ipsa repellat provident temporibus impedit numquam quos. Molestiae
          nostrum voluptatibus provident eligendi!
        </p>{" "}
      </div>
      <div className=" my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((data: IProducts, i) => {
          return (
            <ProductItem
              key={i}
              name={data.name}
              price={data.price}
              image={data.image}
              id={data._id}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
