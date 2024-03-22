const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

// Route to add an item to the cart
router.post('/cart/add', CartController.addItemToCart);

// Route to remove an item from the cart
router.delete('/cart/remove/:itemId', CartController.removeItemFromCart);

// Route to update the quantity of an item in the cart
router.put('/cart/update/:itemId', CartController.updateCartItemQuantity);

// Route to get the items in the cart
router.get('/cart', CartController.getCartItems);

module.exports = router;