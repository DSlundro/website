// Componenti UI
import { Column } from "../UI/Column";
import { Image } from "../UI/Image";
// Immagine
import avatar from '../../assets/avatar.jpg'

const Avatar = props => {
    return (
        <Column className={props.classes.ui_column}>
            <Image 
                src={avatar}
                className={props.classes.avatar}
            />
        </Column>
    )
}
export default Avatar;