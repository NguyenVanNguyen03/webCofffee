import express from "express";
import Product from "../db/models/product.js";

const router = express.Router();

router.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * API endpoint: Add new Product
 */
router.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.productName,
      content: req.body.productContent,
      img: req.body.productImg,
      price: req.body.productPrice,
      rating: req.body.productRating,
    });

    await newProduct.save();
    res.json({ message: "Product added successfully" });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * Home page: loading all products
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("home", { products });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Go to Add Product page
 */
router.get("/add-product", (req, res) => {
  res.render("add-product");
});

/**
 * Add new Product
 */
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.productName,
      content: req.body.productContent,
      img: req.body.productImg,
      price: req.body.productPrice,
      rating: req.body.productRating,
    });

    await newProduct.save();
    res.redirect("/");
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Go to Update Product page
 */
router.get("/update-product/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.render("update-product", { product });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Delete product
 */
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.send(deletedProduct);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * Update product
 */
router.post("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          name: req.body.productName,
          content: req.body.productContent,
          img: req.body.productImg,
          price: req.body.productPrice,
          rating: req.body.productRating,
        },
      },
      { useFindAndModify: false }
    );
    res.redirect("/");
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
