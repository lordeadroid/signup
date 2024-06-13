import { useEffect, useState } from "react";
import "./App.css";
import { FORMDATA } from "./constant";

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
    <h1>Signed Up Successfully</h1>
  ) : (
    <div className="page">
      <div className="logo">
        <h1>antstack</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="username"
            className="input-box"
            placeholder="username"
            required
          />
          <input
            type="email"
            name="email"
            className="input-box"
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            className="input-box"
            placeholder="password"
            required
          />
        </div>
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
};

export default App;
