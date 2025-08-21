import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [upload, setUpload] = useState(false);
  const [product, setProduct] = useState({});
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    sku: "",
    category: "",
    subCategory: "",
    brand: "",
    tags: "",
    image: "",
    weight: "",
    dimensions: "",
  });
  const apiUrl = import.meta.env.VITE_API_BACKEND_PRODUCT;
  const handleApi = async () => {
    console.log(_id);
    try {
      const response = await axios.get(
        `${apiUrl}getProduct/${_id}`
      );
      setProduct(response.data.product);
      setFormData(response.data.product);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);

  const handleImageChange = async (e) => {
    setUpload(true);
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Ecom_Project_Images");
    data.append("cloud_name", "dsk4pebpe");
    const apiUrl = import.meta.env.VITE_API_BACKEND_CLOUDINARY;
    const res = await axios.post(apiUrl,
      data
    );
    const uploadedImageUrl = res.data.secure_url;
    // formData.images = uploadedImageUrl;
    setFormData((prev) => ({ ...prev, image: uploadedImageUrl })); // ✅ correct way
    console.log("Uploaded Image URL:", uploadedImageUrl);
    setUpload(false);
  };
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.patch(
        `${apiUrl}updateProduct/${_id}`,
        formData
      );
      console.log("Updated Successfully");
    } catch (err) {
      console.log(err.response.data.error);
    }
    setFormData({
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      stock: "",
      sku: "",
      category: "",
      subCategory: "",
      brand: "",
      tags: "",
      image: "",
      weight: "",
      dimensions: "",
    });
    setImagePreview(null);
  };
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">
        Update Product
      </h2>

      <div className="mt-6 bg-white border p-6 shadow-xl rounded-2xl">
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Product Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChnage}
              value={formData.name}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Short description"
              value={formData.description}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="₹ Price"
              value={formData.price}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Discounted Price */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Discounted Price
            </label>
            <input
              type="number"
              name="discountPrice"
              placeholder="₹ Discounted"
              value={formData.discountPrice}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Available stock"
              value={formData.stock}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              SKU
            </label>
            <input
              type="text"
              name="sku"
              placeholder="SKU Code"
              value={formData.sku}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              category
            </label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Electronics"
              value={formData.category}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          {/* SubCategory */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              SubCategory
            </label>
            <input
              type="text"
              name="subCategory"
              placeholder="e.g. Electronics"
              value={formData.subCategory}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand name"
              value={formData.brand}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g. Mobile, Fashion"
              value={formData.tags}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Weight
            </label>
            <input
              type="text"
              name="weight"
              placeholder="e.g. 1.5kg"
              value={formData.weight}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Dimension */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Dimension
            </label>
            <input
              type="text"
              name="dimension"
              placeholder="e.g. 10x20x5 cm"
              value={formData.dimensions}
              onChange={handleChnage}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-semibold text-gray-600">
              Product Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              name="image"
              className="w-full border p-3 rounded-lg cursor-pointer"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-24 h-24 object-cover rounded-lg shadow-md border"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-3 flex justify-center mt-6">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition transform "
              type="submit"
              disabled={upload}
            >
              {upload ? "Uploading..." : " Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
