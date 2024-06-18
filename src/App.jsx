import { MantineProvider } from "@mantine/core";
import SignupPage from "./Signup-Page";
import HomePage from "./Homepage";
import "./App.css";
import { useEffect, useState } from "react";
import { EMPTYSTRING, INITIALFORMDATA } from "./constant";

const updateFormData = (setFormData, inputForm) => {
  const username = inputForm.username.value;
  const password = inputForm.password.value;
  const email = inputForm.email.value;

  setFormData({ username, password, email });
};

const handleSubmit = (values) => {
  values.preventDefault();
  console.log(121);
  console.log(values);
};

const verifySignUp = (signUpData) => {
  const { username, password } = signUpData;
  return username !== EMPTYSTRING && password !== EMPTYSTRING ? true : false;
};

const App = () => {
  const [formData, setFormData] = useState(INITIALFORMDATA);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    setSignUp(verifySignUp(formData));
  }, [formData]);

  return (
    <MantineProvider>{signUp ? <HomePage /> : <SignupPage />}</MantineProvider>
  );
};

export default App;
