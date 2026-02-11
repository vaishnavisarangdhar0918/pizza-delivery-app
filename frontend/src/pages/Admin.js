import React, { useState } from "react";

function Admin() {
  const [orders] = useState([
    { id: 1, size: "Small" },
    { id: 2, size: "Medium" },
    { id: 3, size: "Large" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      <h3>All Orders:</h3>

      {orders.map((order) => (
        <div key={order.id} style={{ marginBottom: "10px" }}>
          <p>
            Order ID: {order.id} | Size: {order.size}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Admin;


