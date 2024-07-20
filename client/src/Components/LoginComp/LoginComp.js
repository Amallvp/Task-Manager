import React from "react";
import "./LoginComp.css";
import { Link } from "react-router-dom";

function LoginComp() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <h2>Login</h2>
        <div className="login-form-container">
          <form action="" className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <span>
              Don't have an account?{" "}
              <Link className="link-class" to={"/signup"}>
                <span id="signup">Signup</span>
              </Link>
            </span>
            <button className="login-form-button">
              Login with <b>Google</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
