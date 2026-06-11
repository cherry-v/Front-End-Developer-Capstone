import logo from './little-lemon-logo.svg';
import "./styles/Header.css";

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" className="logo-img" />
        </header>
    );
}

export default Header;
