import AboutMe from "./components/AboutMe/AboutMe";
import Features from "./components/Features/Features";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Career from './components/Career/Career';


function App() {
    return (
        <>  
            <Navbar />
            <Jumbotron />
            <AboutMe />
            <Features />
            <Career />
        </>
    );
}

export default App;
