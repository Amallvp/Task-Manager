import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="container">
      <div className="navbar-wrapper">
        <div className="navbar-wrapper navlinks-left ">
          <i className="fa-solid fa-clipboard-list"></i>
          <h2>Done It !</h2>
        </div>
        <div className="navlinks-right navbar-wrapper">
          <Link className="link-class" to={"/login"}>
            <button>Login</button>
          </Link>

          <Link className="link-class" to={"/signup"}>
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
