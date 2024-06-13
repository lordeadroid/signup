import { useEffect, useState } from "react";
import "./App.css";
import { FORMDATA } from "./constant";
import SignupPage from "./Signup-Page";
import Homepage from "./Homepage";

const updateFormData = (setFormData, inputForm) => {
  const username = inputForm.username.value;
  const password = inputForm.password.value;
  const email = inputForm.email.value;

  setFormData({ username, password, email });
};

const verifySignUp = (signUpData) => {
  const { username, password } = signUpData;

  if (username !== "" && password !== "") {
    return true;
  }

  return false;
};

const App = () => {
  const [formData, setFormData] = useState(FORMDATA);
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFormData(setFormData, event.target);
  };

  useEffect(() => {
    setSignUp(verifySignUp(formData));
  }, [formData]);

  return signUp ? (
    <Homepage setFormData={setFormData} />
  ) : (
    <SignupPage handleSubmit={handleSubmit} />
  );
};

export default App;
