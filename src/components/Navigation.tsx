import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";
import { CgMenuRight } from "react-icons/cg";
import Button from "../reusableComponents/Button";

// Navigation component
const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <nav className={`bg-gray-700 text-white fixed top-0 left-0 w-full ${darkMode? "bg-gray-900" : "bg-gray-700"}`}>
      <div className="max-w-8xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              My Portfolio
            </a>
            <Button onClick = {() => dispatch(toggleTheme())} className="bg-blue-500 text-white px-4 py-2 rounded">{darkMode? "LightMode" : "Dark Mode"}</Button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button onClick={toggleMenu}><CgMenuRight /></Button>
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden transition ease-out duration-200 opacity-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-300 hover:text-white">
              About
            </a>
            <a href="#projects" className="block text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="block text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
