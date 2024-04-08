import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "No Name",
  },
  content: {
    type: String,
    default: "No Content",
  },
  img: {
    type: String,
    default: "No Images",
  },
  price: {
    type: Number,
    default: "No Price",
  },
  rating: {
    type: Number,
    default: "",
  },
});

const Products = mongoose.model("Products", productSchema);

export default Products;
