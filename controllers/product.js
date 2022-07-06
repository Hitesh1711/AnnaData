const Product = require("../models/product");

exports.getProducts = (req, res) => {
  Product.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ errors: err });
    });
};

exports.createProduct = (req, res) => {
  let { name, description, price, image, contact, creator } = req.body;
  const newProduct = new Product({
    name: name,
    description: description,
    price: price,
    image: image,
    contact: contact,
    creator: creator,
  });
  newProduct
    .save()
    .then((response) => {
      res.status(201).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(409).json({ errors: err });
    });
};

exports.deleteProduct = async (req, res) => {
  const id = req.query.id;
  const query = Product.findByIdAndDelete(id, (err, element) => {
    if (err) {
      res.status(404).json({ message: error });
    } else {
      res.status(200).json("deleted successfully");
    }
  });
  try {
    await query.clone();
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
