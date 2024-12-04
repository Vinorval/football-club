import React from "react";
import { useLocation } from "react-router";

import Navigation from "../navigation/Navigation";

const Header = () => {
    const location = useLocation();
    //в переменую записываем название страницы, чтоб правильно выбрать фотографию для фона промо сайта
    let path = (location.pathname === '/') ? 'home' : location.pathname.split("/")[2];

    return (
        <header className={`header header__background header_page_${path} ${ location.pathname === "/" ? 'header_height_big' : 'header_height_small'}`}>
            <Navigation />
        </header>
    );
};

export default Header;