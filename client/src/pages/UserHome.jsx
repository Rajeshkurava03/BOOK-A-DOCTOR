import { useNavigate } from "react-router-dom";

function UserHome() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const openDoctorDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:8000/api/doctor/getDoctorInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.success && data.data.status === "approved") {
        navigate("/doctorhome");
      } else {
        alert("Your doctor application is still pending approval.");
      }
    } catch (error) {
      alert("Please apply as a doctor first.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to User Dashboard</h1>

      <p>Login Successful 🎉</p>

      <br />

      <button
        onClick={() => navigate("/applyDoctor")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        👨‍⚕️ Apply Doctor
      </button>

      <button
        onClick={() => navigate("/myDoctorApplication")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        📋 My Doctor Application
      </button>

      <button
        onClick={() => navigate("/doctors")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        🩺 View Doctors
      </button>

      <button
        onClick={() => navigate("/appointments")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        📅 My Appointments
      </button>

      <button
        onClick={openDoctorDashboard}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        👨‍⚕️ Doctor Dashboard
      </button>

      <button
        onClick={logout}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
          border: "none",
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default UserHome;