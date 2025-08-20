import Product from "../model/Product_Schema.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, discountPrice, currency, stock, sku, category, subCategory, brand, tags, image, ratings, numReviews, reviews, isFeatured, isActive, weight, dimensions, createdAt, updatedAt } = req.body;

    const newProduct = new Product({
      name,
      description,
      price, discountPrice, currency, stock, sku, category, subCategory, brand, tags, image, ratings, numReviews, reviews, isFeatured, isActive, weight, dimensions, createdAt, updatedAt
    })
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: newProduct
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message
    })
  }
}
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
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
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
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
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message
    });
  }
}
export const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const response = await Product.findById(id);
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

