import classes from './scss/UI.module.scss'

export const Title = props => {
    return <h3
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_title}`}
    >{props.text}</h3>
}