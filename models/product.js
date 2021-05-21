const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trime: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trime: true,
      required: true,
      maxlength: 2002,
    },
    price: {
      type: Number,
      trime: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: Number,
    },
    Sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
