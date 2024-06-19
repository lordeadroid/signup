import { useForm } from "@mantine/form";
import "./App.css";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { EMPTYSTRING, INITIALFORMDATA } from "./constant";
import SignupPage from "./Signup-Page";
import HomePage from "./Homepage";

const getFormData = () =>
  JSON.parse(localStorage.getItem("formData")) || INITIALFORMDATA;

const App = () => {
  const [formData, setFormData] = useState(getFormData());
  const [isLoggedIn, setLoggedIn] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: INITIALFORMDATA,
  });

  const logout = () => {
    setFormData(INITIALFORMDATA);
    localStorage.removeItem("formData");
    form.reset();
  };

  const verifySignUp = () => {
    const { username, password } = getFormData();
    return username !== EMPTYSTRING && password !== EMPTYSTRING;
  };

  const updateFormData = () => {
    setFormData(getFormData());
  };

  const handleSubmit = (values) => {
    localStorage.setItem("formData", JSON.stringify(values));
    updateFormData();
  };

  useEffect(() => {
    setLoggedIn(verifySignUp());
  }, [formData]);

  return (
    <MantineProvider>
      {isLoggedIn ? (
        <HomePage logout={logout} />
      ) : (
        <SignupPage form={form} handleSubmit={handleSubmit} />
      )}
    </MantineProvider>
  );
};

export default App;
