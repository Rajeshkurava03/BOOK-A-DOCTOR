import React, { useState } from "react";
import axios from "axios";
function ApplyDoctor() {
const [doctor, setDoctor] = useState({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  specialization: "",
  experience: "",
  fees: "",
  timings: "",
});

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const doctorData = {
      ...doctor,
      timings: [doctor.timings],
    };

    const res = await axios.post(
      "http://localhost:8000/api/doctor/applyDoctor",
      doctorData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);
  } catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    error.response?.data?.message ||
    error.message ||
    "Something went wrong"
  );
}
};

  return (
    <div>
      <h2>Apply for Doctor</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={doctor.fullName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={doctor.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={doctor.phone}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={doctor.address}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={doctor.experience}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="fees"
          placeholder="Consultation Fees"
          value={doctor.fees}
          onChange={handleChange}
        />
       <input
  type="text"
  name="timings"
  placeholder="Timings (Ex: 09:00 AM - 05:00 PM)"
  value={doctor.timings}
  onChange={handleChange}
/>
        <br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyDoctor;