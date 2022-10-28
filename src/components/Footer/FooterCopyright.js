
import { Column } from './../UI/Column';
import { Paragraph } from './../UI/Paragraph';

const FooterCopyright = props => {
    const year = new Date().getFullYear();
    const copyright = (<span>&#xa9;</span>).props.children

    return (
        <Column className={props.classes.footer_copyright}>
            <Paragraph
                text={`${copyright} Copyright ${year}`}
            />
            <Paragraph
                text='Sviluppato da Dragan Savic'
            />
        </Column>
    )
}
export default FooterCopyright;