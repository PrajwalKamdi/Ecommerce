import { useState } from "react";
import { IndianRupee, Truck, CheckCircle, Clock } from "lucide-react";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD12345",
      productName: "Noise Cancelling Headphones",
      productImage:
        "https://images.unsplash.com/photo-1580894732937-97b6e13e80b9?w=400",
      productPrice: 2999,
      productDescription: "Wireless over-ear headphones with deep bass and long battery life.",
      status: "Delivered",
      deliveryDate: "Aug 25, 2025",
    },
    {
      id: "ORD67890",
      productName: "Smartphone",
      productImage:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      productPrice: 15999,
      productDescription: "6.5-inch display, 128GB storage, 48MP triple camera setup.",
      status: "Shipped",
      deliveryDate: "Expected Sep 2, 2025",
    },
    {
      id: "ORD11121",
      productName: "Casual Sneakers",
      productImage:
        "https://images.unsplash.com/photo-1528701800489-20be9c7e6c43?w=400",
      productPrice: 2499,
      productDescription: "Lightweight, comfortable sneakers for everyday wear.",
      status: "Pending",
      deliveryDate: "To be confirmed",
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="flex items-center text-green-600 font-medium">
            <CheckCircle size={18} className="mr-1" /> {status}
          </span>
        );
      case "Shipped":
        return (
          <span className="flex items-center text-blue-600 font-medium">
            <Truck size={18} className="mr-1" /> {status}
          </span>
        );
      default:
        return (
          <span className="flex items-center text-yellow-600 font-medium">
            <Clock size={18} className="mr-1" /> {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-16">
      <h1 className="text-3xl font-bold mb-8">
        Your <span className="text-gray-600">Orders</span>
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <p className="text-sm text-gray-500">Order ID: {order.id}</p>
              <p className="text-sm text-gray-500">Delivery: {order.deliveryDate}</p>
            </div>

            {/* Order Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Product Image */}
              <img
                src={order.productImage}
                alt={order.productName}
                className="object-cover w-28 h-28 rounded-md border"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{order.productName}</h2>
                <p className="text-gray-600 text-sm mb-2">{order.productDescription}</p>
                <p className="flex items-center font-medium text-gray-800">
                  <IndianRupee size={16} className="mr-1" /> {order.productPrice}
                </p>
                <div className="mt-2">{getStatusBadge(order.status)}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition">
                  Track Order
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition">
                  Buy Again
                </button>
                <button className="bg-red-100 hover:bg-red-200 text-red-600 font-medium py-2 px-4 rounded-lg transition">
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
