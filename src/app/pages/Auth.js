import React from 'react'
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div>
      Auth
      <Link to='/home'>
        Go to Home
      </Link>
    </div>
  )
}

export default Auth;

