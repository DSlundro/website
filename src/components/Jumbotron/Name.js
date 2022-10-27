import { Column } from "../UI/Column";
import { Title } from "../UI/Title";

const Name = props => {
    const fullName = 'Dragan Savic'

    return (
        <Column>
            <Title 
                className={props.classes.name}
                text={fullName}
            />
        </Column>
    )
}
export default Name;