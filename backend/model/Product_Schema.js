import mongoose from "mongoose";
const Product_Schema = mongoose.Schema(
  {
    // Basic Info
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },

    // Pricing
    price: { type: Number, required: true },
    discountPrice: { type: Number },   // optional discounted price
    currency: { type: String, default: "INR" },

    // Stock & Inventory
    stock: { type: Number, required: true, default: 0 },
    sku: { type: String, unique: true },   // stock keeping unit / unique ID

    // Categories & Tags
    category: { type: String, required: true },   // e.g., "Electronics"
    subCategory: { type: String },                // e.g., "Mobiles"
    brand: { type: String },
    tags: [String],                               // search/filter keywords

    // Images
    image: { type: String, required: true },

    // Ratings & Reviews
    ratings: { type: Number, default: 0 },        // avg rating
    numReviews: { type: Number, default: 0 },
    reviews: [
      {
        userId: { type: mongoose.ObjectId, ref: 'User' },
        name: String,
        rating: Number,
        comment: String,
        createdAt: { type: Date, default: Date.now }
      }
    ],

    // Shipping & Availability
    isFeatured: { type: Boolean, default: false }, // for homepage highlights
    isActive: { type: Boolean, default: true },    // soft delete / hide
    weight: { type: Number },                      // optional, for shipping
    dimensions: {
      type: String
    },

    // Metadata
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }

)

const Product = mongoose.model("Product", Product_Schema);
export default Product;