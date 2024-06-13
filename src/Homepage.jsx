import { FORMDATA } from "./constant";

const Homepage = ({ setFormData }) => {
  const handleLogout = () => {
    setFormData(FORMDATA);
  };

  return (
    <div className="page">
      <div onClick={handleLogout} className="logout-button">Logout</div>
      <h1>Signed Up Successfully</h1>
    </div>
  );
};

export default Homepage;
