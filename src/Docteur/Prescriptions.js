import React, { useState } from 'react';
import axios from 'axios';

const PrescriptionForm = () => {
    const [doctorName, setDoctorName] = useState('');
    const [patientName, setPatientName] = useState('');
    const [medication, setMedication] = useState('');
    const [dosage, setDosage] = useState('');

    const handleDoctorNameChange = (e) => {
        setDoctorName(e.target.value);
    };

    const handlePatientNameChange = (e) => {
        setPatientName(e.target.value);
    };

    const handleMedicationChange = (e) => {
        setMedication(e.target.value);
    };

    const handleDosageChange = (e) => {
        setDosage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/prescriptions', {
                doctor: doctorName,
                patient: patientName,
                medication,
                dosage,
            });

            // Clear the form fields
            setDoctorName('');
            setPatientName('');
            setMedication('');
            setDosage('');

            // Show success message
            alert('Prescription submitted successfully.');

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Show error message from the server
                alert(error.response.data.message);
            } else {
                // Show a generic error message
                alert('An error occurred while submitting the prescription.');
            }
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="doctorName">Doctor Name:</label>
                <input
                    type="text"
                    id="doctorName"
                    value={doctorName}
                    onChange={handleDoctorNameChange}
                />
            </div>
            <div>
                <label htmlFor="patientName">Patient Name:</label>
                <input
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={handlePatientNameChange}
                />
            </div>
            <div>
                <label htmlFor="medication">Medication:</label>
                <input
                    type="text"
                    id="medication"
                    value={medication}
                    onChange={handleMedicationChange}
                />
            </div>
            <div>
                <label htmlFor="dosage">Dosage:</label>
                <input
                    type="text"
                    id="dosage"
                    value={dosage}
                    onChange={handleDosageChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PrescriptionForm;