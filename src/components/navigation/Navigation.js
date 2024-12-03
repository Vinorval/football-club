import React from "react";
import { NavLink } from "react-router";

import Logo from "../../images/logo.svg";
import Button from "../button/Button";

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="link" ><img alt="круглый логотип компании" src={Logo} className="navigation__logo" /></NavLink>
            <ul className="links-list" >
                <NavLink to="/" className="link" >HOME</NavLink>
                <NavLink to="/about-club" className="link link_highlight_active" >ABOUT THE CLUB</NavLink>
                <NavLink to="/faq" className="link" >FAQ</NavLink>
                <NavLink to="/news" className="link" >NEWS</NavLink>
                <NavLink to="/rules" className="link" >RULES</NavLink>
                <NavLink to="/contacts" className="link" >CONTACTS</NavLink>
            </ul>
            <div className="authorization">
                <Button text="LOGIN" lenght="short" color="red" to="/login" />
                <Button text="SIGN UP" lenght="short" color="blue" to="/registration" />
            </div>
        </nav>
    )
};

export default Navigation;