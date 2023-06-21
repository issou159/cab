import React, { useState } from "react";

const MedicalHistory = () => {
    const [medicalHistory, setMedicalHistory] = useState("");
    const [allergies, setAllergies] = useState("");
    const [medications, setMedications] = useState("");
    const [conditions, setConditions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Perform the necessary logic to submit the medical history

        // Reset the form fields after submission
        setMedicalHistory("");
        setAllergies("");
        setMedications("");
        setConditions("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Medical History:
                <textarea
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                />
            </label>
            <label>
                Allergies:
                <input
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                />
            </label>
            <label>
                Medications:
                <input
                    type="text"
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                />
            </label>
            <label>
                Conditions:
                <input
                    type="text"
                    value={conditions}
                    onChange={(e) => setConditions(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>

    );
};

export default MedicalHistory;