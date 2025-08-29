import React from "react";

const ItemSkeleton= () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-20 p-4 animate-pulse min-h-screen md:px-20 py-10 border border-gray-200 rounded-2xl shadow-lg bg-white">
      {/* Left Side - Image Skeleton */}
      <div className="md:w-1/2 flex h-[200px] md:h-[450px] rounded-xl bg-gray-100"></div>

      {/* Right Side - Info Skeleton */}
      <div className="flex flex-col w-2/3">
        {/* Product Name */}
        <div className="h-16 bg-gray-200 rounded w-1/2 mb-4 py-4 text-2xl"></div>
        
        {/* Price */}
        <div className="h-10 bg-gray-200 rounded w-1/4 mb-4"></div>
        
        {/* Description */}
        <div className="space-y-3 h-56 bg-gray-200">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Button / CTA */}
        <div className="mt-6 h-1/8 bg-gray-200 rounded w-full">
        </div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
