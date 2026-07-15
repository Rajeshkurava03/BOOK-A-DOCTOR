import React, { useEffect, useState } from "react";
import axios from "axios";

function MyDoctorApplication() {
  const [doctor, setDoctor] = useState(null);

  const getDoctorInfo = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/doctor/getDoctorInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setDoctor(res.data.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
  }, []);

  if (!doctor) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>No Doctor Application Found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Doctor Application</h1>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td><b>Full Name</b></td>
            <td>{doctor.fullName}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>{doctor.email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>{doctor.phone}</td>
          </tr>

          <tr>
            <td><b>Address</b></td>
            <td>{doctor.address}</td>
          </tr>

          <tr>
            <td><b>Specialization</b></td>
            <td>{doctor.specialization}</td>
          </tr>

          <tr>
            <td><b>Experience</b></td>
            <td>{doctor.experience}</td>
          </tr>

          <tr>
            <td><b>Consultation Fees</b></td>
            <td>₹ {doctor.fees}</td>
          </tr>

          <tr>
            <td><b>Timings</b></td>
            <td>{doctor.timings.join(" , ")}</td>
          </tr>

          <tr>
            <td><b>Status</b></td>
            <td>
              {doctor.status === "approved"
                ? "🟢 Approved"
                : "🟡 Pending"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyDoctorApplication;