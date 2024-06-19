import { useForm } from "@mantine/form";
import "./App.css";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { EMPTYSTRING, INITIALFORMDATA } from "./constant";
import SignupPage from "./Signup-Page";
import HomePage from "./Homepage";

const App = () => {
  const [formData, setFormData] = useState(INITIALFORMDATA);
  const [signUp, setSignUp] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: INITIALFORMDATA,
  });

  const logout = () => {
    setFormData(INITIALFORMDATA);
    form.reset();
  };

  const verifySignUp = (signUpData) => {
    const { username, password } = signUpData;
    return username !== EMPTYSTRING && password !== EMPTYSTRING ? true : false;
  };

  const handleSubmit = (values) => {
    setFormData(values);
  };

  useEffect(() => {
    setSignUp(verifySignUp(formData));
  }, [formData]);

  return (
    <MantineProvider>
      {signUp ? (
        <HomePage logout={logout} />
      ) : (
        <SignupPage form={form} handleSubmit={handleSubmit} />
      )}
    </MantineProvider>
  );
};

export default App;
