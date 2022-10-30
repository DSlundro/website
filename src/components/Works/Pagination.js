import classes from './scss/Pagination.module.scss'


const Pagination = ({ worksPerPage, totalWorks, paginate }) => {
    const pageNumbers = []
    const pages = Math.ceil(totalWorks / worksPerPage)

    for(let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={classes.pag_nav}>
            <ul className={classes.pag_list}>
                {
                    pageNumbers.map( number => {
                        return (
                            <li 
                                className={classes.pag_item}
                                key={number}
                            >
                                <a
                                    href="!#"
                                    className={classes.pag_link}
                                    onClick={(e) =>{
                                        e.preventDefault()
                                        paginate(number)
                                    }}
                                >
                                    {number}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Pagination