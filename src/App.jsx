import { useEffect, useState } from "react";
import "./App.css";
import { EMPTYSTRING, INITIALFORMDATA } from "./constant";
import SignupPage from "./Signup-Page";
import HomePage from "./Homepage";

const updateFormData = (setFormData, inputForm) => {
  const username = inputForm.username.value;
  const password = inputForm.password.value;
  const email = inputForm.email.value;

  setFormData({ username, password, email });
};

const verifySignUp = (signUpData) => {
  const { username, password } = signUpData;

  return username !== EMPTYSTRING && password !== EMPTYSTRING ? true : false;
};

const App = () => {
  const [formData, setFormData] = useState(INITIALFORMDATA);
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFormData(setFormData, event.target);
  };

  useEffect(() => {
    setSignUp(verifySignUp(formData));
  }, [formData]);

  return signUp ? (
    <HomePage setFormData={setFormData} />
  ) : (
    <SignupPage handleSubmit={handleSubmit} />
  );
};

export default App;
