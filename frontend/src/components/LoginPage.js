import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginComponent/LoginForm";
import LoginSuccess from "./LoginComponent/LoginSuccess";

const LoginPage = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      <Header />{" "}
      {!formIsSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <LoginSuccess />
      )}{" "}
    </div>
  );
};

export default LoginPage;
