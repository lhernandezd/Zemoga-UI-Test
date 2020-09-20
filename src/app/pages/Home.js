import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      Home
      <Link to="/auth">
        Go to Auth
      </Link>
    </>
  );
}

export default Home;
