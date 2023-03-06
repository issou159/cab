
import React from "react"
import './footer.css';
function Footer() {
    return (
<footer>
  <div class="container">
    <div class="footer-title">
      <h3>"Stay organized and efficient with DoctorDriver - your one-click solution for medical record-keeping and appointment management,quick access to essential information and resources to help you make the most of our platform."</h3>
    </div>
    <div class="footer-links">
      <div class="about-us">
        <h4>About Us</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Our Services</a></li>
        </ul>
      </div>
      <div class="contact-us">
        <h4>Contact Us</h4>
        <ul>
          <li>Phone: +1-XXX-XXX-XXXX</li>
          <li>Email: <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a></li>
          <li>Address: 123 Main Street, Your City, Your Country</li>
        </ul>
      </div>
      <div class="follow-us">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2023 DoctorDriver. All rights reserved.</p>
    </div>
  </div>
</footer>
    )}
    export default Footer;