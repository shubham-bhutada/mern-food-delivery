import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign up" && (
            <input type="text" placeholder="Name" required />
          )}
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to all the terms and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrState("Sign up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
