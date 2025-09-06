import axios from "axios";
import { IndianRupee, Minus, Plus, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emptyCart from "../assets/emptyCart.png";
import CartSkeleton from "../components/CartSkeleton";
import Total from "../components/Total";
import { Mycontext } from "../store/Store";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems, setCartItems, price, setPrice } = useContext(Mycontext);
  const apiUrl = import.meta.env.VITE_API_BACKEND_CART;

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}cart`);
      const items = response.data.products || [];
      setCartItems(items);
      setPrice(
        items.reduce(
          (acc, item) => acc + item.productPrice * item.productQuntity,
          0
        )
      );
    } catch (error) {
      console.error("Error fetching cart items:", error);
      toast.error("Failed to load cart items.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}delete/${id}`);
      setCartItems((prev) => {
        const updated = prev.filter((item) => item._id !== id);
        setPrice(
          updated.reduce((acc, i) => acc + i.productPrice * i.productQuntity, 0)
        );
        return updated;
      });
      toast.success("Item removed from cart!");
    } catch (error) {
      toast.error("Failed to remove item.");
      console.error("Error deleting item:", error);
    }
  };

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              productQuntity:
                type === "inc"
                  ? item.productQuntity + 1
                  : Math.max(1, item.productQuntity - 1),
            }
          : item
      )
    );
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    setPrice(
      cartItems.reduce(
        (acc, item) => acc + item.productPrice * item.productQuntity,
        0
      )
    );
  }, [cartItems]);

  if (loading) return <CartSkeleton />;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-3">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-5 text-sm">
          Looks like you haven't added anything yet.
        </p>
        <img src={emptyCart} alt="Empty Cart" className="w-48 h-48 mb-5" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-10">
      <h1 className="text-2xl font-bold mb-6">
        Shopping <span className="text-gray-600">Cart</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT - Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4 hover:shadow-md transition"
            >
              {/* Product Image */}
              <img
                src={item.productImage}
                alt={item.productName}
                className="object-cover w-24 h-24 rounded border"
              />

              {/* Product Info */}
              <div className="flex-1 md:ml-4 mt-3 md:mt-0">
                <h2 className="text-base font-semibold">{item.productName}</h2>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {item.productDescription}
                </p>
                <div className="flex items-center gap-3 text-gray-700 text-sm">
                  <p className="flex items-center font-medium">
                    <IndianRupee size={16} className="mr-1" />{" "}
                    {item.productPrice}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => updateQuantity(item._id, "dec")}
                    className="p-1.5 border rounded hover:bg-gray-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-0.5 border rounded bg-gray-50 text-sm">
                    {item.productQuntity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item._id, "inc")}
                    className="p-1.5 border rounded hover:bg-gray-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item._id)}
                className="ml-4 p-2 rounded-full hover:bg-red-100"
              >
                <Trash2
                  size={20}
                  className="text-gray-600 hover:text-red-600"
                />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT - Order Summary */}
        <div className="bg-white shadow rounded-lg p-5 h-fit sticky top-16">
          <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
          <div className="space-y-1 text-gray-700 text-sm">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between">
                <p>
                  {item.productName} × {item.productQuntity}
                </p>
                <p>
                  <IndianRupee size={12} className="inline" />{" "}
                  {item.productPrice * item.productQuntity}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-3" />
          <Total price={price} />
          
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Cart;
