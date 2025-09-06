import React from "react";
import { useLocation } from "react-router-dom";
const Orders_success = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 via-white to-blue-100 px-4 py-8">
      <div className="border-2 border-green-400 px-8 py-12 w-full max-w-md space-y-6 bg-white shadow-2xl rounded-3xl flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-4">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-extrabold text-green-700">Payment Successful</h1>
        </div>
        <p className="text-gray-700 text-lg text-center">Thank you for your payment.<br />Your transaction was successful!</p>
        {reference && (
          <div className="px-4 py-3 rounded-xl bg-green-100 border border-green-300 mt-4 w-full text-center">
            <p className="text-green-800 font-medium">
              <span className="font-semibold">Reference ID:</span> {reference}
            </p>
          </div>
        )}
        <a
          href="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow transition duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Orders_success;
