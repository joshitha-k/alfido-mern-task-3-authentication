import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged Out");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card dashboard">

        <h1>Dashboard</h1>

        <h3>Welcome Joshitha</h3>

        <p>Authentication Successful</p>

        <button onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;