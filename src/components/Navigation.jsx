// Akashdeep Singh
import { Link } from 'react-router-dom';

export default function Navigation() {
    const publicUrl = import.meta.env.BASE_URL;
    return (
        <nav className="nav">
            <img src={`${publicUrl}pokemon-logo.png`} alt="Pokemon Logo" className="nav-logo" />
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/media">Media</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}