import { faPalette, faMobileScreenButton, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPalette, faMobileScreenButton, faDatabase, faCode)

export const features = [
    {
        icon: `${faPalette.iconName}`,
        name: 'Design',
        description: 'Design creativo e moderno, UX/UI design e il contenuto.'
    },
    {
        icon: `${faMobileScreenButton.iconName}`,
        name: 'Responsive',
        description: 'Sviluppo e design responsive per adattare il sito web per qualsiasi dispositivo.'
    },
    {
        icon: `${faCode.iconName}`,
        name: 'Development',
        description: 'Sviluppo e manutenzione delle pagine web.'
    },
    {
        icon: `${faDatabase.iconName}`,
        name: 'Storage',
        description: 'Salvataggio dei dati nel database esterno o nel cloud.'
    },
]