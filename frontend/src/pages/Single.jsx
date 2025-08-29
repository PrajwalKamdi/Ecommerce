import axios from "axios";
import { IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Trust from "../components/Trust";
import Btn from "./Btn";
import Trust02 from "../components/Trust02";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ItemSkeleton from "../components/ItemSkeleton";

const Single = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const handleApi = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND;
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}getProduct/${_id}`);
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
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
  if (loading) {
    return <ItemSkeleton/>;
  }
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 min-h-screen py-6 px-2 md:px-10 lg:px-24">
      <div className="flex flex-col md:flex-row gap-8 items-stretch p-4 md:p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src={product.image}
              alt="Product"
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full mt-4 text-center md:text-left">
            <p className="text-gray-500 text-xs md:text-sm">
              Product ID: {product._id}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Category: {product.category}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between space-y-4 max-h-[80vh] overflow-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-xl md:text-2xl font-semibold text-blue-600 flex items-center">
            <IndianRupee size={20} className="mr-1" /> {product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-2 text-gray-700 text-xs md:text-sm">
            <p className="font-medium">
              SKU: <span className="text-gray-500">{product.sku}</span>
            </p>
            <p className="font-medium">
              Brand: <span className="text-gray-500">{product.brand}</span>
            </p>
            <p className="font-medium">
              Category:{" "}
              <span className="text-gray-500">{product.category}</span>
            </p>
            <p className="font-medium">
              Tags: <span className="text-gray-500">{product.tags}</span>
            </p>
          </div>

          {/* Stock Status */}
          <div>
            {product.stock > 0 ? (
              <span className="px-3 py-1 text-xs md:text-sm bg-green-500 text-white rounded-full shadow-sm">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 text-xs md:text-sm bg-red-500 text-white rounded-full shadow-sm">
                Out of Stock
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleCart}
              disabled={product.stock <= 0}
              className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold shadow-md transition ${
                product.stock > 0
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-xs md:text-sm text-gray-500 bg-gray-50 rounded-lg p-3 shadow-inner">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit esse sit eius laboriosam culpa tenetur provident in
            nam dicta, reiciendis suscipit quaerat, hic placeat repellendus
            deleniti natus ex recusandae, cupiditate expedita consectetur.
            Magnam quasi ad repellat consequuntur libero obcaecati adipisci
            veritatis aut ex dolores nostrum quaerat minima soluta atque saepe
            omnis, voluptas laboriosam praesentium, eius reprehenderit. At
            consectetur porro deleniti quisquam, inventore amet, dicta explicabo
            iusto cum est neque exercitationem sapiente consequuntur. Amet,
            accusamus temporibus quisquam ullam reprehenderit provident. Quidem
            odit cumque qui cum, assumenda, voluptatum sit accusantium,
            recusandae nihil ullam aperiam eius voluptate vel deserunt illo
            illum ut ipsam!
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <Trust />
        <Btn />
        <Trust02 />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Single;
