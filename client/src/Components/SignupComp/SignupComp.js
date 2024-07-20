import React from "react";
import "./SignupComp.css";
import { Link } from "react-router-dom";
function SignupComp() {
  return (
    <div className="signup">
      <div className="signup-wrapper">
        <h2>Signup</h2>
        <div className="signup-form-container">
          <form action="" className="signup-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Signup</button>
            <span>
              Already have an account?{" "}
              <Link className="link-class" to={"/login"}>
                <span id="login-button">Login</span>
              </Link>
            </span>
            <button className="signup-form-button">
              Signup with <b>Google</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComp;
