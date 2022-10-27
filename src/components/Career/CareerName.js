import { SubTitle } from './../UI/SubTitle';

const CareerName = props => {
    return (
        <div className='flex-center'>
            <SubTitle 
                className='!text-white text-center'
                text={props.name}
            />
        </div>
    )
}
export default CareerName;