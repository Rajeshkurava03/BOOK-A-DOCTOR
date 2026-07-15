import React from "react";

function DoctorList() {
  return (
    <div>
      <h2>Available Doctors</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "250px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>Dr. Demo</h3>

          <p><b>Specialization:</b> General</p>

          <p><b>Experience:</b> 5 Years</p>

          <p><b>Fees:</b> ₹500</p>

          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;