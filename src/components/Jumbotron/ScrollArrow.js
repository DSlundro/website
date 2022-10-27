import { Column } from "../UI/Column"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const ScrollArrow = props => {
    return (
        <Column>
            <FontAwesomeIcon
                className={props.classes.scroll_arrow}
                icon={faAngleDown}
            />
        </Column>
    )
}
export default ScrollArrow;