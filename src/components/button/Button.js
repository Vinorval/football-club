import React from "react";
import { NavLink } from "react-router";

const Button = ({ text, lenght, color, link }) => {
    return(
        <button className={`button button_color_${color} button_light_${lenght}`} >
            <NavLink to={link} className="button__link" >{text}</NavLink>
        </button>
    )
}

export default Button;