const Order = require("../models/Order");
const Inventory = require("../models/Inventory");

exports.placeOrder = async (req, res) => {
  await Order.create({ userId: req.user.id, items: req.body });
  
  const inventory = await Inventory.findOne();
  inventory.pizzaBase -= 1;
  inventory.cheese -= 1;
  inventory.save();

  res.json({ message: "Order placed successfully" });
};
