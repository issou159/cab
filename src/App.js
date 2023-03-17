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
            </Routes>
            <Footer />
        </div>

    );
}
export default App;