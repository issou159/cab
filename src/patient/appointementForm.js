import { useState, useEffect } from "react";
import {useNavigate, Link, useSearchParams} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const AppointmentForm = () => {
    const location1 = useLocation();
    const navigate = useNavigate();
    const [doctorId, setDoctorId] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    let type = searchParams.get("type")
    useEffect(() => {
        console.log("lol! the type is " , type );
    }, [type ]);
    useEffect(() => {
        console.log(doctorId);
    }, [doctorId]);

    useEffect(() => {
        if (location1.state && location1.state.doctorId) {
            setDoctorId(location1.state.doctorId);
        }

        console.log(doctorId);
    }, [location1.state]);


    const [patientId, setPatientId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("doctorId in handleSubmit:", doctorId);

        try {
            const response1 = await axios.get(`/doctors/${doctorId}/schedule`);
            const schedule = response1.data.schedule;
            const response = await axios.post("/appointments", {
                doctorId: type,
                patientId,
                date,
                time,
                duration,
                schedule,
            });

            // Check if the requested appointment slot is available
            if (response.status === 200) {
                // Appointment was successfully booked
                navigate("/confirmation");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // The requested appointment slot is not available
                const message = error.response.data.message;
                console.log(message); // You can display the message or update the UI accordingly
            } else {
                console.error(error.message);
                // Handle other errors
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Patient:
                <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <label>
                Duration:
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </label>
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;