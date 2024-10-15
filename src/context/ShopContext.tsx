import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext<any>(null);

const ShopContextProvider = (props: any) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [orders, setOrders] = useState({});

  const [cartItems, setCartItems] = useState<{
    [id: string]: { [size: string]: number };
  }>({});

  const getCartTotal = () => {
    let total = 0;
    Object.entries(cartItems).forEach(([id, sizes]) => {
      const product = products.find((prod) => prod._id === id);
      if (product) {
        total += Object.values(sizes).reduce(
          (sum, qty) => sum + qty * product.price,
          0
        );
      }
    });
    return total;
  };

  useEffect(() => {
    setCartTotal(getCartTotal());
  }, [cartItems]);

  const addToCart = async (id: string, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (!cartData[id]) {
      cartData[id] = {};
    }

    if (cartData[id][size]) {
      cartData[id][size] += 1;
      toast.success("Item added to cart");
    } else {
      cartData[id][size] = 1;
      toast.success("Item added to cart");
    }
    setCartItems(cartData);
  };

  const updateQuantity = async (
    itemId: string,
    size: string,
    quantity: number
  ) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0);
    }, 0);
  };

  const currency = "Rs";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    cartTotal,
    setOrders,
    orders,
  };

  return (
    <ShopContext.Provider value={value}> {props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
