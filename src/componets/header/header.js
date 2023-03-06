
import './header.css';
import react from 'react';
import Logo from '../../assets/logo1.png';
function Header(){
  

 return (
 <div>
      <header>
      
          <img className="logo1" src={Logo} />
          
        <button className="acceuil"><a href='#001'>Acceuil</a></button>
        <button className="aboutus"><a href='#01'>About-us</a></button>
        <button className="services"><a href='#02'>Services</a></button>
        <button className="carte"><a href='#03'>Carte</a></button>
        <button className="contact"><a href='#04'>Contact</a></button>
        <button className="login">Login</button>
      </header>
      
    </div>
 );
}
export default Header;
