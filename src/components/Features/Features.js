import classes from './scss/Features.module.scss'
import { features } from "../../Storage/features";
import { Section } from './../UI/Section';
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';
import { FeaturesCard } from './FeaturesCard';
import responsive from '../../assets/responsive.jpg';
import { Container } from './../UI/Container';


const Features = () => {
    
    return (
        <Section className={classes.features}>
            <Container>
                <Row>
                    <Column className={classes.features_text}>
                        <h3 className="font-bold my-4">
                            La migliore creatività è il risultato di buone abitudini lavorative.
                        </h3>
                        <FeaturesCard data={features}/>
                    </Column>

                    <Column className={classes.features_image}>
                        <img src={responsive} alt='responsive'/>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
};
export default Features;