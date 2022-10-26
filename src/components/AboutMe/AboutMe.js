
// Immagine
import profile from '../../assets/profile.jpg'
// Componenti
import { Section } from './../UI/Section';
import { Container } from '../UI/Container';
import { Row } from '../UI/Row';
import { Column } from '../UI/Column';
import { Title } from '../UI/Title';

export const AboutMe = props => {
    return(
        <Section>
            <Container>
                <Row>
                    <Column>
                        <img src={profile} alt='profile'/>
                    </Column>

                    <Column className='md:pt-24'>
                        <Title text='Junior Full Stack Web Developer'/>
                        <p>
                        La mia passione per la programmazione emerge durante le superiori, dove ho avuto la possibilità di avvicinarmi e conoscere questo nuovo mondo.<br/> 
                        Ero curioso di scoprire e di capire com'era possibile fare certe cose solo con un semplice click del mouse. Per varie motivazioni non ho avuto mai la possibilità di approfondire l'argomento. <br/>
                        Dopo un lungo periodo di insoddisfazioni lavorative ho deciso di dare una svolta alla mia vita.<br/> 
                        Ho lasciato il lavoro fisso per iniziare a dedicarmi a quello che mi piace, ovvero, la programmazione. <br/><br/>

                        Ho cominciato frequentando un bootcamp che mi ha permesso di capire le basi della programmazione, al termine del quale ho continuato e continuo ad approfondire le tecnologie che mi piacciono, facendo molta pratica sia con la parte grafica che con la parte logica.<br/><br/>

                        Tutti i miei progetti sono open source e possono essere visionati sul mio profilo &nbsp;
                            <a 
                                href='https://github.com/DSlundro' 
                                target='_blank' 
                                rel='noreferrer'>
                                GitHub
                            </a>
                        </p>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}