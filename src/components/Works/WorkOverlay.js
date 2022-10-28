import WorkLinks from './WorkLinks'
import WorkText from './WorkText';

const WorkOverlay = props => {
    return (
        <div className={props.classes.card_overlay}>
            <WorkLinks
                work={props.work}
                classes={props.classes}
            />
            <WorkText
                work={props.work}
                classes={props.classes}
            />
        </div>
    )
}

export default WorkOverlay