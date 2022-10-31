import classes from './scss/Pagination.module.scss'
import { useState } from 'react';


const Pagination = ({ worksPerPage, totalWorks, paginate }) => {
    const [isActive, setIsActive] = useState(0);

    const setActiveHandler = index => {
        if(isActive === index) return '!text-white !bg-black';
    }
    
    const pages = Math.ceil(totalWorks / worksPerPage)
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