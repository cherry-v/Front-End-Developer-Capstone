import "./styles/Navigation.css";

function Nav() {
    return (
        <nav className="navigation">
            <ul className="menu-items">
                <li>
                    <a href="/" className="active-links">Home</a>
                </li>
                <li>
                    <a href="/about" className="nav-links">About</a>
                </li>
                <li>
                    <a href="/menu" className="nav-links">Menu</a>
                </li>
                <li>
                    <a href="/reservations" className="nav-links">Reservations</a>
                </li>
                <li>
                    <a href="/order-online" className="nav-links">Order Online</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
