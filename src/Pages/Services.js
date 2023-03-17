import React from "react";
import "../Pages/stylepages.css"
import {useState} from 'react';
import calendarSvg from "../image-svg/calendar.svg"
import imageSolidSvg from "../image-svg/image.svg"
import fileSvg from "../image-svg/file.svg"
import handshakeSvg from "../image-svg/handshake.svg"
import hospitalSvg from "../image-svg/hospital.svg"
import hospital_userSvg from "../image-svg/hospital_user.svg"
import houseSvg from "../image-svg/house.svg"
import imageSvg from "../image-svg/image.svg"
import lockSvg from "../image-svg/lock.svg"
import microscopeSvg from "../image-svg/microscope.svg"
import snakeSvg from "../image-svg/snake.svg"
import stethoscopeSvg from "../image-svg/stethoscope.svg"
import suitcaseSvg from "../image-svg/suitcase.svg"
import user_secretSvg from "../image-svg/user_secret.svg"
import userdoctorSvg from "../image-svg/userdoctor.svg"
import usersSvg from "../image-svg/users.svg"

function Services() {
    const [showInfo, setShowInfo] = useState(false); // state to track whether to show more info

    const handleInfoToggle = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div className="App">
            <p className="S01">Services</p>
            <div className="svg-container">
                <div onClick={handleInfoToggle}>
                    <img src={calendarSvg} alt="My SVG Image" />
                    <p className="svg-text">Appointment calendar</p>
                </div>

                {showInfo && (
                    <div className="svg-info">
                        <p>Some more information about appointment calendar...</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={imageSolidSvg} alt="My SVG Image" onClick={handleInfoToggle} />
                    <p className="svg-text">Add images</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>Adding images - Users can upload and attach images to their medical records or share with their doctor.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={fileSvg} alt="My SVG Image" />
                    <p className="svg-text">files</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This feature allows for secure storage of patient medical records and easy access for doctors to view patient information.</p>
                    </div>
                )}

                <div onClick={handleInfoToggle}>
                    <img src={handshakeSvg} alt="My SVG Image" />
                    <p className="svg-text">Friendly relationship </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>The application prioritizes building a friendly and secure relationship between doctors and patients.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={hospitalSvg} alt="My SVG Image" />
                    <p className="svg-text">Application for hospitals</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>he application is designed to be used by hospitals and healthcare facilities to manage patient information.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={hospital_userSvg} alt="My SVG Image" />
                    <p className="svg-text">Hospital users</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>Hospital staff members can create accounts and access patient information as authorized.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={houseSvg} alt="My SVG Image" />
                    <p className="svg-text">Page home</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This is the landing page of the application, where users can access all features.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={imageSvg} alt="My SVG Image" />
                    <p className="svg-text">Images</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>Users can view and manage all images uploaded to their medical records.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={lockSvg} alt="My SVG Image" />
                    <p className="svg-text">Security</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>The application prioritizes the security and privacy of patient information.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={microscopeSvg} alt="My SVG Image" />
                    <p className="svg-text">For doctors </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This feature provides specific tools and features designed for doctors to manage patient information and improve patient care.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={calendarSvg} alt="My SVG Image" />
                    <p className="svg-text">Note medical</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>Users can create and manage medical notes related to their health.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={user_secretSvg} alt="My SVG Image" />
                    <p className="svg-text">User security </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>The application employs advanced security measures to protect user accounts and information.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={snakeSvg} alt="My SVG Image" />
                    <p className="svg-text">For doctors </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This feature provides specific tools and features designed for doctors to manage patient information and improve patient care.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={stethoscopeSvg} alt="My SVG Image" />
                    <p className="svg-text">For doctors </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This feature provides specific tools and features designed for doctors to manage patient information and improve patient care.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={suitcaseSvg} alt="My SVG Image" />
                    <p className="svg-text">For doctors </p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>This feature provides specific tools and features designed for doctors to manage patient information and improve patient care.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={userdoctorSvg} alt="My SVG Image" />
                    <p className="svg-text">User doctor</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>Doctors can create and manage their own accounts and access patient information as authorized.</p>
                    </div>
                )}
                <div onClick={handleInfoToggle}>
                    <img src={usersSvg} alt="My SVG Image" />
                    <p className="svg-text">Users: Doctor and patient</p>
                </div>
                {showInfo && (
                    <div className="svg-info">
                        <p>The application is designed for both doctors and patients to access and manage patient information.</p>
                    </div>
                )}

            </div>
        </div>
    );
}


export default Services;