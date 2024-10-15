import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

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

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [filterIcon, setFilterIcon] = useState("rotate-0");
  const [filterProducts, setFilterProducts] = useState<IProducts[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("relevant");
  const { search, showSearch } = useContext(ShopContext);

  function applySearch(products: IProducts[]): IProducts[] {
    if (search && showSearch) {
      return products.filter((product) =>
        product.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return products;
  }

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((sub) => sub !== value)
        : [...prev, value]
    );
  };

  const sortProducts = (
    products: IProducts[],
    sortType: string
  ): IProducts[] => {
    const sortedProducts = [...products];
    if (sortType === "low-high") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      return sortedProducts;
    }
  };
  useEffect(() => {
    let filteredProducts = products.filter((product: IProducts) => {
      const categoryMatch =
        category.length === 0 || category.includes(product.category);
      const subCategoryMatch =
        subCategory.length === 0 || subCategory.includes(product.subCategory);
      return categoryMatch && subCategoryMatch;
    });

    filteredProducts = sortProducts(filteredProducts, sort);

    if (search.length > 0 && showSearch) {
      filteredProducts = applySearch(filterProducts);
    }
    setFilterProducts((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(filteredProducts)) {
        return filteredProducts;
      }
      return prev;
    });
  }, [category, subCategory, sort, products, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options (left side) */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setFilterIcon(
              filterIcon === "rotate-90" ? "rotate-0" : "rotate-90"
            );
          }}
          className="my-2 text-xl flex items-center cursor-pointer"
        >
          FILTERS
          <img
            className={`w-2 ml-2 sm:hidden ${filterIcon}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* CATEGORY filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            filterIcon === "rotate-0" ? "hidden" : "block"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SUBCATEGORY filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            filterIcon === "rotate-0" ? "hidden" : "block"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="BottomWear"
                onChange={toggleSubCategory}
              />
              BottomWear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Collections (right side) */}
      <div className="flex-1">
        <div className="w-full h-10 flex justify-between">
          <div className="flex">
            <p className="text-lg sm:text-2xl font-medium text-gray-500 mr-2">
              ALL
            </p>
            <p className="text-lg sm:text-2xl font-[400] text-gray-700">
              COLLECTIONS
            </p>
          </div>
          <select
            className="border-2 border-gray-300 text-sm px-2 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)} // Update sort state
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 py-4">
          {filterProducts.length > 0 ? (
            filterProducts.map((product: IProducts, i) => (
              <ProductItem
                key={i}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
