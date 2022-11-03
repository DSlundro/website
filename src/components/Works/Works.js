// Hooks
import { useState, useEffect } from "react"
// Componenti UI
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Title } from "../UI/Title";
// Componenti
import WorkCard from './WorkCard/WorkCard';
import Pagination from "./Pagination";
import SelectingList from "./SelectingList";
// Data
import { worksList } from '../../Data/works';
// Style
import classes from './scss/Works.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Works = () => {
    const [works, setWorks] = useState([]);
    const [totalWorks, setTotalWorks] = useState();
    const [currentWorks, setCurrentWorks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [worksPerPage] = useState(6);
    const [selectedTech, setSelectedTech] = useState(0);

    const indexOfLastWork = currentPage * worksPerPage;
    const indexOfFirstPost = indexOfLastWork - worksPerPage;

    // Get all works
    useEffect(() => {
        const filteredWorks = worksList.filter( work => work.tech_id === selectedTech)
        setWorks(selectedTech ? filteredWorks : worksList)
    },[selectedTech])
    
    // Get number of total works
    useEffect(() => {
        setTotalWorks(works.length)
    },[works])
    
    // Get current works
    useEffect(() => {
        setCurrentWorks(works.slice(indexOfFirstPost, indexOfLastWork))
    },[works, indexOfFirstPost, indexOfLastWork])

    // Change page
    const paginate = (pageNumber) => {setCurrentPage(pageNumber)}

    // Change tech
    const selectingTech = (selectedTech) => {setSelectedTech(selectedTech)}


    return (
        <Section id='progetti'>
                <AnimationOnScroll
                    animateIn='scroll_animation'
                    animateOnce={true}
                >
                <Container>
                    <Row className={classes.works_row}>
                        <Title
                            className={classes.works_title}
                            text='Progetti'
                        />
                        <SelectingList
                            selectedTech={selectingTech}
                        />
                        <WorkCard 
                            currentWorks={currentWorks}
                        />
                        <Pagination 
                            worksPerPage={worksPerPage}
                            totalWorks={totalWorks}
                            paginate={paginate}
                        />
                    </Row>
                </Container>
            </AnimationOnScroll>
        </Section>
    )
}

export default Works;