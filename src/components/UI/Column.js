export const Column = props => {
    return <div 
        className={`
        p-4 
        md:w-1/2 md:py-24 md:px-12
        ${props.className}
    `}>
        {props.children}
    </div>
}