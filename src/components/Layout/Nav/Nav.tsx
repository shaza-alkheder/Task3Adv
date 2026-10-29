
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import type { NavInterface } from "../../../interfaces";
import "./Nav.css";

const Nav = ({ logo, navItems }: NavInterface) => {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    // const [activeLink, setActiveLink] = useState<string>('/');

    const closeMenu = (): void => {
        setIsMenu(false)
    }

    const toggleMenu = (): void => {
        setIsMenu((prev) => !prev)
    }

    return (
        <nav className="">
            <div className="logo">
                <img src={logo} alt="Website Logo" />
            </div>

            <ul className={`navLinks ${isMenu ? 'navLinksMenu' : ''}`}>
                {
                    navItems.map((navItem, index) => (
                        <li key={index} >
                            <NavLink to={navItem.route} className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>{navItem.content}</NavLink>
                        </li>
                    ))
                }
            </ul>


            <button className='menuBtn' onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenu}>
                {isMenu ? <HiX /> : <HiMenuAlt3 />}
            </button>
        </nav >
    );
};

export default Nav;
