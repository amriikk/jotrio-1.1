import logo from "../assets/JtLogo.png";
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";
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
        <div className="flex items-center gap-6 sm:gap-10">
            
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
                Side Projects
              </Link>
            </div>

            {/* Social Icons */}
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
                  href="https://www.linkedin.com/in/jhonkhrizhtian/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="#" 
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://drive.google.com/file/d/11Lre1BHf93iwQby2UPbUyx63PGyu6ZJp/view?usp=sharing" 
                  target="_blank" 
                  download 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  <FaFilePdf />
                </a>
            </div>
            
        </div>
    </nav>
  );
};

export default Navbar;