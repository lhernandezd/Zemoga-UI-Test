import React from "react";
import { Link } from "react-router-dom";

function How() {
  return (
    <section className="How" style={{ padding: 20 }}>
      How it works
      <Link to="/" style={{ color: "orange", display: "block", marginTop: "2rem" }}>
        Go to Home &gt;
      </Link>
    </section>
  );
}

export default How;
