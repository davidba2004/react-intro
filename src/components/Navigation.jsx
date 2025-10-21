import {Link} from 'react-router-dom';
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </nav>
    );
};

export default Navigation;