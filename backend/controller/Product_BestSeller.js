import BestSeller from "../model/Product_Schema_BestSeller.js";


export const addToBestSeller = async (req, res) => {
  try {
    const { name, description, price, discountPrice, currency, stock, sku, category, subCategory, brand, tags, image, ratings, numReviews, reviews, isFeatured, isActive, weight, dimensions, createdAt, updatedAt } = req.body;

    const newBestSeller = new BestSeller({
      name,
      description,
      price, discountPrice, currency, stock, sku, category, subCategory, brand, tags, image, ratings, numReviews, reviews, isFeatured, isActive, weight, dimensions, createdAt, updatedAt
    })
    await newBestSeller.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newBestSeller
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message
    })
  }
}
export const getAllProductsBestSeller = async (req, res) => {
  try {
    const products = await BestSeller.find();
    res.status(200).json({
      success: true,
      products: products,
      message: "Products fetched successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message
    })
  }
}
export const deleteProductBestSeller = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await BestSeller.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message
    });
  }
}
export const getProductBestSeller = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const response = await BestSeller.findById(id);
    console.log(response)
    res.status(200).json({
      success: true,
      product: response,
      message: "Fetched Successfully"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    })
  }
}