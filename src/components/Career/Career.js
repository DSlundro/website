// Componenti UI
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';
import { Overlay } from './../UI/Overlay';
// Componenti
import CareerCard from './CareerCard';
// Componenti esterni
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Style
import classes from './scss/Career.module.scss'
// Data
import { careers } from '../../Data/careers';


const Career = props => {
    return (
        <Section className={classes.career_section}>
            <Overlay className={classes.career_overlay} />
            <AnimationOnScroll
                animateIn='scroll_animation'
                animateOnce={true}
            >
            <Container className={classes.career_container}>
                <Row className={classes.career_row}>
                    <Column className={classes.career_column}>
                        {
                            careers.map( (career, index) => {
                                return (
                                    <CareerCard 
                                        key={index}
                                        career={career} 
                                    />
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