import { useForm } from "@mantine/form";
import "./App.css";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { EMPTYSTRING, INITIALFORMDATA } from "./constant";
import SignupPage from "./Signup-Page";
import HomePage from "./Homepage";

const App = () => {
  const [signUp, setSignUp] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: INITIALFORMDATA,
  });

  const verifySignUp = (signUpData) => {
    const { username, password } = signUpData;
    return username !== EMPTYSTRING && password !== EMPTYSTRING ? true : false;
  };

  const handleSubmit = (values) => {
    setSignUp(verifySignUp(values));
  };

  return (
    <MantineProvider>
      {signUp ? (
        <HomePage />
      ) : (
        <SignupPage form={form} handleSubmit={handleSubmit} />
      )}
    </MantineProvider>
  );
};

export default App;
