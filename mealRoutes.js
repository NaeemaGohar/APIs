const express = require('express');
const Meal = require('../models/meal');
const mealRouter = express.Router();

// Create a new meal
mealRouter.post('/', async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: 'Could not create meal' });
  }
});

// Read all meals
mealRouter.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve meals' });
  }
});

// Update a meal by ID
mealRouter.put('/:id', async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: 'Could not update meal' });
  }
});

// Delete a meal by ID
mealRouter.delete('/:id', async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete meal' });
  }
});

module.exports = mealRouter;

