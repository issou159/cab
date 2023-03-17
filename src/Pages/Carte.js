import React from "react";
import "./stylepages.css"
function Carte(){
    return(
        <div className="pp2">
        <p className="ppp1">Now you can easily locate your doctor's office</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.291856310474!2d10.80258070781251!3d35.773584000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212b4dab5a525%3A0xd9e5a5796b575291!2sOffice%20De%20Monastir%20R%C3%A9publique!5e0!3m2!1sen!2stn!4v1654873783912!5m2!1sen!2stn" className={'map-view'}  allowFullScreen={true} loading="lazy"referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
)
}
export default Carte;