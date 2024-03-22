const Cart = require('../models/Cart');

// Controller method to add an item to the cart
exports.addItemToCart = async (req, res) => {
  try {
    // Retrieve the item details from the request body
    const { itemId, quantity } = req.body;

    // Perform any necessary validation or data manipulation

    // Add the item to the cart
    const cartItem = await Cart.create({ itemId, quantity });

    res.status(201).json({ success: true, data: cartItem });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to remove an item from the cart
exports.removeItemFromCart = async (req, res) => {
  try {
    // Retrieve the item ID from the request parameters
    const { itemId } = req.params;

    // Find and remove the item from the cart
    await Cart.findOneAndDelete({ itemId });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to update the quantity of an item in the cart
exports.updateCartItemQuantity = async (req, res) => {
  try {
    // Retrieve the item ID and new quantity from the request parameters and body
    const { itemId } = req.params;
    const { quantity } = req.body;

    // Find and update the cart item with the new quantity
    await Cart.findOneAndUpdate({ itemId }, { quantity });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller method to get the items in the cart
exports.getCartItems = async (req, res) => {
  try {
    // Retrieve the cart items from the database
    const cartItems = await Cart.find();

    res.status(200).json({ success: true, data: cartItems });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};