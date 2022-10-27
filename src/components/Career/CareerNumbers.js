import { Title } from './../UI/Title';
import CountUp from 'react-countup'



const CareerNumbers = props => {
    return (
        <div className='flex-center py-3'>
            <Title 
                className='!m-0 !my-2 text-white'
            >
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