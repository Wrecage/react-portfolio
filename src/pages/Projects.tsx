"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/project"
import { FaGithub, FaExternalLinkAlt, FaPlay, FaChevronDown, FaCode, FaPalette } from "react-icons/fa"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import ProjectCardCarousel from "@/components/ProjectCardCarousel"
import ProjectModal from "@/components/ProjectModal"
import Timeline from "@/components/Timeline"

type Project = (typeof projects)[number]

const categorizeProjects = () => {
  const fullStackProjects = projects.filter((p) =>
    p.techStack.some((tech) => ["Django", "Spring Boot", "React", "MySQL", "PostgreSQL", "Sqlite"].includes(tech.name)),
  )

  const uiuxProjects = projects.filter(
    (p) => p.techStack.some((tech) => tech.name === "Figma") || p.role.includes("UI/UX"),
  )

  return { fullStackProjects, uiuxProjects }
}

const CollapsibleSection = ({
  title,
  icon: Icon,
  projects,
  isOpen,
  onToggle,
  setActiveProject,
}: {
  title: string
  icon: any
  projects: Project[]
  isOpen: boolean
  onToggle: () => void
  gradient: string
  setActiveProject: (project: Project) => void
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="mb-12"
    >
      {/* Section Header */}
      <motion.div
        onClick={onToggle}
        className="flex items-center justify-between p-6 rounded-2xl cursor-pointer group  hover:scale-[1.02] bg-gradient-to-br from-gray-100/80 via-gray-50/60 to-white/40 dark:from-gray-800/80 dark:via-gray-900/60 dark:to-black/40 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-400/30"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{projects.length} projects</p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/30"
        >
          <FaChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title + index}
                    project={project}
                    index={index}
                    setActiveProject={setActiveProject}
                    compact={true}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ProjectCard = ({
  project,
  index,
  setActiveProject,
}: {
  project: Project
  index: number
  setActiveProject: (project: Project) => void
  compact?: boolean
}) => {
  const [, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const [showAllTech, setShowAllTech] = useState(false) 

  const techToShow = showAllTech ? project.techStack : project.techStack.slice(0, 4)


  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent modal opening when clicking on action buttons
    if ((e.target as HTMLElement).closest(".action-button")) {
      return
    }
    setActiveProject(project)
  }

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.github) {
      window.open(project.github, "_blank")
    }
  }

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.demo) {
      window.open(project.demo, "_blank")
    }
  }

  const handleProtoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.proto) {
      window.open(project.proto, "_blank")
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50  hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20 cursor-pointer bg-gradient-to-br from-white/90 via-gray-50/70 to-gray-100/50 dark:from-gray-800/90 dark:via-gray-900/70 dark:to-black/50"
      onClick={handleCardClick}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity "
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(59, 130, 246, 0.1), 
            rgba(147, 51, 234, 0.05), 
            transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.type}
            </span>
          </div>

          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 ">
            {project.title}
          </h4>

          <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{project.role}</p>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
          {techToShow.map(({ icon: Icon, name }, i) => (
            <motion.div key={name + i} whileHover={{ scale: 1.1, y: -2 }} className="group/badge">
              <Badge className="flex items-center gap-1 px-2 py-1 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:border-blue-400/50 dark:hover:border-purple-400/50 hover:text-blue-600 dark:hover:text-purple-400">
                <Icon className="w-3 h-3" />
                <span className="text-xs">{name}</span>
              </Badge>
            </motion.div>
          ))}
        {project.techStack.length > 4 && !showAllTech && (
            <Badge
              onClick={(e) => {
                e.stopPropagation()
                setShowAllTech(true)
              }}
              className="cursor-pointer px-2 py-1 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-gray-700/80"
            >
              +{project.techStack.length - 4}
            </Badge>
          )}

          {showAllTech && (
            <Badge
              onClick={(e) => {
                e.stopPropagation()
                setShowAllTech(false)
              }}
              className="cursor-pointer px-2 py-1 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-gray-700/80"
            >
              Show less
            </Badge>
          )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          {project.github && (
            <motion.button
              onClick={handleGithubClick}
              whileHover={{ scale: 1.1 }}
              className="action-button p-2 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:border-blue-400/50 dark:hover:border-purple-400/50 hover:text-blue-600 dark:hover:text-purple-400  "
            >
              <FaGithub className="w-4 h-4" />
            </motion.button>
          )}

          {project.demo && (
            <motion.button
              onClick={handleDemoClick}
              whileHover={{ scale: 1.1 }}
              className="action-button p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 border border-blue-400/30 dark:border-purple-400/30 rounded-lg text-blue-600 dark:text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 dark:hover:from-blue-400/30 dark:hover:to-purple-400/30  "
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.button>
          )}

          {project.video && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 dark:from-pink-400/20 dark:to-red-400/20 border border-pink-400/30 dark:border-pink-400/30 rounded-lg text-pink-600 dark:text-pink-400 hover:from-pink-500/30 hover:to-red-500/30 dark:hover:from-pink-400/30 dark:hover:to-red-400/30  "
            >
              <FaPlay className="w-3 h-3" />
            </motion.div>
          )}

          {project.proto && (
            <motion.button
              onClick={handleProtoClick}
              whileHover={{ scale: 1.1 }}
              className="action-button p-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 dark:from-green-400/20 dark:to-teal-400/20 border border-green-400/30 dark:border-teal-400/30 rounded-lg text-green-600 dark:text-green-400 hover:from-green-500/30 hover:to-teal-500/30 dark:hover:from-green-400/30 dark:hover:to-teal-400/30  "
            >
              <FaPlay className="w-3 h-3" />
            </motion.button>
          )}
        </div>

        {/* Screenshot Preview - Only clickable area for modal */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-4">
            <ProjectCardCarousel screenshots={project.screenshots} onClick={() => setActiveProject(project)} />
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity  pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0deg, 
            rgba(59, 130, 246, 0.1) 90deg, 
            transparent 180deg, 
            rgba(147, 51, 234, 0.1) 270deg, 
            transparent 360deg)`,
          filter: "blur(1px)",
        }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    fullstack: true,
    uiux: true,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const { fullStackProjects, uiuxProjects } = categorizeProjects()

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  useEffect(() => {
    if (activeProject) {
      setScreenshotIndex(0)
    }
  }, [activeProject])

  return (
    <section ref={containerRef} className="min-h-screen py-20 px-6 relative overflow-hidden" id="projects">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div style={{ opacity }} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-400 dark:to-purple-400" />
            <span className="text-blue-600 dark:text-purple-400 font-medium uppercase tracking-wider text-sm">
              Featured Work
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-400 dark:to-purple-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Organized showcase of full-stack applications and UI/UX designs, demonstrating technical expertise across
            different domains.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          <CollapsibleSection
            title="Full-Stack Development"
            icon={FaCode}
            projects={fullStackProjects}
            isOpen={openSections.fullstack}
            onToggle={() => toggleSection("fullstack")}
            gradient="rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1)"
            setActiveProject={setActiveProject}
          />

          <CollapsibleSection
            title="UI/UX Design"
            icon={FaPalette}
            projects={uiuxProjects}
            isOpen={openSections.uiux}
            onToggle={() => toggleSection("uiux")}
            gradient="rgba(236, 72, 153, 0.15), rgba(251, 146, 60, 0.1)"
            setActiveProject={setActiveProject}
          />
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Completed", value: projects.length },
            { label: "Technologies Used", value: "15+" },
            { label: "Years Experience", value: "3+" },
            { label: "Continuous Learning", value: "Everyday" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        <Timeline />
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            screenshotIndex={screenshotIndex}
            setScreenshotIndex={setScreenshotIndex}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
