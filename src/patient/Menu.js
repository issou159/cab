import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as SuiMenu } from 'semantic-ui-react'; // Renamed imported component
import './stylemenu.css';


function CustomMenu() { // Renamed custom component
    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <SuiMenu pointing secondary className="menu"> {/* Use renamed imported component */}
            <SuiMenu.Item
                name="medical history"
                active={activeItem === "medical history"}
                onClick={handleItemClick}
                as={Link} to="/medical-history"
            />
            <SuiMenu.Item
                name="appointement"
                active={activeItem === "appointement"}
                onClick={handleItemClick}
                as={Link} to="/Appointement"
            />
            <SuiMenu.Item
                name="provider communication"
                active={activeItem === "provider communication"}
                onClick={handleItemClick}
                as={Link} to="/provider-communication"
            />
            <SuiMenu.Item
                name="bill payment"
                active={activeItem === "bill payment"}
                onClick={handleItemClick}
                as={Link} to="/bill-payment"
            />
            <SuiMenu.Item
                name="educational resources"
                active={activeItem === "educational resources"}
                onClick={handleItemClick}
                as={Link} to="/educational-resources"
            />
            <SuiMenu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={handleItemClick}
                as={Link} to="/logout"
            />
        </SuiMenu>
    );
}

export default CustomMenu;