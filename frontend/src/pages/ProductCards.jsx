import axios from "axios";
import { Eye, Heart, Loader2, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND;
    try {
      const response = await axios.get(`${apiUrl}products`);
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        {/* <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Our Products
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing products carefully selected just for you
          </p>
          <div className="mt-2 md:mt-4 text-xs sm:text-sm text-gray-500">
            {products.length} {products.length === 1 ? "product" : "products"} available
          </div>
        </div> */}

        {/* PRODUCTS GRID */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id || product._id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden group"
              >
                <NavLink to={`/product/${product._id}`} className="block">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-36 sm:h-48 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name || product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="p-1 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-red-500" />
                      </button>
                      <button className="p-1 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-blue-500" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    {product.category && (
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] sm:text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-3 sm:p-6">
                    {/* Title */}
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name || product.title || "Untitled Product"}
                    </h3>

                    {/* Description */}
                    {product.description && (
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      {product.stock !== undefined && (
                        <span
                          className={`text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full ${
                            product.stock > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      )}
                    </div>

                    {/* ADD TO CART */}
                    <button
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-xs sm:text-sm ${
                        product.stock === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-md hover:shadow-lg"
                      }`}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{product.stock === 0 ? "Out of Stock" : "Add to Cart"}</span>
                    </button>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
