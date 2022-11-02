import classes from './scss/UI.module.scss'

export const Row = props => {
    return <div 
    className={`${classes.ui_row} ${props.className !== undefined ? props.className : ''} `}
    >
        {props.children}
    </div>
}