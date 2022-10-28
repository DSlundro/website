// Componenti UI
import { Section } from "../UI/Section"
import { Container } from "../UI/Container"
import { Row } from "../UI/Row"
// Componenti
import FooterSocial from "./FooterSocial"
// Style
import classes from './scss/Footer.module.scss'
import FooterCopyright from "./FooterCopyright"

const Footer = props => {

    return (
        <Section className={classes.footer_section}>
            <Container>
                <Row className={classes.footer_row}>
                    <FooterSocial classes={classes} />
                    <FooterCopyright classes={classes} />
                </Row>
            </Container>
        </Section>
    )
}
export default Footer;