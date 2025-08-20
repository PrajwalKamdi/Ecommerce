import axios from "axios";
import { IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Single = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState({});

  const handleApi = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND;
    try {
      const response = await axios.get(
        `${apiUrl}getProduct/${_id}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    handleApi();
  }, [_id]);

  const handleCart = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND_CART;
    try {
      await axios.post(`${apiUrl}addToCart`, {
        productId: product._id,
        productName: product.name,
        productImage: product.image,
        productPrice: product.price,
        productDescription: product.description,
        productBrand: product.brand,
        productCategory: product.category,
        productSubCategory: product.category,
        productQuantity: 1,
      });
     toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Product is already in cart.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-10 items-center bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt="Product"
            className=" object-cover rounded-xl shadow-md "
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-blue-600 flex items-center">
            <IndianRupee size={20} className="mr-1" /> {product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Extra Info */}
          <div className="text-gray-700 space-y-1">
            <p className="font-medium">SKU: <span className="text-gray-500">{product.sku}</span></p>
            <p className="font-medium">Brand: <span className="text-gray-500">{product.brand}</span></p>
            <p className="font-medium">Category: <span className="text-gray-500">{product.category}</span></p>
            <p className="font-medium">Tags: <span className="text-gray-500">{product.tags}</span></p>
          </div>

          {/* Stock Status */}
          <p>
            {product.stock > 0 ? (
              <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-full shadow-sm">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 text-sm bg-red-500 text-white rounded-full shadow-sm">
                Out of Stock
              </span>
            )}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleCart}
              disabled={product.stock <= 0}
              className={`px-6 py-3 rounded-lg text-white font-semibold shadow-md transition ${
                product.stock > 0
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Single;
