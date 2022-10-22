export const Container = props => {
    return <div 
        className={`${props.className}
        md:max-w-[1300px] m-auto
    `}>
        {props.children}
    </div>
}