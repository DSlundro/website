import classes from './scss/UI.module.scss'

export const Row = props => {
    return <div 
    className={`${props.className !== undefined ? props.className : ''} ${classes.ui_row}`}
    >
        {props.children}
    </div>
}