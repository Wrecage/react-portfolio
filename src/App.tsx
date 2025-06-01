import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import MorphingBackground from "./components/MorphingBackground";


function App() {
  
  return (
    <>
      <ScrollProgress />
      <Router>
        <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen text-gray-900 dark:text-white">
          <MorphingBackground />
          <Navbar />
          <main>
            <CustomCursor />
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;