const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  pizzaBase: Number,
  sauce: Number,
  cheese: Number,
  veggies: Number,
  meat: Number
});

module.exports = mongoose.model("Inventory", inventorySchema);
