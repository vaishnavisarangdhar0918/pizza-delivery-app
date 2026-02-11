const cron = require("node-cron");
const Inventory = require("../models/Inventory");
const transporter = require("../config/mail");

cron.schedule("*/5 * * * *", async () => {
  const stock = await Inventory.findOne();
  if (stock.pizzaBase < 20) {
    transporter.sendMail({
      to: "admin@gmail.com",
      subject: "Low Stock Alert",
      text: "Pizza base stock below threshold"
    });
  }
});
