// Style
import classes from './scss/WorksCard.module.scss'
// Componenti
import { Image } from './../UI/Image';
import WorkOverlay from './WorkOverlay';
import placeholder from '../../assets/placeholder.jpg';


const WorkCard = props => {


    return (
        <ul className={classes.card}>
        {
            props.currentWorks.map( work => {
                return (
                    <li 
                        className={classes.card_list}
                        key={work.id}
                    >
                        <Image
                            src={work.image ? work.image : placeholder}
                            alt={work.title}
                        />
                        <WorkOverlay 
                            work={work}
                            classes={classes}
                        />
                    </li>
                )
            })
        }
    </ul>
    )
}

export default WorkCard