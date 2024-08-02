import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  sizes: [
    {
      size: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  images: [
    {
      url: String,
    },
  ],
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  brand: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  images: [
    {
      url: String,
    },
  ],
  tags: [],
  ratings: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  variants: [variantSchema],
  vendor: {
    type: String,
  },
  //   category: {
  //     type: String,
  //   },
  hsnNo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Draft",
  },
  sku: {
    type: String,
    required: true,
  },
  //   subCategory: {
  //     type: String,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
