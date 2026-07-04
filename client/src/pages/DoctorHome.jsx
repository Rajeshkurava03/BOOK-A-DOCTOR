import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorHome() {
  const [appointments, setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  const getAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/appointment/getDoctorAppointments",
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
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const updateStatus = async (appointmentId, status) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/appointment/updateAppointmentStatus",
        {
          appointmentId,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      getAppointments();
    } catch (error) {
      console.log(error);
      alert("Error updating appointment");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Doctor Dashboard</h1>

      <h2>Appointment Requests</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.userName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>

              <td>
                {appointment.status === "pending" ? (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(appointment._id, "approved")
                      }
                    >
                      Approve
                    </button>

                    {" "}

                    <button
                      onClick={() =>
                        updateStatus(appointment._id, "rejected")
                      }
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  appointment.status
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorHome;