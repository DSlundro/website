// Style
import classes from './scss/Jumbotron.module.scss'
// Componenti UI
import { Section } from "../UI/Section";
import { Container } from "../UI/Container";
import { Row } from "../UI/Row";
// Componenti
import Avatar from './Avatar';
import Name from './Name';
import Title from './Title';
import Socials from './Socials';
import Particelle from './Particelle';



const Jumbotron = props => {


    return (
        <Section className={classes.jumbotron}>
            <Particelle className={classes.particelle}/>
            <Container className={classes.ui_container}>
                <Row className={classes.ui_row}>
                    <Avatar classes={classes} />
                    <Name classes={classes}/>
                    <Title />
                    <Socials classes={classes}/>
                </Row>
            </Container>
        </Section>
    )
}
export default Jumbotron;