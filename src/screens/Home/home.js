import { getByAltText } from '@testing-library/react';
import React from 'react';
import Background from '../../assets/background01.png';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const myArray = [
        { id: "1",  src:"logoacceuil.png" , altText:"acceuil" ,text: "Welcome to our website" },
        { id: "2",  src:"logocalendrier.jpg" , altText:"calendrier",text: "Check out our events calendar"},
        { id: "3", src:"logoreservation.png", altText:"reservation",text: "Book your reservation now"},
        { id: "4",  src:"logocarte.png", altText:"carte",text: "Explore our carte"},
        { id: "5",  src:"logostockage.png", altText:"stockage",text: "Secure storage solutions"},
        { id: "6",  src:"logostorage.jpg" , altText:"storage",text: "Affordable storage options"},
        { id: "7",  src:"logosecurite.png", altText:"securite",text: "Our top priority: your security"},
        { id: "8",  src:"logoaccessible.png", altText:"accessible",text: "Accessibility matters to us"}
    
    ];
    const ContactForm = () => {
        return (
          <form className="contact_form">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="Your name.."/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Your last name.." />
            <label htmlFor="InputEmail1">Email address</label>
            <input type="text" id="email" name="email" placeholder="Your email.." />
            <label htmlFor="message">Message</label>
            <textarea className="form-control" placeholder="Place your message here.." rows="5"></textarea>
            <input type="submit" value="Submit"></input>
          </form>
        );
      };

    return (
    
        <div className="home" id='001'>
         <div class="background01">
            <img src={Background} style={{width: '900px',height: '250 px',padding: 0,margin: 0}}/>
            <p><strong>Take Advantage</strong><br/><br/>DoctorDriver provides patients and doctors with an online practice management system<br/><br/><Link to="/subscribe" className="inscription">Subscribe</Link></p>

         </div>
       
        <p className="information"><h1>Doctor Driver</h1>Doctor Driver is a type of healthcare software that manages the day-to-day operations of a clinic, such as appointment scheduling and other administrative tasks</p>
        <p className="information1"><h1>Doctor Driver</h1>Doctor Driver helps you manage your practice wherever you are from any accessible equipment (computer, tablet, Smartphone...), ensuring compatibility with any Internet browser and Operating Systems (Mac OS, Pc) and security of the connection by a customizable login and password.</p>
         <div className='logos' id='02'>
            <p className='services1'style={{textalign: 'right'}}>SERVICES</p>
            <div className='containerImages'>
              {myArray.map(item=>{
                return (
                    <div className='imgContainer' >
                        <img src={item.src} className='logocarte' />
                        <span>{item.text}</span>
                    </div>
                )
            })}
            </div>
         </div>
         <div className='aboutus1' id='01'>
            <p className='p1'>About-us</p>
            <p className='p2'>Doctor Driver</p>
            <p className='p3'><p className='p3a'>Doctor Driver</p>is a solution that consists of managing.</p>
            <p className='p4'>Patient medical records with an efficient information processing tool adapted to various medical specialties and a complete diary with an appointment management and integrated advanced doctoral function.</p>
            <p className='p3'><p className='p3a'>Doctor Driver</p>helps you manage your practice wherever you are.</p>
            <p className='p5'>From any accessible equipment (computer, tablet, Smartphone...), ensuring compatibility with any Internet browser and Operating Systems (Mac OS, Pc) and security of the connection by a customizable login and password.</p>
         </div>
         <div className='carte' id='03'>
            <p className='p6'>Carte</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.291856310474!2d10.80258070781251!3d35.773584000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212b4dab5a525%3A0xd9e5a5796b575291!2sOffice%20De%20Monastir%20R%C3%A9publique!5e0!3m2!1sen!2stn!4v1654873783912!5m2!1sen!2stn" className={'map-view'}  allowFullScreen={true} loading="lazy"referrerPolicy="no-referrer-when-downgrade"></iframe>
         <div className='contact' id='04'>
            <p className='p7'>Contact</p>
            <ContactForm />
         </div>
         </div>
        </div>
        
    );
};

export default Home;
