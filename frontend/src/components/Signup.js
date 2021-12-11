import React, { useState } from "react";
import Header from "./Header";
import SignupForm from "./Signupcomponent/SignupForm";
import SignupSuccess from "./Signupcomponent/SignupSuccess";

const Signup = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      <Header />{" "}
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}{" "}
    </div>
  );
};

export default Signup;
