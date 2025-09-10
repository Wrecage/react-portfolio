"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import ThemeToggle from "./ThemeToggle"
import { Menu, X, Code2 } from "lucide-react"

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50  ${
      isScrolled 
        ? 'backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-lg shadow-black/5 dark:shadow-white/5' 
        : 'backdrop-blur-md bg-white/30 dark:bg-black/30'
    }`}>
      {/* Subtle gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-600/50 to-transparent"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-xl group-hover:scale-105  ">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Trisan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="relative px-4 py-2 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300   hover:text-blue-600 dark:hover:text-blue-400 group overflow-hidden"
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100   scale-95 group-hover:scale-100"></div>
                    
                    {/* Text */}
                    <span className="relative z-10 font-medium tracking-wide group-hover:font-semibold  ">
                      {item.label}
                    </span>
                    
                    {/* Underline effect */}
                    <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500   group-hover:w-1/2 group-hover:left-1/4 rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/80   hover:scale-105 group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5   ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 w-5 h-5   ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden  ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.id} style={{ animationDelay: `${index * 50}ms` }} className={`${
                  isMobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50   group"
                  >
                    <span className="font-medium group-hover:translate-x-1 transition-transform ">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar