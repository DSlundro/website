import classes from './scss/Pagination.module.scss'
import { useState, useEffect } from 'react';


const Pagination = ({ worksPerPage, totalWorks, paginate }) => {
    const [isActive, setIsActive] = useState(0);
    const [pages, setPages] = useState();

    // Set pages
    useEffect(() => {
        setPages(Math.ceil(totalWorks / worksPerPage))
    }, [totalWorks, worksPerPage, pages])

    // Set active class
    const setActiveHandler = index => {
        if(isActive === index) return '!text-white !bg-black';
    }
    
    // Get numbers on pages
    const pageNumbers = []
    for(let i = 1; i <= pages; i++) {
        pageNumbers.push(i)
    }


    return (
        <nav className={classes.pag_nav}>
            <ul className={classes.pag_list}>
                {
                    pageNumbers.map( (number, index) => {
                        return (
                            <li 
                                className={classes.pag_item}
                                key={number}
                            >
                                <a
                                    href="!#"
                                    className={`${setActiveHandler(index)} ${classes.pag_link}`}
                                    onClick={(e) =>{
                                        e.preventDefault()
                                        setIsActive(index)
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