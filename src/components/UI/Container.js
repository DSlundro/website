import classes from './scss/UI.module.scss'

export const Container = props => {
    return <div 
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_container}`}
    >
        {props.children}
    </div>
}