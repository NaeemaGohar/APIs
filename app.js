const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurantRoutes');
const mealRoutes = require('./routes/mealRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://naeemachang:naeMONGO@api0.xsababo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Routes for Restaurant and Meal
app.use('/restaurants', restaurantRoutes);
app.use('/meals', mealRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

