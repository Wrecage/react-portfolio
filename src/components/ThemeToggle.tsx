"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <button
      onClick={handleToggle}
      className="
        relative group p-2 rounded-full   
        bg-[var(--color-surface)] hover:bg-[var(--color-accent)] 
        text-[var(--color-primary)] dark:text-[var(--color-secondary)]
        shadow-md overflow-hidden
      "
      aria-label="Toggle Theme"
    >
      <span className="absolute -inset-1 bg-blue-400 rounded-full blur opacity-30 group-hover:opacity-60 transition "></span>
      <span className="relative z-10 transition-transform  group-hover:scale-110">
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </span>
    </button>
  )
}
