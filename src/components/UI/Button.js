
export const Button = props => {

    return (
        <button
            href={props.href}
            target={props.target}
            className={`
            px-10 py-3 rounded-full font-bold
            bg-secondary text-white border border-secondary
            hover:bg-white hover:text-secondary hover:border
            ${props.className}`
        }>
            {props.text}
        </button>
    )
}