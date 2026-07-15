import { useState } from "react";
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
    timings: [],
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

      const res = await axios.post(
        "http://localhost:8000/api/doctor/applyDoctor",
        doctor,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Apply Doctor</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control my-2"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Address"
          name="address"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Specialization"
          name="specialization"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Experience"
          name="experience"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Fees"
          name="fees"
          onChange={handleChange}
        />

        <input
          className="form-control my-2"
          placeholder="Timings (e.g. 9AM-5PM)"
          name="timings"
          onChange={handleChange}
        />

        <button className="btn btn-primary mt-3">
          Apply
        </button>

      </form>
    </div>
  );
}

export default ApplyDoctor;