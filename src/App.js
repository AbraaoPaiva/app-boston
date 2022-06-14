import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SignIn from "./pages/Login/SignIn";
import Home from "./pages/Home/Home";
import RegisterPatient from "./pages/RegisterPatient/RegisterPatient";
import MedicalRecords from "./pages/MedicalRecords/MedicalRecords";
import Patients from "./pages/Patients/Patients";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro_paciente" element={<RegisterPatient />} />
          <Route path="/prontuario_medico" element={<MedicalRecords />} />
          <Route path="/pacientes" element={<Patients />} />
        </Routes>
    </div>
  );
}

export default App;
