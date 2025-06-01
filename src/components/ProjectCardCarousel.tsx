import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

interface Props {
  screenshots: string[];
  onClick: () => void;
}

export default function ProjectCardCarousel({ screenshots, onClick }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); 
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div
      onClick={onClick}
      className="mt-auto cursor-pointer relative rounded-lg overflow-hidden group h-48 bg-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={screenshots[current]}
          src={screenshots[current]}
          alt={`Project preview ${current + 1}`}
          className="absolute w-full h-full object-contain"
          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Animated Eye Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-pink-400/30">
          <Eye className="w-8 h-8 text-white drop-shadow-md" />
        </div>
      </motion.div>
      
      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
        Click to view gallery
      </div>
    </div>
  );
}
