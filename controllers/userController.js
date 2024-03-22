const User = require('../models/User');

const UserController = {
  registerUser: async (req, res) => {
    try {
      // Extract user data from request body
      const { name, email, password } = req.body;

      // Create a new user instance
      const newUser = new User({ name, email, password });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  },

  loginUser: async (req, res) => {
    try {
      // Extract user credentials from request body
      const { email, password } = req.body;

      // Find the user in the database by email
      const user = await User.findOne({ email });

      // Check if the user exists and the password is correct
      if (!user || !user.comparePassword(password)) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to login user' });
    }
  },

  getUserById: async (req, res) => {
    try {
      // Extract user ID from request parameters
      const { id } = req.params;

      // Find the user in the database by ID
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      // Extract user ID and updated data from request parameters and body
      const { id } = req.params;
      const updatedData = req.body;

      // Find the user in the database by ID and update the data
      const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      // Extract user ID from request parameters
      const { id } = req.params;

      // Find the user in the database by ID and delete it
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};

module.exports = UserController;