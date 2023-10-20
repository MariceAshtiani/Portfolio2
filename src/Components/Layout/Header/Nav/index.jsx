import { NavLink } from "react-router-dom";
import { useState } from "react";
import StyledMenu from "./styled.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <StyledMenu>
            <div className="menu">
                <div className="mobile-header">
                    {isMobileMenuOpen ? (
                        <FaTimes onClick={toggleMobileMenu} className="menu-icon close-icon" />
                        ) : (
                        <FaBars onClick={toggleMobileMenu} className="menu-icon open-icon" />
                        )
                    }
                </div>
                <ul className={isMobileMenuOpen ? "nav-links mobile-active" : "nav-links"}>
                    <li>
                        <NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </StyledMenu>
    );
}