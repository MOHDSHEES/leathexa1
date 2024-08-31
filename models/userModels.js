import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  whatsAppNo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  itemsInCart: {
    type: Number,
    default: 0,
  },
  itemsInWishlist: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: 1,
  },
  billingAddress: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    country: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
  },
  shippingAddress: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    country: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
  },
});
// Middleware to hash password before updating
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
  }
  next();
});
// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// productsSchema.index({ name: "text", category: "text" });
const userModel = mongoose.models.Users || mongoose.model("Users", userSchema);
// module.exports =  userModel;
export default userModel;
