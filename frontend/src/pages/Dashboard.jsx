import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Page</h1>
      <p>Welcome to Pizza Delivery App 🍕</p>

      <br />

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/register">
        <button>Register</button>
      </Link>

      <br /><br />

      <Link to="/custom">
        <button>Custom Pizza</button>
      </Link>

      <br /><br />

      <Link to="/admin">
        <button>Admin Panel</button>
      </Link>
    </div>
  );
}

export default Dashboard;


