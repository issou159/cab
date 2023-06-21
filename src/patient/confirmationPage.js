import React from "react";
import "./confirmation.css";

const ConfirmationPage = () => {
    return (
        <div className="confirmation-container">
            <h1 className="confirmation-title">Your appointment has been booked.</h1>
            <p className="confirmation-text">Wait for the doctor's confirmation or cancel the appointment if needed.</p>
        </div>
    );
};

export default ConfirmationPage;