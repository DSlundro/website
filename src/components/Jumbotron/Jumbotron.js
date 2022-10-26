// Style
import classes from './scss/Jumbotron.module.scss'
// Componenti UI
import { Column } from "../UI/Column";
import { Container } from "../UI/Container";
import { Image } from "../UI/Image";
import { Row } from "../UI/Row";
import { Section } from "../UI/Section";
import { Title } from '../UI/Title';
import { Paragraph } from './../UI/Paragraph';
import { Link } from './../UI/Link';
// Immagine
import avatar from '../../assets/avatar.jpg'
// Data
import { socials } from '../../Data/socials';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Jumbotron = props => {
    return (
        <Section className={classes.jumbotron}>
            <Container className={classes.ui_container}>
                <Row className={classes.ui_row}>
                    <Column className={classes.ui_column}>
                        <Image 
                            src={avatar}
                            className={classes.avatar}
                        />
                    </Column>

                    <Column>
                        <Paragraph
                            text='Benvenuti'
                        >
                        </Paragraph>
                    </Column>

                    <Column>
                        <Title 
                            text='Mi chiamo Dragan Savic'
                        />
                    </Column>

                    <Column>
                        <Paragraph
                            text='Junior Full Stack Web Developer'
                        />
                    </Column>

                    <Column>
                        <div className={classes.socials}>
                            {socials.map( social => {
                                return (
                                    <Link
                                        className={classes.link}
                                        href={social.link}
                                        target='_blank'
                                        key={social.name}
                                    >
                                        <FontAwesomeIcon 
                                            icon={['fab', social.icon]} 
                                            className={classes.icon}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}
export default Jumbotron;