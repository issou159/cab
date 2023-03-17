import React from "react";
import "../Pages/stylepages.css";
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <label htmlFor="role">Role:</label>
                <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                    <option value="patient">Patient</option>
                </select>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;