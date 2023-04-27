import { Link } from "react-router-dom";
import './nav.css'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <img alt="coffee logo" src={process.env.PUBLIC_URL + 'modern-coffee-shop-logo-design-vector-37280794-removebg-preview.png'} />
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/coffee-time">Coffee Time</Link>
                </li>
                <li>
                    <Link to="/coffee-types">Coffee Types</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
