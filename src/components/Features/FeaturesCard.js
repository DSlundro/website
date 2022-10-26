// Style
import classes from './scss/FeaturesCard.module.scss'
// Componenti UI
import { Paragraph } from './../UI/Paragraph';
import { SubTitle } from '../UI/SubTitle';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const FeaturesCard = props => {
    return (
        <div className={classes.features_card}>
                {props.data.map( item => {
                    return (
                        <div 
                            key={item.name}
                            className={classes.item}
                        >
                            <FontAwesomeIcon 
                                icon={item.icon} 
                                className={classes.item_icon}
                            />
                            <SubTitle
                                text={item.name}
                            />
                            <Paragraph>
                                {item.description}
                            </Paragraph>
                        </div>
                    )
                })}
        </div>
    )
}