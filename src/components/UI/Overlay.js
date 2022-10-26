import classes from './scss/UI.module.scss'

export const Overlay = props => {
    return <div className={`${props.className !== undefined ? props.className : ''} ${classes.ui_overlay}`}>
        {props.children}
    </div>
}