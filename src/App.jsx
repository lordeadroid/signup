import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="logo">
        <h1>antstack</h1>
      </div>
      <form className="form">
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
