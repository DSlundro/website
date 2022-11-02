// Hooks
import { useState, useEffect } from 'react';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// Style
import classes from './scss/ScrollToTop.module.scss'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    // Show button
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 1000 ? setShowButton(true) : setShowButton(false)
        })
    },[])

    // Go to top
    const goToTop = () => {window.scrollTo({top: 0})}

    return (
        <>
            {
                showButton &&
                <button
                    onClick={goToTop}
                    className={classes.scroll_up}
                >
                    <FontAwesomeIcon
                        icon={faAngleUp}
                    />
                </button>
            }
        </>
    )
}

export default ScrollToTop