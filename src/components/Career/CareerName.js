// Componenti UI
import { SubTitle } from './../UI/SubTitle';


const CareerName = props => {
    return (
        <div className={props.classes.card_ele_container}>
            <SubTitle 
                className={props.classes.card_name}
                text={props.name}
            />
        </div>
    )
}
export default CareerName;