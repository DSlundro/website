import classes from './scss/UI.module.scss'

export const Column = props => {

    return <div 
        className={`${classes.ui_column} ${props.className !== undefined ? props.className : ''}`}
        >
        {props.children}
    </div>
}