import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "No Name",
  },
  type: {
    type: String,
    default: "No Type",
  },
});

const Products = mongoose.model("Products", productSchema);

export default Products;
