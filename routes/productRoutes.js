const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Route to get all products
router.get('/', ProductController.getAllProducts);

// Route to get a specific product
router.get('/:productId', ProductController.getProductById);

// Route to create a new product
router.post('/', ProductController.createProduct);

// Route to update a product
router.put('/:productId', ProductController.updateProduct);

// Route to delete a product
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;