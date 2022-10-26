import classes from './scss/UI.module.scss'

export const Section = props => {
    return <section 
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_section}`}
    >{props.children}</section>
}