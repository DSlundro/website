import classes from './scss/UI.module.scss'

export const Image = props => {
    return <img 
        src={props.src} 
        alt={props.alt}
        className={`${props.className !== undefined ? props.className : ''} ${classes.ui_image}`}
    />
}