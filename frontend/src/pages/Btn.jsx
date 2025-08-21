import { Share, Share2 } from "lucide-react";
import React from "react";

const Btn = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <button className="px-4 py-4 w-full  text-gray-800 rounded-lg shadow-md hover:bg-blue-100 transition flex items-center justify-center gap-2 border border-gray-200">
        <Share2/>Share this product
      </button>
    </div>
  );
};

export default Btn;
