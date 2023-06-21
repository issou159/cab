import React from "react";
import "../Pages/stylepages.css"
import axios from "axios";
import {useState} from "react";
const SubscriptionPage = () => {
        const [fullName, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [role, setRole] = useState("");
        const [gender, setGender] = useState("");

        const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                        // Make a POST request to the backend
                        const response = await axios.post("/register", {
                                name: fullName,
                                email,
                                password,
                                tel: phoneNumber,
                                role,
                                gender,
                        });

                        // Handle the response (e.g., display a success message)
                        console.log(response.data);
                } catch (error) {
                        // Handle errors (e.g., display an error message)
                        console.log(error.message);
                }
        };




        return (
            <div className="subscribe1">
                    <div className="signup-form">
                            <h2>Sign Up</h2>
                            <form>

                                    <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter your phone number"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group">
                                            <label>Role</label>
                                            <select
                                                className="form-control"
                                                defaultValue=""
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            >
                                                    <option value="" disabled>
                                                            Select your role
                                                    </option>
                                                    <option value="doctor">Doctor</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="patient">Patient</option>
                                            </select>
                                    </div>
                                    <div className="form-group">
                                            <label>Gender</label>
                                            <select
                                                className="form-control"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                    <option value="">Select your gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                            </select>
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                                            Sign Up
                                    </button>
                            </form>
                    </div>
            </div>
        );
}

export default SubscriptionPage;