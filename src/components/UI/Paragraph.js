import classes from './scss/UI.module.scss'

export const Paragraph = props => {
    return <p
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_paragraph}`}
    >{props.children ? props.children : props.text}</p>
}