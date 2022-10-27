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
import ScrollArrow from './ScrollArrow';



const Jumbotron = props => {

    return (
        <Section className={classes.jumbotron}>
            <Particelle classes={classes}/>
            <Container className={classes.ui_container}>
                <Row className={classes.ui_row}>
                    <Avatar classes={classes} />
                    <Name classes={classes}/>
                    <Title classes={classes}/>
                    <Socials classes={classes}/>
                    <ScrollArrow classes={classes}/>
                </Row>
            </Container>
        </Section>
    )
}
export default Jumbotron;