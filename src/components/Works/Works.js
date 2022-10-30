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

const Works = () => {
    const [works, setWorks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [worksPerPage] = useState(9);

    useEffect(() => {
            setWorks(worksList);
    }, [])
    
    // Get current works
    const indexOfLastWork = currentPage * worksPerPage;
    const indexOfFirstPost = indexOfLastWork - worksPerPage;
    const currentWorks = works.slice(indexOfFirstPost, indexOfLastWork)
    const totalWorks = works.length

    // Change page
    const paginate = (pageNumber) => {setCurrentPage(pageNumber)}

    return (
        <Section id='progetti'>
            <Container>
                <Row className='md:!p-24 px-4 flex justify-center gap-4'>
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