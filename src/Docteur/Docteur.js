import React from "react";
import { Link } from "react-router-dom";
import './Docteur.css'

function Docteur() {
    return (
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/communication">Communication avec le patient</Link>
                </li>
                <li>
                    <Link to="/appointment1">Gestion de rendez-vous</Link>
                </li>
                <li>
                    <Link to="/patient-records">Gestion des dossiers patients</Link>
                </li>
                <li>
                    <Link to="/calendar">Consulter le calendrier</Link>
                </li>
                <li>
                    <Link to="/prescriptions">Gestion des prescriptions</Link>
                </li>
                <li>
                    <Link to="/invoices">Gérer les factures</Link>
                </li>
            </ul>
        </div>
    );
}

export default Docteur;
