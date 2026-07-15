import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminHome() {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/admin/getAllDoctors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const approveDoctor = async (doctorId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/admin/approveDoctor",
        { doctorId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      getDoctors();

    } catch (error) {
      console.log(error);
      alert("Error approving doctor");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Doctor Applications</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Fees</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.fullName}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.fees}</td>
              <td>{doctor.status}</td>

              <td>
                {doctor.status === "pending" ? (
                  <button
                    onClick={() => approveDoctor(doctor._id)}
                  >
                    Approve
                  </button>
                ) : (
                  "Approved"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminHome;