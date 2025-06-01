import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { projects } from "@/data/project";
import { useState } from "react";

type Project = (typeof projects)[number];

interface Props {
  activeProject: Project;
  setActiveProject: (project: Project | null) => void;
  screenshotIndex: number;
  setScreenshotIndex: (index: number) => void;
}



export default function ProjectModal({
  activeProject,
  setActiveProject,
  screenshotIndex,
  setScreenshotIndex,
}: Props) {
  const screenshots = activeProject.screenshots ?? [];
  const totalScreenshots = screenshots.length;

  const [direction, setDirection] = useState<"left" | "right">("left");

  const handlePrev = () => {
    const newIndex = screenshotIndex === 0 ? totalScreenshots - 1 : screenshotIndex - 1;
    setDirection("right");
    setScreenshotIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = screenshotIndex === totalScreenshots - 1 ? 0 : screenshotIndex + 1;
    setDirection("left");
    setScreenshotIndex(newIndex);
  };

  const variants = {
    enter: (dir: string) => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveProject(null);
        }
      }}
    >
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-x-hidden relative">
        <button
          onClick={() => setActiveProject(null)}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 text-2xl transition-transform transform hover:scale-110 cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="p-4 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {activeProject.title}
          </h3>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.img
              key={screenshots[screenshotIndex]}
              src={screenshots[screenshotIndex]}
              alt={`Screenshot ${screenshotIndex + 1}`}
              className="w-full h-90 object-contain rounded-md border border-gray-300 dark:border-gray-700"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="flex justify-between mt-2">
            <button
              onClick={handlePrev}
              className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Prev
            </button>

            <button
              onClick={handleNext}
              className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Next
            </button>
          </div>

          {activeProject.video && (
            <iframe
              className="w-full aspect-[16/6.5] rounded-md border border-gray-200 dark:border-white/10"
              src={activeProject.video}
              title={`${activeProject.title} Demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </motion.div>
  );
}
