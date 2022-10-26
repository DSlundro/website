// Style
import classes from './scss/FeaturesCard.module.scss'
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const FeaturesCard = props => {
    return (
        <div className={classes.features_card}>
                {props.data.map( item => {
                    return (
                        <div className={classes.item}>
                            <FontAwesomeIcon 
                                icon={item.icon} 
                                className={classes.item_icon}
                            />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
        </div>
    )
}