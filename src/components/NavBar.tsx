import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { search, setSearch, showSearch, setShowSearch, getCartCount } =
    useContext(ShopContext);

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileMenu) {
        setProfileMenu(false);
      }
    };
    if (profileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenu]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/collection") {
      setShowSearch(false);
    }
  }, [location.pathname, setShowSearch]);

  return (
    <div className=" flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className=" w-24" alt="" />
      <ul className="hidden sm:flex  gap-5 text-sm text-gray-700">
        <NavLink to="/" className=" flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4  border-black h-1.5px hidden" />
        </NavLink>
        <NavLink to="/collection" className=" flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  border-black h-1.5px hidden" />
        </NavLink>{" "}
        <NavLink to="/about" className=" flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4  border-black h-1.5px hidden" />
        </NavLink>{" "}
        <NavLink to="/contact" className=" flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4  border-black h-1.5px hidden" />
        </NavLink>
      </ul>
      <div className=" flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search"
        />
        <div className=" group relative">
          <Link to={"/login"}>
            {" "}
            <img
              onClick={() => {
                setProfileMenu(!profileMenu);
              }}
              className=" w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile"
            />
          </Link>
          <div
            className={` group-hover:block ${
              profileMenu ? "block" : "hidden"
            } absolute dropdown-menu right-0 top-8`}
          >
            <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg   ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className=" relative ">
          {" "}
          <img className=" w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-8px] top-2 font-bold text-white bg-black h-[18px] w-[18px] text-xs rounded-[50%] flex items-center justify-center">
            {`${getCartCount()}`}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className=" sm:hidden h-5 w-5 min-w-5  cursor-pointer "
          src={assets.menu_icon}
          alt=""
        />
      </div>
      {/* Sidebar menu for the small screens */}
      <div
        className={`absolute bottom-0 top-0 right-0 bg-white transition-transform duration-300 overflow-hidden  ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex  items-center gap-4  p-3 cursor-pointer">
          <img
            className=" h-4 rotate-180 "
            onClick={() => setVisible(false)}
            src={assets.dropdown_icon}
            alt=""
          />
          Back
        </div>
        <div className=" flex flex-col font-light ">
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border "
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border "
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border "
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
