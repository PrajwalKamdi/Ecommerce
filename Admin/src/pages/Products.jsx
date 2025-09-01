import axios from "axios";
import { Delete, Edit, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {} from "src/Components/SkeletoLoading.jsx"
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BACKEND_PRODUCT;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
          `${apiUrl}products`
      );
      setProducts(response.data.products || []); // ensure it's always an array
      // console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };
  const handleDelete = async (id) => {
    if (!id) {
      console.error("No product ID provided for deletion.");
      return;
    }

    try {
      setIsDelete(true);
      await axios.delete(
        `${apiUrl}deleteProduct/${id}`
      );
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setIsDelete(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-1">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">
        📦 Products List
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr className="text-center">
              <th className="px-6 py-1 text-left">Image</th>
              <th className="px-6 py-1 ">Name</th>
              <th className="px-6 py-1 ">Price</th>
              <th className="px-6 py-1 ">Stock</th>
              <th className="px-6 py-1 ">Category</th>
              <th className="px-6 py-1 ">Subcategory</th>
              <th className="px-6 py-1 ">Brand</th>
              <th className="px-6 py-1 ">Action</th>
            </tr>
          </thead>
          {loading ? (
            <div className="max-w-full flex justify-center items-center">
              Loading... <Loader className="animate-spin" />
            </div>
          ) : (
            <tbody className="text-sm text-center">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="px-6 py-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-16 object-cover rounded-md border-b border-t"
                      />
                    </td>
                    <td className="px-6 py-1 font-medium text-gray-800">
                      {product.name}
                    </td>
                    <td className="px-6 py-1 text-green-600 font-semibold">
                      ₹{product.price}
                    </td>
                    <td
                      className={`px-6 py-1 font-semibold ${
                        product.stock > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {product.stock > 0 ? product.stock : "Out of Stock"}
                    </td>
                    <td className="px-6 py-1">{product.category}</td>
                    <td className="px-6 py-1">{product.subCategory}</td>
                    <td className="px-6 py-1">{product.brand}</td>
                    <td className="flex justify-around items-center gap-5 py-6">
                      <NavLink to={`update/${product._id}`} className="text-blue-500 hover:text-blue-700  hover:cursor-pointer">

                        <Edit />
                      </NavLink>
                      <button
                        onClick={() => {
                          handleDelete(product._id);
                          fetchProducts();
                        }}
                        className="hover:cursor-pointer text-red-500 hover:text-red-700"
                      >
                        {isDelete ? "Deleting..." : <Delete />}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    🚫 No products found.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Products;
