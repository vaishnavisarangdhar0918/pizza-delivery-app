const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  size: String,
  toppings: [String],
  price: Number,
    status: {
    type: String,
    default: "Pending"
  }
});
