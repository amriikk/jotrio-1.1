import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import SideProjects from "./components/SideProjects";
import CompetencyPage from "./components/CompetencyPage";
import AnimatedBackground from "./components/ui/animated-background"; 

const MainPortfolio = () => (
  <>
    <Hero />
    <About />
    <Technologies />
    <Experiences />
    <Projects />
    <SideProjects />
    <Contact />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
        {/* Replaced the static radial gradient div with the new component */}
        <AnimatedBackground />

        <div className="container mx-auto px-8">
          <Navbar /> 
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/competency/:id" element={<CompetencyPage />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;