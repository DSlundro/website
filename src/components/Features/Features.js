// Style
import classes from './scss/Features.module.scss';
// Immagine
import responsive from '../../assets/responsive.png';
// Componenti UI
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';
import { Title } from '../UI/Title';
import { Image } from './../UI/Image';
// Componenti
import { FeaturesCard } from './FeaturesCard';
// Data
import { features } from "../../Data/features";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Features = () => {
    
    return (
        <Section id='servizi' className={classes.features}>
            <AnimationOnScroll
                animateIn='scroll_animation'
                animateOnce={true}
            >
            <Container className={classes.features_container}>
                <Row className={classes.features_row}>
                    <Column className={classes.features_title}>
                        <Title
                            text='Servizi'
                        />
                    </Column>
                    <Column className={classes.features_text}>
                        <FeaturesCard data={features}/>
                    </Column>

                    <Column className={classes.features_image}>
                        <Image
                            src={responsive}
                            alt='responsive'
                        />
                    </Column>
                </Row>
            </Container>
        </AnimationOnScroll>
    </Section>
    )
};
export default Features;