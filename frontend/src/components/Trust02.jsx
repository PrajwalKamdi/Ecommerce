import { Shield, Star, Truck } from "lucide-react";
import React from "react";

const Trust02 = () => {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Why Choose Our Products?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fast Shipping
          </h3>
          <p className="text-gray-600 text-sm">
            Get your order delivered within 2-3 business days with our express
            shipping service.
          </p>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Warranty</h3>
          <p className="text-gray-600 text-sm">
            Comes with 1-year manufacturer warranty covering all defects and
            malfunctions.
          </p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="text-white" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Premium Quality
          </h3>
          <p className="text-gray-600 text-sm">
            Made with high-quality materials and tested for durability and
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust02;
