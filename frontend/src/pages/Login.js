import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // For now we just redirect directly
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <input type="password" placeholder="Enter Password" />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

