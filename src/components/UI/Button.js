import classes from './scss/UI.module.scss'


export const Button = props => {

    return (
        <button
            href={props.href}
            target={props.target}
            className={`${props.className !== undefined ? props.className : ''} ${classes.ui_button}`}
        >
            {props.text}
        </button>
    )
}