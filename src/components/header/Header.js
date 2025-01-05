import React from "react";
import { useLocation } from "react-router";

import Navigation from "../navigation/Navigation";

import { returnPageName } from "../../utils/utils"; // Импорт функции, которая возвращает название страницы

const Header = () => {
    const location = useLocation();
    //в переменую записываем название страницы, чтоб правильно выбрать фотографию для фона промо сайта
    let path = (location.pathname === '/') ? 'home' : location.pathname.split("/")[2];

    return (
        <header className={`header header__background header_page_${path} ${ location.pathname === "/" ? 'header_height_big' : 'header_height_small'}`}>
            <Navigation />
            <div>
                {/*{ (location.pathname === '/') ? <Promo /> : <h2>{returnPageName()}</h2> }
                <Socials position="promo" />*/}
            </div>
        </header>
    );
};

export default Header;