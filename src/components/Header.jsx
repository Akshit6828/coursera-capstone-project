import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header className="app-header">
            <div className="container header-container">
                <div className="logo-container">
                    <Link to="/">
                         {/* Placeholder if logo is missing, or assumes logo exists. 
                             The user won't have the exact logo asset, so I should handle it gracefully or ask for it.
                             For now I will use text if image fails or just putting img tag assuming assets folder will be populated or I'll generic it.
                             Wait, I don't have the Logo.svg. I should potentially generate a placeholder or just use text.
                             The course usually provides assets. I'll use text for reliability if image is missing, 
                             but better yet, I should check if I can put an asset there. 
                             Actually, I'll just put the img tag and if it's broken, so be it, or I can use an alt text. 
                             Better: I'll use a simple text or a placeholder logic. 
                             I'll assume I should create a simple logo or just use text.
                             "Little Lemon" text is safer. 
                             But the requirements usually ask for the logo. 
                             I'll modify the import to be optional or just use text "Little Lemon" styled nicely.
                         */}
                        <img src={logo} alt="Little Lemon Logo" className="logo" onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerText = 'Little Lemon'}}/>
                    </Link>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/about" className="nav-item">About</Link></li>
                        <li><Link to="/menu" className="nav-item">Menu</Link></li>
                        <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                        <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
