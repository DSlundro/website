import { Column } from "../UI/Column";
import { Paragraph } from "../UI/Paragraph";

const Title = props => {
    return (
        <Column>
            <Paragraph
                className={props.classes.title}
                text='Junior Full Stack Web Developer'
            />
        </Column>
    )
}
export default Title;