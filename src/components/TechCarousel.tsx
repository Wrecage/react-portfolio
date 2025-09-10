import { motion } from "framer-motion"
import { skillItems } from "../data/carousel"

const DURATION = 25

const TechCarousel = () => {
  const totalItems = [...skillItems, ...skillItems, ...skillItems]

  return (
    <div className="relative overflow-hidden w-full py-8">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20  z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20  z-10 pointer-events-none"></div>
      
      {/* Main carousel container */}
      <div className="relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: DURATION,
            ease: "linear",
          }}
        >
          {totalItems.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ 
                scale: 1.15,
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group flex flex-col items-center justify-center min-w-[120px] p-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 hover:border-blue-300/50 dark:hover:border-blue-600/50   cursor-pointer shadow-sm hover:shadow-lg"
            >
              {/* Icon with enhanced hover animation */}
              <motion.div
                className="text-4xl mb-3 relative"
                style={skill.style}
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                {skill.icon}
                
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity "
                  style={{
                    background: `radial-gradient(circle, ${skill.style?.color || '#3b82f6'} 0%, transparent 70%)`,
                    filter: 'blur(8px)',
                  }}
                />
              </motion.div>

              {/* Skill name with improved typography */}
              <motion.span 
                className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors  leading-tight"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>

              {/* Subtle bottom accent line */}
              <motion.div
                className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:w-full  "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30 delay-1000"></div>
    </div>
  )
}

export default TechCarousel