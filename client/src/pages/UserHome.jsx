import { useNavigate } from "react-router-dom";

function UserHome() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to User Dashboard</h1>

      <p>Login Successful 🎉</p>

      <button
        onClick={() => navigate("/applyDoctor")}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Apply Doctor
      </button>
    </div>
  );
}

export default UserHome;