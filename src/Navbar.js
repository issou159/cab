import img from '../src/logo1.png';
import { Link, useLocation } from "react-router-dom";
import '../src/Styles.css';

function Navbar() {
    return (
        <nav className="nav">
            <Customlink to="/Home" className="site-tittle">
                <img src={img} />
            </Customlink>
            <ul>
                <li>
                    <Customlink to="/Home">
                        <button className="button">Home</button>
                    </Customlink>
                </li>
                <li>
                    <Customlink to="/About">
                        <button className="button">About</button>
                    </Customlink>
                </li>
                <li>
                    <Customlink to="/Services">
                        <button className="button" >Services</button>
                    </Customlink>
                </li>
                <li>
                    <Customlink to="/Carte">
                        <button className="button">Carte</button>
                    </Customlink>
                </li>
                <li>
                    <Customlink to="/Contact">
                        <button className="button">Contact</button>
                    </Customlink>
                </li>
                <li>
                    <Customlink to="/Login">
                        <button className="button">Login</button>
                    </Customlink>
                </li>
            </ul>
        </nav>
    );
}

function Customlink({ to, children, className, onClick }) {
    const location = useLocation();

    const isActive = location.pathname === to;
    const classes = `${className} ${isActive ? "active" : ""}`;
    const handleClick = (event) => {
        if (event.detail === 2) { // check for double click
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <li>
            <Link to={to} className={classes} onClick={handleClick}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;