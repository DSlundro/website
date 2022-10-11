import classes from './css/Features.module.scss'
import { features } from "../../Storage/features";
import { Section } from './../UI/Section';
import { Container } from "../UI/Container";
import { Row } from './../UI/Row';
import { Column } from './../UI/Column';
import { Card } from './FeaturesCard';


const Features = () => {
    
    return (
        <Section className={classes.features}>
            <Container className={classes.new_container}>
                <Row className={classes.new_row}>
                    <Column>
                        <h5 className="text-secondary">Creative Solutions</h5>
                        <h3 className="font-bold my-4">The best creativity is the result of good work habits.</h3>
                        <Card data={features}/>
                    </Column>

                    <Column></Column>
                </Row>
            </Container>
        </Section>
    )
};
export default Features;