import AboutMe from "./components/AboutMe/AboutMe";
import Features from "./components/Features/Features";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Career from './components/Career/Career';
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Works from './components/Works/Works';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
    return (
        <>  
            <header>
                <Navbar />
            </header>
            <main>
                <ScrollToTop />
                <Jumbotron />
                <AboutMe />
                <Features />
                <Career />
                <Works />
                <Map /> 
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
