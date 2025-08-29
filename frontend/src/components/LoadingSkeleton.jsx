import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white p-4 rounded-2xl shadow-md w-full max-w-sm">
      {/* Thumbnail */}
      <div className="bg-gray-300 h-40 w-full rounded-xl mb-4"></div>

      {/* Title line */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Subtitle line */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Button placeholder */}
      <div className="h-10 bg-gray-300 rounded-lg w-24"></div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
