import { NavLink } from "react-router-dom";
import "../../styles/Navigation.css";

function Nav() {
    return (
        <nav className="navigation" aria-label="Primary navigation">
            <ul className="menu-items">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-links ${isActive ? "active-links" : ""}`
                        }
                        end
                        aria-label="On Click"
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
                        aria-label="On Click"
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
                        aria-label="On Click"
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
                        aria-label="On Click"
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
                        aria-label="On Click"
                    >
                        Order Online
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
