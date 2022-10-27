import { AboutMe } from "./components/AboutMe/AboutMe";
import { Features } from "./components/Features/Features";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <>  
            <Navbar />
            <Jumbotron />
            <AboutMe />
            <Features />
        </>
    );
}

export default App;
