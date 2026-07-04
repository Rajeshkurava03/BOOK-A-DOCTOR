import React, { useState } from "react";
import DoctorList from "./DoctorList";
import ApplyDoctor from "./ApplyDoctor";
import UserAppointments from "./UserAppointments";

function UserHome() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#2c3e50",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Book Doctor</h2>

        <button
          onClick={() => setActiveMenu("home")}
          style={{ width: "100%", marginTop: "20px" }}
        >
          Home
        </button>

        <button
          onClick={() => setActiveMenu("appointments")}
          style={{ width: "100%", marginTop: "10px" }}
        >
          Appointments
        </button>

        <button
          onClick={() => setActiveMenu("apply")}
          style={{ width: "100%", marginTop: "10px" }}
        >
          Apply Doctor
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>
        {activeMenu === "home" && <DoctorList />}
        {activeMenu === "appointments" && <UserAppointments />}
        {activeMenu === "apply" && <ApplyDoctor />}
      </div>
    </div>
  );
}

export default UserHome;