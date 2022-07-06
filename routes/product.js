const express = require("express");

const router = express.Router();
const {
  getProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/product");
router.get("/getProducts", getProducts);
router.post("/createProduct", createProduct);
router.get("/deleteProduct", deleteProduct);

module.exports = router;
