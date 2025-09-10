"use client"

import { motion } from "framer-motion"
import { skillCategories } from "../data/skills"
import TechCarousel from "../components/TechCarousel"
import { Code2, Sparkles, Zap, User, Lightbulb, Target } from "lucide-react"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 dark:from-blue-400/8 dark:to-purple-400/8 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div className="relative inline-block mb-8">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I craft digital experiences that blend{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">creativity</span> with{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">functionality</span>,
            turning ideas into beautiful, scalable solutions.
          </motion.p>
        </motion.div>

        {/* Stats/Highlights Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
            { icon: Lightbulb, title: "Innovation", desc: "Always exploring cutting-edge technologies" },
            { icon: Target, title: "User-Focused", desc: "Designing with the end user in mind" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 rounded-3xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50  shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity " />
              
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors " />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-16">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Technologies & Expertise
              </h3>
              <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A curated selection of tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Redesigned Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                initial={{ opacity: 0, x: categoryIdx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIdx * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50  shadow-xl hover:shadow-2xl"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {category.skills.slice(0, 9).map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                      className="group/skill relative flex flex-col items-center p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-600/80   cursor-pointer"
                    >
                      {/* Skill Icon */}
                      <motion.div
                        className={`text-3xl mb-3 ${skill.colorClass || ""}`}
                        style={skill.style}
                        whileHover={{ 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      {/* Skill Name */}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity  pointer-events-none" />
                    </motion.div>
                  ))}
                </div>

                {/* More Skills Indicator */}
                {category.skills.length > 9 && (
                  <div className="text-center mt-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      +{category.skills.length - 9} more technologies
                    </span>
                  </div>
                )}

                {/* Background Decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity " />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Carousel Section */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Always exploring new technologies and staying updated with the latest trends
            </p>
          </motion.div>
          <TechCarousel />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About