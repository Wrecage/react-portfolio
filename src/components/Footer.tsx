import type React from "react"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Link } from "react-scroll"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Wrecage", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/trisanjae/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:trisanjaee@gmail.com", label: "Email" },
  ]

  const navLinks = ["home", "about", "projects", "contact"]

  return (
    <footer className="relative mt-20 backdrop-blur-md bg-white/30 dark:bg-black/30 border-t border-gray-200/30 dark:border-gray-700/30">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Trisan Jae
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Creative developer passionate about building beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-blue-100/50 dark:hover:bg-blue-900/50   hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform  inline-block">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">trisanjaee@gmail.com</span>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Available for freelance opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/30 dark:border-gray-700/30 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {currentYear} Trisan Jae Españo</span>
            {/* <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span> */}
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-blue-100/50 dark:hover:bg-blue-900/50   hover:scale-105"
            aria-label="Back to top"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Back to top
            </span>
            <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:-translate-y-0.5 " />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer