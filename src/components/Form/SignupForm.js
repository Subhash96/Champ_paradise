import React from "react";
import "./SignupForm.css";

export default function SignupForm() {
  return (
    <>
      <div className="signup">
        <h1>Sign Up</h1>
        <form>
          <div className="box">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="box">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="box">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="box">
            <label>Contact No.</label>
            <input type="number" />
          </div>
          <div className="box">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="box">
            <label>Confirm Password</label>
            <input type="password" />
          </div>
          <div className="btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
