import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar({ showAddPost }) {
  return (
    <nav>
      <Link to="/">
        <h1>Submit Your Post Here</h1>
      </Link>
      {showAddPost && (
        <Link to="/add-post">
          <button>Create a New Post</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;