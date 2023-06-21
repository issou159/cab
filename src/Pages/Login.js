import React, { useState } from "react";
import "../Pages/stylepages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("patient");
    const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", {
                email,
                password,
                role,
            });

            const user = response.data;

            if (user.role === "patient") {
                navigate("/patient");
            } else if (user.role === "doctor") {
                navigate("/doctor");
            } else {
                // Handle other roles or error cases
            }
        } catch (error) {
            // handle login error
            if (error.response && error.response.status === 401) {
                setErrorMessage("Invalid email or password.");
            } else {
                setErrorMessage("An error occurred during login.");
            }
        }
    };

    return (
        <div className="login-form">
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
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