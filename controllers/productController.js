const { Product } = require('../models/Product');

// Controller method to get all products
exports.getAllProducts = async (req, res) => {
  try {
    // Retrieve all products from the database
    console.log('trying to get all products in server!!!');
    // const products = await Product.find({});
    const products = await Product.find({}).populate('variations');
    console.log('all the products in server: ', products);

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log('error in get all Products, ', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to get a specific product by ID
exports.getProductById = async (req, res) => {
  try {
    // Retrieve the product ID from the request parameters
    const { productId } = req.params;

    // Find the product by ID in the database
    const product = await Product.findById(productId).populate('variations');

    console.log('look at this product here: ', product);

    if (!product) {
      // If the product is not found, return an error response
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to create a new product
exports.createProduct = async (req, res) => {
  try {
    // Retrieve the product details from the request body
    const { name, price, description } = req.body;

    // Create a new product instance
    const product = await Product.create({ name, price, description });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to update a product
exports.updateProduct = async (req, res) => {
  try {
    // Retrieve the product ID from the request parameters
    const { productId } = req.params;

    // Retrieve the updated product details from the request body
    const { name, price, description } = req.body;

    // Find and update the product by ID in the database
    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, description }, { new: true });

    if (!updatedProduct) {
      // If the product is not found, return an error response
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to delete a product
exports.deleteProduct = async (req, res) => {
  try {
    // Retrieve the product ID from the request parameters
    const { productId } = req.params;

    // Find and remove the product by ID from the database
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      // If the product is not found, return an error response
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};