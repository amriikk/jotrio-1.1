import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/ui/animated-background"; 
import About from "./components/About";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Technologies from "./components/Technologies";
import SideProjects from "./components/SideProjects";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
import CompetencyPage from "./components/CompetencyPage";

const MainPortfolio = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Technologies />
    <Contact />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
        <AnimatedBackground />

        <div className="container mx-auto px-8">
          <Navbar /> 
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/competency/:id" element={<CompetencyPage />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/images" element={<ImageGallery />} />
            <Route path="/gallery" element={<VideoGallery />} />
            <Route path="/side-projects" element={<SideProjects />} /> 
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;