// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from "@/components/ThemeToggle.tsx";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center items-center relative">
        
        <ul className="flex space-x-8 text-sm sm:text-base">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={200}
                className="relative cursor-pointer text-gray-700 dark:text-gray-300 transition-all hover:text-blue-500 dark:hover:text-blue-400 group"
              >
                <span className="group-hover:font-semibold tracking-wide">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute right-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
