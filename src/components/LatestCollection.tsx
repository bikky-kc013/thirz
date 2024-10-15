import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
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

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState<IProducts[]>([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className=" my-10">
      <div className=" text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS"></Title>
        <p className=" text-xs text-gray-600 flex w-3/4 m-auto  md:text-base font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          distinctio non quos in. Quia expedita exercitationem vero? Laboriosam
          ipsa repellat provident temporibus impedit numquam quos. Molestiae
          nostrum voluptatibus provident eligendi!
        </p>
      </div>
      {/* Rendering products */}
      <div className=" grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((data: IProducts, i) => {
          return (
            <ProductItem
              key={i}
              id={data._id}
              name={data.name}
              price={data.price}
              image={data.image}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollection;
