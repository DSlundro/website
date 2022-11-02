import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CareerIcon = props => {
    return (
        <div className={props.classes.card_ele_container}>
            <FontAwesomeIcon
                className={props.classes.card_icon}
                icon={props.icon}
            />
        </div>
    )
}
export default CareerIcon;