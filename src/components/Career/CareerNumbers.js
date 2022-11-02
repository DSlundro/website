// Componenti UI
import { Title } from './../UI/Title';
// Componenti esterni
import CountUp from 'react-countup'


const CareerNumbers = props => {
    return (
        <div className={props.classes.card_ele_container}>
            <Title className={props.classes.card_number}>
                <CountUp 
                    end={props.number} 
                    duration={3} 
                    enableScrollSpy={true}
                /> 
                {`${props.number === 0 ? '' : '+'}`}
            </Title>
        </div>
    )
}
export default CareerNumbers;