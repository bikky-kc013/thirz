import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState<any>(null);
  const [image, setImage] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [size, setSize] = useState("");
  const [sizeBg, setSizeBg] = useState("");

  useEffect(() => {
    if (productData) {
      const filteredProducts = products
        .filter((item: any) =>
          item.subCategory.includes(productData.subCategory)
        )
        .slice(0, 5);
      setRelatedProducts(filteredProducts);
    }
  }, [productData, products]);



  useEffect(() => {
    const product = products.find((item: any) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-row md:flex-col gap-1 overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img: any, i: number) => (
              <img
                onClick={() => setImage(img)}
                src={img}
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
                alt={`Product image ${i + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="Selected product"
              className="w-full h-[98%]"
            />
          </div>
        </div>

        {/* Product information */}
        <div className="flex-1 px-0 sm:px-10">
          {/* Product heading */}
          <h1 className="font-semibold tracking-normal text-gray-700 text-2xl mt-10 sm:mt-2">
            {productData.name}
          </h1>

          {/* Product rating */}
          <div className="flex items-center py-4 gap-1">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                className="h-3 w-3"
                src={assets.star_icon}
                alt="Star"
              />
            ))}
            <img
              className="h-3 w-3"
              src={assets.star_dull_icon}
              alt="Star dull"
            />
            <p className="font-medium px-2">(122)</p>
          </div>

          {/* Product price */}
          <div className="font-extrabold text-2xl py-4">
            {currency} {productData.price}
          </div>

          {/* Product description */}
          <p className="text-gray-500 text-[15px] tracking-lighter leading-5 w-[80%]">
            {productData.description}
          </p>

          {/* Product size */}
          <div className="flex flex-col pt-10 pb-6">
            <p className="text-[16px] font-medium">Select Size</p>
            <div className="flex gap-4 py-4 rounded-sm ">
              {productData.sizes.map((size: string, i: number) => (
                <div
                  onClick={() => {
                    setSize(size);
                    setSizeBg(size);
                  }}
                  key={i}
                  className={` ${
                    sizeBg === size ? "bg-gray-700 " : "bg-gray-200 "
                  }border border-gray-300 px-4 py-2 text-center cursor-pointer `}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* add to cart */}
          <div className="bg-black w-[180px] text-center hover:shadow-md  hover:shadow-gray-400">
            <button
              onClick={() => {
                addToCart(productData._id, size);
              }}
              className="px-8 py-4 text-white text-sm "
            >
              ADD TO CART
            </button>
          </div>
          <hr className=" my-8" />
          {/* policies */}
          <div className="text-sm text-gray-500 leading-6 -tracking-tight ">
            100% Original product. <br /> Cash on delivery is available on this
            product. <br /> Easy return and exchange policy within 7 days.
          </div>
        </div>
      </div>
      {/* description and reviews */}
      <div>
        <div className=" flex pt-10 text-center text-gray-700 text-sm ">
          <p className=" px-4 border-l border-t  border-gray-400 py-3 font-semibold">
            Description
          </p>
          <p className=" px-4 border-r border-t border-l border-gray-400 py-3 ">
            Reviews (122)
          </p>
        </div>
        <div className=" border border-gray-400 text-sm text-gray-600 py-10 px-8">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer. <br />
          <br />
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </div>
      </div>

      {/* related products */}
      <div className=" text-3xl  pb-8  pt-16 flex flex-col">
        <div className=" text-center pb-6">
          <Title text1="RELATED" text2="PRODUCTS"></Title>
        </div>
        <div className=" grid grid-cols-2 gap-4 sm:grid-cols-5">
          {relatedProducts.map((data: any, i: number) => {
            return (
              <ProductItem
                id={data._id}
                image={data.image}
                key={i}
                name={data.name}
                price={data.price}
              ></ProductItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
