import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from '../UI/Link'

const WorkLinks = props => {
    return (
        <div className={props.classes.card_icons}>
            <Link
                href={props.work.linkWeb}
                target='_blank'
            >
                <FontAwesomeIcon 
                    className={props.classes.card_icon}
                    icon={faEye}
                />
            </Link>
            <Link
                href={props.work.linkGithub}
                target='_blank'
            >
                <FontAwesomeIcon 
                    className={props.classes.card_icon}
                    icon={faGithub}
                />
            </Link>
        </div>
    )
}
export default WorkLinks;