// Componenti
import CareerIcon from './CareerIcon';
import CareerNumbers from './CareerNumbers';
import CareerName from './CareerName';
// Style
import classes from './scss/CareerCard.module.scss'


const CareerCard = ({career, index}) => {
    return (
        <div 
            className={classes.career_card}
            key={index}
        >
            <CareerIcon 
                classes={classes}
                icon={career.icon}
            />
            <CareerNumbers 
                classes={classes}
                number={career.number}
            />
            <CareerName 
                classes={classes}
                name={career.name}
            />
        </div>
    )
}

export default CareerCard