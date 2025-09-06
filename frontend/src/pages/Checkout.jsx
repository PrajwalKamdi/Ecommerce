import axios from "axios";
import { IndianRupee } from "lucide-react";
const Checkout = ({}) => {
  const price = localStorage.getItem("totalPrice");
  const apiUrl = import.meta.env.VITE_API_BACKEND;
  const handleSubmit = async () => {
    try {
      const { data: keyData } = await axios.get(`${apiUrl}get-key`);
      const key = keyData.key;
      const { data: orderData } = await axios.post(`${apiUrl}create-order`, {
        amount: price,
      });
      const order = orderData.order;
      const options = {
        key: key,
        amount: price,
        currency: "INR",
        name: "Test Payment",
        description: "Test Transaction",
        order_id: order.id,
        callback_url: `${apiUrl}payment-verification`,
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };
      const razor = new Razorpay(options);
      razor.open();
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("cartItems");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Delivery Information Section */}
          <div className="lg:col-span-2 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Delivery Information
            </h2>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="State"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="lg:col-span-1 bg-neutral-800 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-8">
                Order Summary
              </h3>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="text-sm">Subtotal</span>
                <span className="flex items-center text-sm font-medium">
                  <IndianRupee size={14} className="mr-1" />
                  {price}
                </span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="text-sm">Shipping</span>
                <span className="flex items-center text-sm font-medium">
                  Free
                </span>
              </div>

              <div className="w-full h-px bg-neutral-700 my-6" />

              <div className="flex justify-between items-center text-white">
                <span className="font-semibold">Total</span>
                <span className="flex items-center font-semibold text-lg">
                  <IndianRupee size={16} className="mr-1" />
                  {price}
                </span>
              </div>
            </div>

            {/* Proceed Button */}
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-neutral-900 font-medium py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
