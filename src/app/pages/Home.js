import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Container from "../components/shared/Container";
import Message from "../components/Message";
import Celebrities from "../components/Celebrities";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Message />
        <Celebrities />
        <Footer />
      </Container>
      <Link to="/auth">
        Go to Auth
      </Link>
    </>
  );
}

export default Home;
