import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-sign-up.styles.scss";

// functional component as we ll use state with signIn and SignUp component respectively

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;
