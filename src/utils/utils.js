import IconFacebookPromo from '../images/social-icons/type-in-promo/facebook.svg';
import IconInstagramPromo from '../images/social-icons/type-in-promo/instagram.svg';
import IconTwitterPromo from '../images/social-icons/type-in-promo/twitter.svg';
import IconYoutubPromo from '../images/social-icons/type-in-promo/youtube.svg';

import IconFacebookFooter from '../images/social-icons/type-in-footer/facebook.svg';
import IconInstagramFooter from '../images/social-icons/type-in-footer/instagrem.svg';
import IconTwitterFooter from '../images/social-icons/type-in-footer/twitter.svg';
import IconYoutubFooter from '../images/social-icons/type-in-footer/youtube.svg';

export const arraysSocialIcons = {
    arrIconsOnPromo : [
        {
            name: "instagram",
            img: IconInstagramPromo,
        },
        {
            name: "youtube",
            img: IconYoutubPromo,
        },
        {
            name: "facebook",
            img: IconFacebookPromo,
        },
        {
            name: "twiter",
            img: IconTwitterPromo,
        },
    ],
    arrIconsOnFooter: [
        {
            name: "instagram",
            img: IconInstagramFooter,
        },
        {
            name: "youtube",
            img: IconYoutubFooter,
        },
        {
            name: "facebook",
            img: IconFacebookFooter,
        },
        {
            name: "twiter",
            img: IconTwitterFooter,
        },
    ],
};

export const returnPageName = ( locationPath, nameArticle ) => { // Функция для выбора титульного названия страницы в зависимости от локации пользователя
    switch (locationPath) {
        case 'club' : 
            return 'ABOUT THE CLUB';
            break;
        case 'faq' : 
            return 'FAQ';
            break
        case 'rules' : 
            return 'RULES';
            break
        case 'contacts' : 
            return 'CONTACTS';
            break
        case 'news' : 
            return 'NEWS';
            break
        default :
            return nameArticle;
    }
}