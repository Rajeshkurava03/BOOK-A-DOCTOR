import React, { useEffect, useState } from "react";
import axios from "axios";

function UserAppointments() {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/appointment/getUserAppointments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
      alert("Error fetching appointments");
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Appointments</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserAppointments;