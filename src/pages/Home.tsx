import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import RepelText from "../components/RepelText";
import Wave from "react-wavify";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/SITHISIT" },
  { icon: FaLinkedinIn, url: "https://github.com/Wrecage" },
  { icon: FaGithub, url: "https://www.linkedin.com/in/trisanjae/" },
];



const Home: React.FC = () => {

const [isLoading, setIsLoading] = useState(false);

const handleDownload = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    window.location.href = "/Españo Trisan_Resume.pdf"; 
  }, 500); 
};

  return (
    <Element name="home">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <motion.div
          className="text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={zoomIn}
            className="w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-700 relative"
            whileHover={{ scale: 1.5 }}
          >
            <div className="absolute bottom-0 left-0 w-full h-[70%] z-0">
              <Wave
                fill="url(#profileGradient)"
                paused={false}
                options={{
                  height: 20,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3,
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <linearGradient id="profileGradient" gradientTransform="rotate(90)">
                    <stop offset="5%" stopColor="#f472b6" />
                    <stop offset="95%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </Wave>
            </div>
            <img
              src="profile.png"
              alt="Trisan Jae"
              className="relative z-10 w-full h-full object-contain bg-transparent rounded-full"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2"
          >
            <RepelText
              text="Hi, I'm Trisan Jae"
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2"
            />
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
          >
            <RepelText
              text="Aspiring IT Professional | Web Developer | UI/UX Designer"
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
            />
          </motion.div>

          {/* Resume Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex justify-center gap-5"
          >
            <motion.a
              href="https://drive.google.com/file/d/1tdS8OmIbeEdBQRvtikEk9b1Mx-4hT-m9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)",
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-indigo-500"
            >
              View My Resume
            </motion.a>

            <motion.button
              onClick={handleDownload}
              whileHover={{
                y: -5,
                boxShadow: "0px 8px 20px rgba(234, 179, 8, 0.3)",
                scale: 1.05,
                transition: { duration: 0.15 }, // Faster hover response
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }} // More responsive bounce
              className="bg-gradient-to-r from-pink-500 via-yellow-500 to-yellow-400 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-600 hover:to-yellow-500"
            >
              {isLoading ? "Downloading..." : "Download Resume"}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mt-6">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={iconVariants}
                whileHover={{ scale: 1.3, rotate: 5 }}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition duration-300 text-xl border p-3 rounded-full shadow-md"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Home;