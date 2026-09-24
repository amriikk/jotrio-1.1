import logo from "../assets/JtLogo.png";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
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

        {/* Right Side Navigation & Socials (drops to its own row on phones) */}
        <div className="order-3 flex w-full items-center gap-6 sm:order-2 sm:ml-auto sm:w-auto sm:gap-10">
            
            {/* Page Links */}
            <div className="flex items-center gap-6">
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
                {/* Instagram: add back (and re-import FaInstagram) once the account is ready
                <a 
                  href="https://www.instagram.com/HANDLE/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaInstagram />
                </a>
                */}
            </div>
        </div>

        {/* Resume - beside the logo on phones, end of the nav on larger screens */}
        <a 
          href="https://docs.google.com/document/d/1LnK-WJrYCZ_ytks7F0GuRN7vOxZZsAFPrzKxIffcCRc/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="order-2 flex items-center gap-2 rounded-full border border-cyan-800 bg-cyan-900/40 px-4 py-1.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-900/60 hover:text-cyan-100 sm:order-3 sm:ml-6"
        >
          <FaFilePdf className="h-3.5 w-3.5" />
          Resume
        </a>
    </nav>
  );
};

export default Navbar;