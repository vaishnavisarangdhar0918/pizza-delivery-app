import React, { useState } from "react";

function CustomPizza() {
  const [size, setSize] = useState("Small");

  const handleOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Pizza</h1>

      <label>Select Size:</label>
      <br /><br />

      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <br /><br />

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default CustomPizza;

