// Style
import classes from './scss/Features.module.scss'
// Immagine
import responsive from '../../assets/responsive.jpg';
// Componenti
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';
import { features } from "../../Storage/features";
import { FeaturesCard } from './FeaturesCard';
import { Image } from './../UI/Image';


const Features = props => {
    
    return (
        <Section className={classes.features}>
            <Container>
                <Row>
                    <Column className={classes.features_text}>
                        <h3>
                            La migliore creatività è il risultato di buone abitudini lavorative.
                        </h3>
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
export default Features;