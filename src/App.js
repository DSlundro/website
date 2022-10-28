import AboutMe from "./components/AboutMe/AboutMe";
import Features from "./components/Features/Features";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Career from './components/Career/Career';
import Map from "./components/Map/Map";


function App() {
    return (
        <>  
            <Navbar />
            <Jumbotron />
            <AboutMe />
            <Features />
            <Career />
            <Map /> 
        </>
    );
}

export default App;
