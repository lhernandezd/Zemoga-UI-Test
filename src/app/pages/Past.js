import React from "react";
import { Link } from "react-router-dom";

function Past() {
  return (
    <section className="Past" style={{ padding: 20 }}>
      Past Trial
      <Link to="/" style={{ color: "orange", display: "block", marginTop: "2rem" }}>
        Go to Home &gt;
      </Link>
    </section>
  );
}

export default Past;
