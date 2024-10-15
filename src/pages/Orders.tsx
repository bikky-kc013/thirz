import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency, orders } = useContext(ShopContext);
  const [orderData, setOrderData] = useState<any>([]);

  useEffect(() => {
    const tempData: any[] = [];

    for (const productId in orders) {
      for (const size in orders[productId]) {
        if (orders[productId][size] > 0) {
          const product = products.find((p: any) => p._id === productId);
          tempData.push({
            _id: productId,
            size: size,
            quantity: orders[productId][size],
            image: product?.image || [],
            name: product?.name || "Unknown Product",
            price: product?.price || 0,
          });
        }
      }
    }
    setOrderData(tempData);
  }, [orders, products]);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div className="space-y-8">
        {orderData.length > 0 ? (
          orderData.map((item: any, index: number) => (
            <div
              className="flex flex-row items-start space-x-4 border-b pb-4"
              key={index}
            >
              <img
                className="w-28 h-full object-cover rounded"
                src={item.image[0]}
                alt={item.name}
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Price:</span> {currency}{" "}
                  {item.price}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Quantity:</span> {item.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Size:</span> {item.size}
                </p>
                <p className="text-sm font-semibold">Payment: COD</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
