import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>                    
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                    <NavLink to="/portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink to="/education">
                        Education
                    </NavLink>
                    <NavLink to="/experience">
                        Experience
                    </NavLink>                    
                    <NavLink to="/contact">
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>             
        </>
    );
};
 
export default Navbar;