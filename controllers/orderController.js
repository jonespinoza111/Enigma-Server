const Order = require('../models/Order');

// Controller method to get all orders
exports.getAllOrders = async (req, res) => {
  try {
    // Retrieve all orders from the database
    const orders = await Order.find();

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to get a specific order by ID
exports.getOrderById = async (req, res) => {
  try {
    // Retrieve the order ID from the request parameters
    const { orderId } = req.params;

    // Find the order by ID in the database
    const order = await Order.findById(orderId);

    if (!order) {
      // If the order is not found, return an error response
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to create a new order
exports.createOrder = async (req, res) => {
  try {
    // Retrieve the order details from the request body
    const { customerName, totalPrice, items } = req.body;

    // Create a new order instance
    const order = await Order.create({ customerName, totalPrice, items });

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to update an order
exports.updateOrder = async (req, res) => {
  try {
    // Retrieve the order ID from the request parameters
    const { orderId } = req.params;

    // Retrieve the updated order details from the request body
    const { customerName, totalPrice, items } = req.body;

    // Find and update the order by ID in the database
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { customerName, totalPrice, items },
      { new: true }
    );

    if (!updatedOrder) {
      // If the order is not found, return an error response
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to delete an order
exports.deleteOrder = async (req, res) => {
  try {
    // Retrieve the order ID from the request parameters
    const { orderId } = req.params;

    // Find and remove the order by ID from the database
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      // If the order is not found, return an error response
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};