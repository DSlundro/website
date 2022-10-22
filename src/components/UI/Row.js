export const Row = props => {
    return <div 
        className={`${props.className}
        flex flex-col flex-wrap py-24 
        md:py-0 md:px-12 md:flex-row
    `}>
        {props.children}
    </div>
}