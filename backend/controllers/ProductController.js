const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => { 
  Product.find().then((product) => {
    res.status(200).json(product)
  }).catch((error) => {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  })
}

exports.getProductById = async (req, res) => {
  let productId = req.params.id;

  await Product.findById(productId).then((product) => {
    res.status(200).json({ status: "Product fetched", product });
  }).catch((error) => {
    res.status(500).json({ status: "Failed to fetch product", error: error.message });
  })
}