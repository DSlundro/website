// Style
import classes from './scss/AboutMe.module.scss'
// Immagine
import profile from '../../assets/profile.jpg'
// Componenti UI
import { Section } from './../UI/Section';
import { Container } from '../UI/Container';
import { Row } from '../UI/Row';
import { Column } from '../UI/Column';
import { Title } from '../UI/Title';
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';
import { Paragraph } from './../UI/Paragraph';

const AboutMe = () => {
    return(
        <Section id='info'>
            <Container>
                <Row className={classes.ui_row}>
                    <Column className={classes.ui_column}>
                        <Image
                            src={profile} 
                            alt='profile'
                        />
                    </Column>

                    <Column className={classes.ui_column}>
                        <Title text='Junior Full Stack Web Developer'/>
                        <Paragraph>
                            La mia passione per la programmazione emerge durante le superiori, dove ho avuto la possibilità di avvicinarmi e conoscere questo nuovo mondo.<br/> 
                            Ero curioso di scoprire e di capire com'era possibile fare certe cose solo con un semplice click del mouse. Per varie motivazioni non ho avuto mai la possibilità di approfondire l'argomento. <br/>
                            Dopo un lungo periodo di insoddisfazioni lavorative ho deciso di dare una svolta alla mia vita.<br/> 
                            Ho lasciato il lavoro fisso per iniziare a dedicarmi a quello che mi piace, ovvero, la programmazione. <br/><br/>

                            Ho cominciato frequentando un bootcamp che mi ha permesso di capire le basi della programmazione, al termine del quale ho continuato e continuo ad approfondire le tecnologie che mi piacciono, facendo molta pratica sia con la parte grafica che con la parte logica.<br/><br/>

                            Tutti i miei progetti sono open source e possono essere visionati sul mio profilo &nbsp;
                            <Link
                                href='https://github.com/DSlundro' 
                                target='_blank' 
                                rel='noreferrer'
                                text='GitHub'
                            />
                        </Paragraph>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}
export default AboutMe;