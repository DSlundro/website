// Data
import { socials } from '../../Data/socials';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Componenti UI
import { Column } from '../UI/Column';
import { Link } from '../UI/Link';

const Socials = props => {
    return (
        <Column className={props.classes.socials}>
            {socials.map( social => {
                return (
                    <Link
                        className={props.classes.link}
                        href={social.link}
                        target='_blank'
                        key={social.name}
                    >
                        <FontAwesomeIcon 
                            icon={['fab', social.icon]} 
                            className={props.classes.icon}
                        />
                    </Link>
                )
            })}
        </Column>
    )
}
export default Socials;