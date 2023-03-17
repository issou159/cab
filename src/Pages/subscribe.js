import React from "react";
import "../Pages/stylepages.css"
function SubscriptionPage() {


        return (
            <div className="subscribe1">
                    <div className="signup-form">
                            <h2>Sign Up</h2>
                            <form>
                                    <div className="form-group">
                                            <button className="btn btn-primary">Sign Up with Facebook</button>
                                            <button className="btn btn-danger">Sign Up with Google</button>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control"
                                                   placeholder="Enter your full name" />
                                    </div>
                                    <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control"
                                                   placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control"
                                                   placeholder="Enter your password" />
                                    </div>
                                    <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="tel" className="form-control"
                                                   placeholder="Enter your phone number" />
                                    </div>
                                    <div className="form-group">
                                            <label>Role</label>
                                            <select className="form-control" defaultValue="">
                                                    <option value="" disabled>Select your role</option>
                                                    <option value="doctor">Doctor</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="patient">Patient</option>
                                            </select>
                                    </div>
                                    <div className="form-group">
                                            <label>Gender</label>
                                            <select className="form-control">
                                                    <option value="">Select your gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                            </select>
                                    </div>
                                    <button type="submit" className="btn btn-success">Sign Up</button>
                            </form>
                    </div>
            </div>
        );
}

export default SubscriptionPage;