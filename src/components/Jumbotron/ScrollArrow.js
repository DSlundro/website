import { Column } from "../UI/Column"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const ScrollArrow = props => {
    return (
        <Column className={props.classes.scroll_arrow_container}>
            <a href="#info">
                <FontAwesomeIcon
                    className={props.classes.scroll_arrow}
                    icon={faAngleDown}
                />
            </a>
        </Column>
    )
}
export default ScrollArrow;