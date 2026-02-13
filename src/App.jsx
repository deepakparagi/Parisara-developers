
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import StickyCTA from './components/layout/StickyCTA';
import Loader from './components/layout/Loader';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ScheduleVisit from './pages/ScheduleVisit';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time to show the brand loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Router>
        <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-slate-950 font-sans text-slate-700 dark:text-stone-300 transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule-visit" element={<ScheduleVisit />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <StickyCTA />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
