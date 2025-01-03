import logo from "../assets/JtLogo.png";
import { FaGithub} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className= "mx-2 w-16" src= {logo} alt="Portfolio logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  );
};

export default Navbar;