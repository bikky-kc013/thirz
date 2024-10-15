import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const SearchBar = () => {
  const { search, showSearch, setShowSearch, setSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div
      className={` border-t border-b bg-gray-50 text-center ${
        showSearch ? "block" : "hidden"
      }`}
    >
      <div className="inline-flex  items-center justify-center border border-gray-400 px-5  py-2 my-5 mx-3 rounded-lg w-2/3  sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          name="Search"
          placeholder="Search"
          id=""
        />
        <img src={assets.search_icon} className=" w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline  w-4  cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
