import axios from "axios";
import { IndianRupee, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Total from "../components/Total";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const handleApi = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND_CART;
    console.log(apiUrl)
    try {
      setLoading(true);
      const response = await axios.get(
        `${apiUrl}/getAllFromCart`
      );
      setCartItems(response.data.products);
      setLoading(false);
      const totalPrice = response.data.products.reduce(
        (acc, item) => acc + item.productPrice * item.productQuntity,
        0
      );
      setPrice(totalPrice);
    } catch (error) {
      console.log("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/delete/${id}`);
      setCartItems((prev) => prev.filter((item) => item._id !== id));
      setPrice(
        (prev) =>
          prev -
          cartItems.find((item) => item._id === id).productPrice *
            cartItems.find((item) => item._id === id).productQuntity
      );
      toast.success("Item removed from cart successfully!");
    } catch (error) {
      toast.error("Failed to remove item from cart.");
      console.log("Error deleting item:", error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-16">
      <h1 className="text-3xl font-bold mb-8">
        Shopping <span className="text-gray-600">Cart</span>
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading cart items...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              {/* Product Image */}
              <img
                src={item.productImage}
                alt={item.productName}
                className="object-cover w-24 h-24 rounded-md border"
              />

              {/* Product Info */}
              <div className="flex-1 ml-6">
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {item.productDescription}
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  <p className="flex items-center font-medium">
                    Price: <IndianRupee size={18} className="ml-1" />{" "}
                    {item.productPrice}
                  </p>
                  <p>Qty: {item.productQuntity}</p>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item._id)}
                className="ml-6 p-3 rounded-full transition"
              >
                <Trash2 size={25}  className="hover:text-red-600 transition duration-300 ease-in  rounded-full" />
              </button>
            </div>
          ))}
        </div>
      )}
      <Total price={price} />
      
      <ToastContainer />
    </div>
  );
};

export default Cart;
