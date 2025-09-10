"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye } from "lucide-react"

interface Props {
  screenshots: string[]
  onClick: () => void
}

function ProjectCardCarousel({ screenshots, onClick }: Props) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % screenshots.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [screenshots.length, isHovered])

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden group h-48 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={screenshots[current]}
          src={screenshots[current]}
          alt={`Project preview ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Clickable Eye Icon for Modal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 text-white hover:bg-white/20 dark:hover:bg-black/30  "
        >
          <Eye className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Progress Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {screenshots.map((_, index) => (
          <motion.button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              setCurrent(index)
            }}
            className={`w-2 h-2 rounded-full   ${
              index === current
                ? "bg-white dark:bg-gray-200 scale-125"
                : "bg-white/40 dark:bg-gray-400/40 hover:bg-white/60 dark:hover:bg-gray-300/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Corner Badge */}
      <motion.div
        className="absolute top-3 right-3 px-2 py-1 bg-black/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-full text-white dark:text-gray-200 text-xs font-medium border border-white/20 dark:border-gray-600/20"
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {screenshots.length} images
      </motion.div>
    </motion.div>
  )
}

export default ProjectCardCarousel
