
import { useState,useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence  } from "framer-motion";
import ProjectCardCarousel from "@/components/ProjectCardCarousel";
import ProjectModal from "@/components/ProjectModal";


type Project = (typeof projects)[number];



export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  useEffect(() => {
  if (activeProject) {
    setScreenshotIndex(0);
  }
  }, [activeProject]);


  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-6 no-cursor"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl p-4 bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-white/10 dark:via-white/5 dark:to-white/0 shadow-md border border-gray-300 dark:border-white/10 backdrop-blur-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-[0_0_20px_#8D61FF] flex flex-col justify-between"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.type} — {project.role}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(({ icon: Icon, name }, i) => (
                      <Badge
                        key={name + i}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1 rounded-md text-sm"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span>{name}</span>
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mb-4">
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-600 transition"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.div>
                    </a>
                    )}
                     {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-600 transition"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </motion.div>
                    </a>
                    )}
                  </div>
                </div>

                {project.screenshots && project.screenshots.length > 0 && (
                  <ProjectCardCarousel
                    screenshots={project.screenshots}
                    onClick={() => setActiveProject(project)}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
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
  );
}
