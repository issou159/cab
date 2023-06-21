import React, { useState } from "react";
import './Circle.css'

function UploadPhoto(props) {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the image upload logic here
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label htmlFor="image">Choose an image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Upload</button>

            <img src={image} alt="Selected" className="circular-image" />
        </form>
    );
}

export default UploadPhoto;