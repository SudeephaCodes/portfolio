import { useState } from 'react';
import './style.css';
import { Preloader } from './components/Preloader';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { CyberGrid } from './components/CyberGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Training } from './components/Training';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { ResumeIDE } from './components/ResumeIDE';
import { Footer } from './components/Footer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderComplete(true)} />
      <BackgroundOrbs />
      <CyberGrid />
      {preloaderComplete && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Training />
            <Achievements />
            <Education />
            <ResumeIDE />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
