import { motion } from "framer-motion";
import SkillCategory from "../components/SkillCategory";
import { skillCategories } from "../data/skills";
import  TechCarousel  from "../components/TechCarousel"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto text-center space-y-10"
      >
      <motion.h2
        className="text-gray-900 dark:text-white text-4xl font-bold mb-6 flex flex-wrap justify-center gap-x-1"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
      >
        {"About Me & Tools I Use".split(" ").map((word, idx) => (
          <span key={idx} className="inline-flex">
            {word.split("").map((char, cIdx) => (
              <motion.span
                key={cIdx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {idx !== "About Me & Tools I Use".split(" ").length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a passionate developer who loves building intuitive and impactful user experiences.
          I specialize in frontend and backend development, using modern tools and frameworks to
          create responsive and scalable applications. Here are the technologies and tools I work with:
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 "
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <SkillCategory
                title={cat.title}
                skills={cat.skills.map((skill) => ({
                  ...skill,
                  icon: (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${skill.colorClass} text-2xl md:text-3xl`}
                    >
                      {skill.icon}
                    </motion.div>
                  ),
                }))}
              />
            </motion.div>
          ))}
           <TechCarousel />
        </motion.div>
      </motion.div>
       
    </section>
  );
};

export default About;
