const express = require('express');
const Restaurant = require('../models/restaurant');
const restaurantRouter = express.Router();

// Create a new restaurant
restaurantRouter.post('/', async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Could not create restaurant' });
  }
});

// Read all restaurants
restaurantRouter.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('meals');
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve restaurants' });
  }
});

// Update a restaurant by ID
restaurantRouter.put('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Could not update restaurant' });
  }
});

// Delete a restaurant by ID
restaurantRouter.delete('/:id', async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete restaurant' });
  }
});

module.exports = restaurantRouter;
