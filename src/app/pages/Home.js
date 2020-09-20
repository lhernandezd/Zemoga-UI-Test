import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Message from "../components/Message";

function Home() {
  return (
    <>
      <Header />
      <Message />
      <Link to="/auth">
        Go to Auth
      </Link>
    </>
  );
}

export default Home;
