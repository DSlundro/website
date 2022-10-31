// Hooks
import { useState, useEffect } from "react"
// Componenti
import WorkCard from './WorkCard';
import Pagination from "./Pagination";
// Data
import { worksList } from '../../Data/works';
import { Section } from './../UI/Section';
import { Container } from './../UI/Container';
import { Row } from './../UI/Row';
import { Title } from "../UI/Title";


const Works = () => {
    const [works, setWorks] = useState([]);
    const [currentWorks, setCurrentWorks] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [worksPerPage] = useState(9);

    useEffect(() => {
            setWorks(worksList);
    },[])

    const totalWorks = works.length
    
    // Get current works
    useEffect(() => {
        const indexOfLastWork = currentPage * worksPerPage;
        const indexOfFirstPost = indexOfLastWork - worksPerPage;
        setCurrentWorks(works.slice(indexOfFirstPost, indexOfLastWork))
    },[works, currentPage, worksPerPage])

    // Change page
    const paginate = (pageNumber) => {setCurrentPage(pageNumber)}

    return (
        <Section id='progetti'>
            <Container>
                <Row className='md:!p-24 px-4 flex !flex-col items-center justify-center gap-4 min-h-min'>
                    <Title
                        className='pb-7 !text-[46px] uppercase'
                        text='Progetti'
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
        </Section>
    )
}

export default Works;