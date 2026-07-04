import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import ApplyDoctor from "./pages/ApplyDoctor";
import AdminHome from "./pages/AdminHome";
import DoctorList from "./pages/DoctorList";
import UserAppointments from "./pages/UserAppointments";
import DoctorHome from "./pages/DoctorHome";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/userhome"
          element={<UserHome />}
        />
        <Route path="/applyDoctor" element={<ApplyDoctor />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/appointments" element={<UserAppointments />} />
        <Route path="/doctorhome" element={<DoctorHome />} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;