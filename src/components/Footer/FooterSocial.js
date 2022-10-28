// Componenti
import { Column } from "../UI/Column"
import { Link } from "../UI/Link"
// Data
import { socials } from "../../Data/socials"
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const FooterSocial = props => {
    return (
        <Column className={props.classes.footer_socials}>
            {socials.map( social => {
                return (
                    <Link
                        href={social.link}
                        target='_blank'
                        key={social.name}
                    >
                        <FontAwesomeIcon
                            className={props.classes.footer_icon} 
                            icon={['fab', social.icon]} 
                        />
                    </Link>
                )
            })}
        </Column>
    )
}
export default FooterSocial;