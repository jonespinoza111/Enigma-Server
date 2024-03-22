const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// Route to get all orders
router.get('/orders', OrderController.getAllOrders);

// Route to get a specific order
router.get('/orders/:orderId', OrderController.getOrderById);

// Route to create a new order
router.post('/orders', OrderController.createOrder);

// Route to update an order
router.put('/orders/:orderId', OrderController.updateOrder);

// Route to delete an order
router.delete('/orders/:orderId', OrderController.deleteOrder);

module.exports = router;