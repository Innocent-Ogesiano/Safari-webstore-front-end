import React from "react";
import signinStyle from "../stylesheets/signin.module.css";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <>
      <div
        className={signinStyle.container}
        id={signinStyle["signUp"]}
        style={{ width: "80%", minWidth: "300px" }}
      >
        <div className={signinStyle.top} style={{height:'70px'}}>

        </div>
        <div className={signinStyle.bottom}>
          <h5>CREATE ACCOUNT</h5>
          <form className={signinStyle.form}>
            <div className={signinStyle.formGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={signinStyle.formGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={signinStyle.formGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={signinStyle.formGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={signinStyle.formGroup}>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className={signinStyle.formGroup}>
              <label>Password</label>
              <input type="password" />
            </div>
            <div className={signinStyle.formGroup}>
              <input type="checkbox" />
              <label>I want to receive safari newsletters with the best deals and offers</label>
            </div>
            <div className={signinStyle.formGroup}>
              <input type="submit" />
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
