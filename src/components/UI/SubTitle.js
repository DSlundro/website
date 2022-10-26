import classes from './scss/UI.module.scss'

export const SubTitle = props => {
    return <h4
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_subtitle}`}
    >{props.text}</h4>
}