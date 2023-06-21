import './App.css';
import React from "react";
import Footer from './componets/header/footer';
import Navbar from "./Navbar";
import {Route, Routes, Outlet} from "react-router-dom";
import Home from '../src/screens/Home/home';
import About from './Pages/About';
import Services from "./Pages/Services";
import Carte from "./Pages/Carte";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SubscriptionPage from "./Pages/subscribe";
import Patient from "./patient/patient";
import DoctorList from "./patient/DoctorList";
import BookAppointmentPage from "./patient/appointementPatient"
import ConfirmationPage from "./patient/confirmationPage";
import MedicalHistory from "./patient/medicalHistory/MedicalHistory";
import Docteur from "./Docteur/Docteur";
import PatientRecord from "./Docteur/PatientRecord";
import Prescriptions from "./Docteur/Prescriptions";
import Factures from "./Docteur/Factures"
import Appointement1 from "./Docteur/Appointement1";


function App(){
    return (

        <div className="App">
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Carte" element={<Carte />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/subscribe" element={<SubscriptionPage />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/doctor-list" element={<DoctorList />} />
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/medical-history" element={<MedicalHistory/>} />
                <Route path="/doctor" element={<Docteur />}/>
                <Route path="/patient-records" element={<PatientRecord/>} />
                <Route path="/prescriptions" element={<Prescriptions/>} />
                <Route path="/invoices" element={<Factures/>} />
                <Route path="/appointment1" element={<Appointement1/>} />
            </Routes>
            <Footer />
            

        </div>

    );
}
export default App;