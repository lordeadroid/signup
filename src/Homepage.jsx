import { INITIALFORMDATA } from "./constant";

const HomePage = ({ setFormData }) => {
  const handleLogout = () => {
    setFormData(INITIALFORMDATA);
  };

  return (
    <div className="page">
      <div onClick={handleLogout} className="logout-button">
        Logout
      </div>
      <h1>Signed Up Successfully</h1>
    </div>
  );
};

export default HomePage;
