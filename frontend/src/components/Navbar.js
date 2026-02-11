import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/custompizza">Custom Pizza</Link> |{" "}
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Navbar;
