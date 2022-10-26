import { faGithub, faTelegram, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faTelegram, faLinkedin, faInstagram)

export const socials = [
    {
        icon: `${faGithub.iconName}`,
        name: 'GitHub',
        link: `https://github.com/DSlundro`
    },
    {
        icon: `${faTelegram.iconName}`,
        name: 'Telegram',
        link: `https://t.me/Lundro`
    },
    {
        icon: `${faLinkedin.iconName}`,
        name: 'Linkedin',
        link: `https://www.linkedin.com/in/dragan-savic`
    },
    {
        icon: `${faInstagram.iconName}`,
        name: 'Instagram',
        link: `https://www.instagram.com/dragansavic_`
    },

]