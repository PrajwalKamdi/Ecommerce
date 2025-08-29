import axios from "axios";
import { IndianRupee, Trash2, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Total from "../components/Total";
import CartSkeleton from "../components/CartSkeleton";
import emptyCart from "../assets/emptyCart.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const apiUrl = import.meta.env.VITE_API_BACKEND_CART;

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}cart`);
      const items = response.data.products || [];
      setCartItems(items);
      setPrice(
        items.reduce((acc, item) => acc + item.productPrice * item.productQuntity, 0)
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
        setPrice(updated.reduce((acc, i) => acc + i.productPrice * i.productQuntity, 0));
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
                type === "inc" ? item.productQuntity + 1 : Math.max(1, item.productQuntity - 1),
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
      cartItems.reduce((acc, item) => acc + item.productPrice * item.productQuntity, 0)
    );
  }, [cartItems]);
  if (loading) {
    return(
      <CartSkeleton/>
    )
  }
  if(cartItems.length === 0){
    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <img src={emptyCart} alt="Empty Cart" className="w-64 h-64 mb-6" />
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-16">
      <h1 className="text-3xl font-bold mb-8">
        Shopping <span className="text-gray-600">Cart</span>
      </h1>

      
        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT - Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
              >
                {/* Product Image */}
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="object-cover w-28 h-28 rounded-md border"
                />

                {/* Product Info */}
                <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {item.productDescription}
                  </p>
                  <div className="flex items-center gap-4 text-gray-700">
                    <p className="flex items-center font-medium">
                      <IndianRupee size={18} className="mr-1" /> {item.productPrice}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-3 gap-3">
                    <button
                      onClick={() => updateQuantity(item._id, "dec")}
                      className="p-2 border rounded-full hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 border rounded-md bg-gray-50">
                      {item.productQuntity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item._id, "inc")}
                      className="p-2 border rounded-full hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="ml-6 p-3 rounded-full hover:bg-red-100"
                >
                  <Trash2 size={22} className="text-gray-600 hover:text-red-600" />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT - Order Summary */}
          <div className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-700">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between text-sm">
                  <p>
                    {item.productName} × {item.productQuntity}
                  </p>
                  <p>
                    <IndianRupee size={14} className="inline" />{" "}
                    {item.productPrice * item.productQuntity}
                  </p>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <Total price={price} />
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition">
              Proceed to Buy
            </button>
          </div>
        </div>
      
      <ToastContainer />
    </div>
  );
};

export default Cart;
