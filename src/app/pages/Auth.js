import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className="Auth" style={{ padding: 20 }}>
      Log In / Sign Up
      <Link to="/" style={{ color: "orange", display: "block", marginTop: "2rem" }}>
        Go to Home &gt;
      </Link>
    </section>
  );
}

export default Auth;
