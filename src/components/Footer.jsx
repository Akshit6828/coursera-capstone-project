import { Link } from 'react-router-dom';
import footerLogo from '../assets/Logo.png'; // Reuse logo or different one

const Footer = () => {
    return (
        <footer className="api-footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <img src={footerLogo} alt="Little Lemon Footer Logo" className="footer-img" onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerText = 'Little Lemon'}}/>
                </div>
                <div className="footer-links">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Location</h3>
                    <p>123 Marine Drive</p>
                    <p>Mumbai, MH 400020</p>
                    <p>+91 9465675515</p>
                    <p>contact@littlelemon.com</p>
                </div>
                <div className="footer-social">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
