import Cart from "../model/Cart.js";
export const addToCart = async (req, res) => {
  const { productId, productName, productQuntity, productDescription, productPrice, productCategory, productSubCategory, productBrand, productImage } = req.body;

  try {
    const newCartItem = new Cart({
      productId,
      productName,
      productQuntity,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand,
      productImage,
    });

    await newCartItem.save();
    res.status(201).json({
      success: true,
      message: "Product added to cart successfully",
      product: newCartItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product to cart",
      error: error.message
    });
  }
}

export const getAllProductsCart = async (req, res) => {
  try {
    const products = await Cart.find();
    res.status(200).json({
      success: true,
      products: products,
      message: "Products fetched successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message
    });
  }
}
export const deleteProductCart = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Cart.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted from cart successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product from cart",
      error: error.message
    });
  }
}