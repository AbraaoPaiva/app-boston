import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PatientFilter from "./pages/PatientFilter/PatientFilter";
import HospitalFilter from "./pages/HospitalFilter/HospitalFilter";
import Data from "./pages/Data/Data";
import Login from "./pages/Login/SignIn";
import Home from "./pages/Home/Home";
import PatientsList from "./pages/PatientsList/PatientsList";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/patient_filter" element={<PatientFilter />} />
        <Route path="/hospital_filter" element={<HospitalFilter />} />
        <Route path="/data" element={<Data />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pacientes" element={<PatientsList />} />
      </Routes>
    </div>
  );
}

export default App;
