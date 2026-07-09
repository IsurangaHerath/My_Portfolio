import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}
