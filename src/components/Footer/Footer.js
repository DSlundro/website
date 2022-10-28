import { Column } from "../UI/Column"
import { Row } from "../UI/Row"
import { Section } from "../UI/Section"
import { Link } from "../UI/Link"

import { socials } from "../../Data/socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "../UI/Container"
import { Paragraph } from "../UI/Paragraph"

import classes from './scss/Footer.module.scss'

const Footer = props => {
    const year = new Date().getFullYear();
    const copyright = (<span>&#xa9;</span>).props.children

    return (
        <Section className={classes.footer_section}>
            <Container>
                <Row className={classes.footer_row}>
                    <Column className={classes.footer_socials}>
                        {socials.map( social => {
                            return (
                                <Link
                                    href={social.link}
                                    target='_blank'
                                    key={social.name}
                                >
                                    <FontAwesomeIcon
                                        className={classes.footer_icon} 
                                        icon={['fab', social.icon]} 
                                    />
                                </Link>
                            )
                        })}
                    </Column>
                    
                    <Column className={classes.footer_copyright}>
                        <Paragraph
                            text={`${copyright} Copyright ${year}`}
                        />
                        <Paragraph
                            text='Sviluppato da Dragan Savic'
                        />
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}
export default Footer;