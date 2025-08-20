import mongoose from "mongoose";
const Cart_Schema = mongoose.Schema(
  {
    // Basic Info
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true, trim: true },
    productQuntity: { type: Number, required: true, default: 1 },
    productDescription: { type: String, required: true },

    // Pricing
    productPrice: { type: Number, required: true },

    // Stock & Inventory

      // stock keeping unit / unique ID

    // Categories & Tags
    productCategory: { type: String, required: true },   // e.g., "Electronics"
    productSubCategory: { type: String },                // e.g., "Mobiles"
    productBrand: { type: String },

    // Images
    productImage: { type: String, required: true },

    // Metadata
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }

)

const Cart = mongoose.model("Cart", Cart_Schema);
export default Cart;