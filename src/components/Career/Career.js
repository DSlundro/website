
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';


import classes from './scss/Career.module.scss'
import CareerIcon from './CareerIcon';
import CareerNumbers from './CareerNumbers';
import CareerName from './CareerName';
// Data
import { careers } from '../../Data/careers';
import { Overlay } from './../UI/Overlay';
import { AnimationOnScroll } from 'react-animation-on-scroll';




const Career = props => {
    return (
        <Section className={classes.career_section}>
            <Overlay className='!absolute top-0 !h-full !z-0'/>
            <AnimationOnScroll
                animateIn='opacity-1 -translate-y-6 transition-all duration-700'
                animateOnce={true}
            >
            <Container className='!z-10 relative'>
                <Row className='flex'>
                    <Column className={classes.career_column}>
                        {
                            careers.map( e => {
                                return (
                                    <div 
                                        className='py-6 w-full h-full flex-col !justify-start !items-start'
                                        key={e.name}
                                    >
                                        <CareerIcon icon={e.icon}/>
                                        <CareerNumbers number={e.number}/>
                                        <CareerName name={e.name}/>
                                    </div>
                                )
                            })
                        }
                    </Column>
                </Row>
            </Container>
        </AnimationOnScroll>
    </Section>
    )
}
export default Career;