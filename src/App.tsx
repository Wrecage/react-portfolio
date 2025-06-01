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
        <div className="min-h-screen text-[var(--color-content)] bg-[var(--color-background)]
          border border-[var(--color-muted)] shadow-md dark:shadow-[0_0_30px_#1e29">
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