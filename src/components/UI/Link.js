import classes from './scss/UI.module.scss'

export const Link = props => {
    return <a
        href={props.href}
        alt={props.alt}
        target={props.target}
        rel={props.rel}
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_link}`}
    >
        {props.text ? props.text : props.children}
    </a>
}