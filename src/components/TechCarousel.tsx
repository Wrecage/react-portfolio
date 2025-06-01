import { motion } from "framer-motion";
import { skillItems } from "../data/carousel";


const DURATION = 30;

const TechCarousel = () => {
  const totalItems = [...skillItems, ...skillItems];


  
  return (
    <div className="relative overflow-hidden w-full py-8">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: DURATION,
          ease: "linear",
        }}
      >
        {totalItems.map((skill, index) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <div className="text-4xl mb-2" style={skill.style}>
              {skill.icon}
            </div>
            <span className="text-sm text-center text-black dark:text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default TechCarousel;
