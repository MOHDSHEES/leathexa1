import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  wishlist: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
