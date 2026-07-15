import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
  });

  const token = localStorage.getItem("token");

  const getDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/doctor/getApprovedDoctors",
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

  useEffect(() => {
    getDoctors();
  }, []);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleBook = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));

      const res = await axios.post(
        "http://localhost:8000/api/appointment/bookAppointment",
        {
          doctorId: selectedDoctor._id,
          doctorName: selectedDoctor.fullName,
          userName: userData?.fullName || "User",
          date: appointment.date,
          time: appointment.time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setSelectedDoctor(null);

      setAppointment({
        date: "",
        time: "",
      });

    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Doctors</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Fees</th>
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
              <td>
                <button onClick={() => setSelectedDoctor(doctor)}>
                  Book Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDoctor && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid gray",
            padding: "20px",
          }}
        >
          <h2>Book Appointment</h2>

          <p>
            <strong>Doctor:</strong> {selectedDoctor.fullName}
          </p>

          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={handleBook}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorList;