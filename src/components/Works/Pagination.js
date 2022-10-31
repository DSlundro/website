import classes from './scss/Pagination.module.scss'
import { useState } from 'react';


const Pagination = ({ worksPerPage, totalWorks, paginate }) => {
    const [id, setId] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    });

    const toggleActive = index => {
        setId({...id, active: id.objects[index] })
    }

    const toggleActiveClass = index => {
        if(id.objects[index] === id.active) return '!text-white !bg-black';
    }

    const pageNumbers = []
    const pages = Math.ceil(totalWorks / worksPerPage)

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
                                    className={`${toggleActiveClass(index)} ${classes.pag_link}`}
                                    onClick={(e) =>{
                                        toggleActive(index)
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