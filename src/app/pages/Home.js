import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to='/auth'>
        Go to Auth
      </Link>
    </div>
  )
}

export default Home;
