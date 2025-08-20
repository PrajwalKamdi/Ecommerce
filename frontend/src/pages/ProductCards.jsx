import axios from "axios";
import {
  Eye,
  Heart,
  Loader2,
  ShoppingCart
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      const response = await axios.get(
        `${apiUrl}/products`
      );
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing products carefully selected just for you
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {products.length} {products.length === 1 ? "product" : "products"}{" "}
            available
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id || product._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <NavLink to={`/product/${product._id}`} className="block">
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-48 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name || product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                        <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
                      </button>
                    </div>

                    {/* Badge */}
                    {product.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-2">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({product.reviews || product.reviewCount || 0})
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name || product.title || "Untitled Product"}
                    </h3>

                    {/* Description */}
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}

                    {/* Price Section */}
                    <div className="flex items-center justify-between mb-4">
                      {product.stock !== undefined && (
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            product.stock > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                        product.stock === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      }`}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>
                        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                      </span>
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
