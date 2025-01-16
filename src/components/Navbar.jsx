import logo from "../assets/JtLogo.png";
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className= "mx-2 w-16" src= {logo} alt="Portfolio logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/amriikk" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jhonkhrizhtian/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href='https://drive.google.com/file/d/11Lre1BHf93iwQby2UPbUyx63PGyu6ZJp/view?usp=sharing' target="_blank" download>
              <FaFilePdf />
            </a>
        </div>
    </nav>
  );
};

export default Navbar;