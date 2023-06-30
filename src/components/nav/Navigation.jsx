import { Link } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
    return(
        <header className="navigation-container">
        <Link to="/" className="navigation-link">Home</Link>
        <Link to="/about" className="navigation-link">About</Link>
        <Link to="/contact" className="navigation-link" >Contact</Link>
        {/* style={{marginRight: '2.5rem'}} */}
    </header>
    );
}

export default Navigation;