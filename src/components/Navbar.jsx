import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-500">
          Vishwesh Pandey
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li>
            <a href="#skills" className="hover:text-blue-500">
            Skills
            </a>
            </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
            Projects
            </a>
            </li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
          >
         {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/vishwesh-pandey-1"
          target="_blank">
            <FaGithub className="hover:text-blue-500" />
          </a>

          <a href="https://www.linkedin.com/in/vishwesh-pandey-53ab472b0/"
          target="_blank">
            <FaLinkedin className="hover:text-blue-500" />
          </a>
        </div>

      </div>
      {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-black text-white px-8 py-6">

    <ul className="flex flex-col gap-6 text-lg">

      <li>
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-500"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-500"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-500"
        >
          Skills
        </a>
      </li>

      <li>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-500"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-500"
        >
          Contact
        </a>
      </li>

    </ul>

  </div>
)}
    </nav>
  );
}

export default Navbar;