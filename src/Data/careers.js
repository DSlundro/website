import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faCalendar, faBriefcase } from '@fortawesome/free-solid-svg-icons';



library.add(faCode, faCalendar, faBriefcase )

export const careers = [
    {
        icon: `fab fa-github`,
        number: 90,
        name: 'Progetti',
    },
    {
        icon: `${faCode.iconName}`,
        number: 20,
        name: 'Tecnologie',
    },
    {
        icon: `${faCalendar.iconName}`,
        number: 8,
        name: 'Mesi di esperienza',
    },
    {
        icon: `${faBriefcase.iconName}`,
        number: 0,
        name: 'Esperienza lavorativa',
    },
]