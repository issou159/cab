import React, { useState } from 'react';
import './PatientRecord.css';
import axios from 'axios';
const PatientRecord = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [healthInsuranceNumber, setHealthInsuranceNumber] = useState('');
    const [allergyRisk, setAllergyRisk] = useState('');
    const [medicalObservations, setMedicalObservations] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleHealthInsuranceNumberChange = (e) => {
        setHealthInsuranceNumber(e.target.value);
    };

    const handleAllergyRiskChange = (e) => {
        setAllergyRisk(e.target.value);
    };

    const handleMedicalObservationsChange = (e) => {
        setMedicalObservations(e.target.value);
    };

    const handleDiagnosisChange = (e) => {
        setDiagnosis(e.target.value);
    };

    const handleAdditionalInformationChange = (e) => {
        setAdditionalInformation(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/medical-records', {
                name,
                gender,
                dateOfBirth,
                address,
                healthInsuranceNumber,
                allergyRisk,
                medicalObservations,
                diagnosis,
                additionalInformation
            });

            // Clear the form fields
            setName('');
            setGender('');
            setDateOfBirth('');
            setAddress('');
            setHealthInsuranceNumber('');
            setAllergyRisk('');
            setMedicalObservations('');
            setDiagnosis('');
            setAdditionalInformation('');

            // Show success message
            alert('Medical record submitted successfully.');

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Show error message from the server
                alert(error.response.data.message);
            } else {
                // Show a generic error message
                alert('An error occurred while submitting the medical record.');
            }
        }
    };
    return (
        <form className="patient-record-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">* Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="gender">* Gender:</label>
                <input type="text" id="gender" value={gender} onChange={handleGenderChange} />
            </div>
            <div>
                <label htmlFor="dateOfBirth">* Date of Birth:</label>
                <input type="text" id="dateOfBirth" value={dateOfBirth} onChange={handleDateOfBirthChange} placeholder="YYYY-MM-DD" />
            </div>
            <div>
                <label htmlFor="address">* Address:</label>
                <input type="text" id="address" value={address} onChange={handleAddressChange} />
            </div>
            <div>
                <label htmlFor="healthInsuranceNumber">* Health Insurance Number:</label>
                <input type="text" id="healthInsuranceNumber" value={healthInsuranceNumber} onChange={handleHealthInsuranceNumberChange} />
            </div>
            <div>
                <label htmlFor="allergyRisk">* Allergy Risk:</label>
                <input type="text" id="allergyRisk" value={allergyRisk} onChange={handleAllergyRiskChange} />
            </div>
            <div>
                <label htmlFor="medicalObservations">* Medical Observations:</label>
                <textarea id="medicalObservations" value={medicalObservations} onChange={handleMedicalObservationsChange} />
            </div>
            <div>
                <label htmlFor="diagnosis">* Diagnosis:</label>
                <textarea id="diagnosis" value={diagnosis} onChange={handleDiagnosisChange} />
            </div>
            <div>
                <label htmlFor="additionalInformation">Additional Information:</label>
                <textarea id="additionalInformation" value={additionalInformation} onChange={handleAdditionalInformationChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
export default PatientRecord;