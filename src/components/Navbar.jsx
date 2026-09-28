import logo from "../assets/JtLogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
        
        {/* Logo - Clickable to return home */}
        <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img className="mx-2 w-16 cursor-pointer transition-opacity hover:opacity-80" src={logo} alt="Portfolio logo" />
            </Link>
        </div>

        {/* Right Side Navigation & Socials */}
        <div className="mt-4 flex w-full items-center justify-between sm:mt-0 sm:w-auto sm:justify-end sm:gap-10">
            
            {/* Page Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link 
                to="/experience" 
                className="text-sm font-medium tracking-wide text-neutral-400 transition-colors hover:text-cyan-300"
              >
                Experience
              </Link>
              <Link 
                to="/side-projects" 
                className="text-sm font-medium tracking-wide text-neutral-400 transition-colors hover:text-cyan-300"
              >
                Projects
              </Link>
              <Link
                to="/inneros"
                className="text-sm font-medium tracking-wide text-neutral-400 transition-colors hover:text-cyan-300"
              >
                InnerOS
              </Link>
              <a 
                href="https://docs.google.com/document/d/1LnK-WJrYCZ_ytks7F0GuRN7vOxZZsAFPrzKxIffcCRc/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-neutral-400 transition-colors hover:text-cyan-300"
              >
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4 text-xl text-neutral-400 sm:text-2xl">
                <a 
                  href="https://github.com/amriikk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jeiti/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
                {/* Instagram: uncomment and import FaInstagram from react-icons/fa when ready
                <a 
                  href="https://www.instagram.com/vajra_veda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaInstagram />
                </a>
                */}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;