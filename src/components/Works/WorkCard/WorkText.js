
import { Paragraph } from '../../UI/Paragraph';
import { Title } from '../../UI/Title';

const WorkText = props => {
    return (
        <div className={props.classes.card_text}>
            <Title 
                className={props.classes.card_title}
                text={props.work.title}
            />
            <Paragraph 
                className={props.classes.card_tech} 
                text={props.work.techs}
            />
        </div>
    )
}

export default WorkText