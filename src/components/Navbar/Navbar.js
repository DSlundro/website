// Hooks
import { useEffect, useState } from "react"
// Componenti
import { Overlay } from './../UI/Overlay';
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
// Style
import classes from './scss/Navbar.module.scss'
// Data
import { links } from "../../Data/navbar";


const Navbar = props => {
    const [open, setOpen] = useState(false);
    const onMenuClose = () => {
        if (open) {
            setOpen(false)
        }else {
            return;
        }
    }
    const onMenuToggle = () => {
        open ? setOpen(false) : setOpen(true)
    }


    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        const handlerScrollPosition = () => {
            const position = window.scrollY + 190;
            setScrollPosition(position)
        }
        window.addEventListener('scroll', handlerScrollPosition)

        return () => {
            window.removeEventListener('scroll', handlerScrollPosition)
        }
    },[scrollPosition])
    
    
    const [screenPosition, setScreenPosition] = useState(0)
    useEffect(() => {
        const handlerScreenPosition = () => {
            const position = window.screen.height;
            setScreenPosition(position)
        }
        window.addEventListener('scroll', handlerScreenPosition)

        return () => {
            window.removeEventListener('scroll', handlerScreenPosition)
        }
    },[screenPosition])
    
    console.log('ciao');

    return (
        <>
            {
                open && <Overlay onClick={onMenuClose}/>
            }
            <section className={`
            ${scrollPosition > screenPosition  ? 'md:bg-white md:shadow-md' : ''}
            ${classes.nav_section}`}>
                <nav className={classes.nav_navbar}>
                    <div 
                        onClick={onMenuToggle}
                        className={classes.nav_icon}>
                        <span >
                        <FontAwesomeIcon
                            className={`${scrollPosition > screenPosition ? '!text-black' : 'text-white'}`}
                            onClick={onMenuToggle}
                            icon={open ? faXmark : faBars}
                        />

                        </span>
                    </div>
                    <ul className={`${open ? '!top-20 !opacity-100' : '!top-[-250px]'} ${classes.nav_ul}`}>
                        {
                            links.map( link => {
                                return (
                                    <li 
                                        onClick={onMenuClose}
                                        key={link.name}
                                        className={classes.nav_li}
                                    >
                                        <a 
                                            href={link.link} 
                                            className={`
                                            ${scrollPosition > screenPosition ? 'md:!text-primary' : 'md:!text-white'}
                                            ${classes.nav_link}`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </section>
        </>
    )
}
export default Navbar;