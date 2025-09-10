"use client"

import { AnimatePresence, motion } from "framer-motion"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import type { projects } from "@/data/project" // Fixed import to use actual projects array instead of type import
import { useState } from "react"

type Project = (typeof projects)[number]

interface Props {
  activeProject: Project
  setActiveProject: (project: Project | null) => void
  screenshotIndex: number
  setScreenshotIndex: (index: number) => void
}

function ProjectModal({ activeProject, setActiveProject, screenshotIndex, setScreenshotIndex }: Props) {
  const screenshots = activeProject.screenshots ?? []
  const totalScreenshots = screenshots.length
  const [direction, setDirection] = useState<"left" | "right">("left")

  const handlePrev = () => {
    const newIndex = screenshotIndex === 0 ? totalScreenshots - 1 : screenshotIndex - 1
    setDirection("right")
    setScreenshotIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = screenshotIndex === totalScreenshots - 1 ? 0 : screenshotIndex + 1
    setDirection("left")
    setScreenshotIndex(newIndex)
  }

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: string) => ({
      x: direction === "left" ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveProject(null)
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-gradient-to-br from-white/95 via-gray-50/90 to-gray-100/85 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-black/85 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-gray-200/50 dark:border-white/10 relative"
      >
        {/* Close Button */}
        <motion.button
          onClick={() => setActiveProject(null)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-gray-200/50 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-700 dark:text-white hover:bg-red-500/20 hover:border-red-400/30 hover:text-red-600 dark:hover:text-red-300  "
        >
          <FaTimes className="w-5 h-5" />
        </motion.button>

        <div className="p-8 space-y-8 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider text-sm">
                {activeProject.type}
              </span>
            </div>

            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
              {activeProject.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-lg">{activeProject.description}</p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-100/50 dark:bg-black/20 border border-gray-200/50 dark:border-white/10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={screenshots[screenshotIndex]}
                  src={screenshots[screenshotIndex]}
                  alt={`Screenshot ${screenshotIndex + 1}`}
                  className="w-full h-[60vh] object-contain"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6,
                  }}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              {totalScreenshots > 1 && (
                <>
                  <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black/70  "
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-black/70  "
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-full text-gray-800 dark:text-white text-sm font-medium border border-gray-300/50 dark:border-white/20">
                {screenshotIndex + 1} / {totalScreenshots}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {totalScreenshots > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 mt-6 overflow-x-auto pb-2"
              >
                {screenshots.map((screenshot, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setScreenshotIndex(index)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2   ${
                      index === screenshotIndex
                        ? "border-blue-500 dark:border-purple-400 shadow-lg shadow-blue-500/30 dark:shadow-purple-400/30"
                        : "border-gray-300/50 dark:border-white/20 hover:border-gray-400/70 dark:hover:border-white/40"
                    }`}
                  >
                    <img
                      src={screenshot || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Video Section */}
          {activeProject.video && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Demo Video</h4>
              <div className="rounded-2xl overflow-hidden border border-gray-200/50 dark:border-white/10">
                <iframe
                  className="w-full aspect-video"
                  src={activeProject.video}
                  title={`${activeProject.title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
