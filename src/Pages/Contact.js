import React, { useState } from 'react';
import '../Pages/stylepages.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [role, setRole] = useState('doctor'); // default value is 'doctor'

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Role: ${role}`);
        // add logic to send form data to server or email here
        const subject = `New message from ${role}: ${name}`;
        const body = `Email: ${email}\nMessage: ${message}`;
        // add code to send email with subject and body here
    };

    return (
        <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact_form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="company">Company</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default Contact;