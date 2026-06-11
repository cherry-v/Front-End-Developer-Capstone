import logo from './little-lemon-logo.svg';
import "./styles/Header.css";

function Header() {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <img src={logo} alt="Little Lemon logo" className="logo-img" />
                <p className="site-header__tagline">Mediterranean Kitchen</p>
            </div>
        </header>
    );
}

export default Header;
