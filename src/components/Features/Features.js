// Style
import classes from './scss/Features.module.scss';
// Immagine
import responsive from '../../assets/responsive.jpg';
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


export const Features = () => {
    
    return (
        <Section className={classes.features}>
            <Container>
                <Row>
                    <Column className={classes.features_text}>
                        <Title
                            text='La migliore creatività è il risultato di buone abitudini lavorative.'
                        />
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
        </Section>
    )
};