import React from "react";
import SearchBar from "../Search/SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/Weather-App/">
        <span className="navbar-brand">
          <img
            id="heart"
            src="https://user-images.githubusercontent.com/85977287/136820783-949d4aba-2574-4238-b86d-5dc1c4a38d55.gif"
            width="64"
            height="64"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
      </Link>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
