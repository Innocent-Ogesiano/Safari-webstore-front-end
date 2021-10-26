import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignInPage";
import main from '../stylesheets/SigninSignup.module.css'

export default function SignInSignUpPage() {
  return (
    <>
      <div className={main.container}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}