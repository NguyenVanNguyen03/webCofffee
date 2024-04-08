import express from "express";
import Product from "../db/models/product.js";
import User from "../db/models/user.js";

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

router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/api/users", async (req, res) => {
  console.log(req.body)
  const { email, username, password } = req.body;
  console.log("===========")
  console.log(email)
  try {
    const newUser = new User({
      email: email,
      username: username,
      password: password,

    });

    await newUser.save();
    res.json({ message: "User added successfully" });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


/**
 * Go to Add Product page
 */
router.get("/add-user", (req, res) => {
  res.render("add-user");

});

/**
 * Add new Product
 */
router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.userEmail,
      username: req.body.userName,
      password: req.body.userPassword,

    });

    await newUser.save();
    res.redirect("/");
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * API endpoint: Add new Product
 */
router.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product({
      gmail: req.body.gmail,
      username: req.body.userName,
      password: req.body.password,
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
