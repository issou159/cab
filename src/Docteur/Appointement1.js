import React, { useState } from 'react';

const SetAvailability = () => {
    const [doctorId, setDoctorId] = useState('');
    const [schedule, setSchedule] = useState({ day: '', start: '', end: '' });

    const handleDoctorIdChange = (event) => {
        setDoctorId(event.target.value);
    };

    const handleDayChange = (event) => {
        setSchedule({ ...schedule, day: event.target.value });
    };

    const handleStartChange = (event) => {
        setSchedule({ ...schedule, start: event.target.value });
    };

    const handleEndChange = (event) => {
        setSchedule({ ...schedule, end: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make an API call to set the doctor's availability
        const availabilityData = {
            doctorId: doctorId,
            schedule: schedule
        };

        // Replace the URL with the appropriate endpoint for setting availability
        fetch('/availability', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(availabilityData)
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data as needed
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });

        // Clear the form fields
        setDoctorId('');
        setSchedule({ day: '', start: '', end: '' });
    };

    return (
        <div>
            <h2>Set Availability</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="doctorId">Doctor ID:</label>
                    <input
                        type="text"
                        id="doctorId"
                        value={doctorId}
                        onChange={handleDoctorIdChange}
                    />
                </div>
                <div>
                    <label htmlFor="day">Day:</label>
                    <input
                        type="text"
                        id="day"
                        value={schedule.day}
                        onChange={handleDayChange}
                    />
                </div>
                <div>
                    <label htmlFor="start">Start Time:</label>
                    <input
                        type="text"
                        id="start"
                        value={schedule.start}
                        onChange={handleStartChange}
                    />
                </div>
                <div>
                    <label htmlFor="end">End Time:</label>
                    <input
                        type="text"
                        id="end"
                        value={schedule.end}
                        onChange={handleEndChange}
                    />
                </div>
                <button type="submit">Set Availability</button>
            </form>
        </div>
    );
};

export default SetAvailability;
