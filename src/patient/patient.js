import React, { useState } from "react";
import {Link,useLocation} from 'react-router-dom'
import UploadPhoto from "../patient/UploadPhoto";
import CustomMenu from "./Menu";
import SearchBar from "./SearchBar";
function Patient() {
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageChange = (selectedImage) => {
        setSelectedImage(selectedImage);
    };
    const location = useLocation();
    return(
  <div>
      <UploadPhoto onImageChange={handleImageChange} />
      <div className="alignier">
          <CustomMenu>
              <Link to="/medical-history">Medical History</Link>
              <Link to="/appointement">Appointement</Link>
              <Link to="/provider-communication">Provider Communication</Link>
              <Link to="/bill-payment">Bill Payment</Link>
              <Link to="/educational-resources">Educational Resources</Link>
              <Link to="/logout">Logout</Link>
          </CustomMenu>
          <SearchBar />
      </div>






  </div>
    );
}
export default Patient;