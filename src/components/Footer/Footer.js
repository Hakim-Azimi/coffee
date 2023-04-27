import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-contact">
          <p>mail: coffee@shop.com</p>
          <p>phone: 1234567891011</p>
          <p>adress: royal street, London, UK</p>
        </div>
        <div className="footer-media">
            <a href="#"><FaInstagram className="footer-icons"/></a>
            <a href="#"><FaLinkedinIn className="footer-icons"/></a>
           <a href="#"> <FaTwitter className="footer-icons"/></a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  