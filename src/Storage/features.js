import { faPalette, faMobileScreenButton, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPalette, faMobileScreenButton, faDatabase, faCode)

export const features = [
    {
        icon: `${faPalette.iconName}`,
        name: 'Design',
        description: 'Creative and modern graphic design, UX design, UI design and contents.'
    },
    {
        icon: `${faMobileScreenButton.iconName}`,
        name: 'Responsive',
        description: 'Make responsive layouts automatically adjust and adapt to any device screen size.'
    },
    {
        icon: `${faCode.iconName}`,
        name: 'Development',
        description: 'Building and maintenance of the website.'
    },
    {
        icon: `${faDatabase.iconName}`,
        name: 'Storage',
        description: 'Save your informations on the external database or cloud.'
    },
]