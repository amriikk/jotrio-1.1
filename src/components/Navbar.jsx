import logo from "../assets/jotrLogo.png"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src= {logo} alt="Portfolio logo" />
        </div>
    </nav>
  );
};

export default Navbar;