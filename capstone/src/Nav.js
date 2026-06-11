import "./styles/Navigation.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navigation">
            <ul className="menu-items">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/booking"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                    >
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/order-online"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                    >
                        Order Online
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
