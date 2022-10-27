import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './scss/CareerIcon.module.scss'

const CareerIcon = props => {
    return (
        <div className='flex-center'>
            <FontAwesomeIcon
                className={classes.career_icon}
                icon={props.icon}
            />
        </div>
    )
}
export default CareerIcon;