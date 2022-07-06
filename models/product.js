const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    contact: {
      type: Number,
      required: true,
    },
    creator: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "products",
  }
);
module.exports = mongoose.model("Product", productSchema);
