import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const socialLinks = [
  { icon: FaEnvelope, url: "mailto:trisanjaee@gmail.com" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/trisanjae/" },
  { icon: FaGithub, url: "https://github.com/Wrecage" },
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Contact Me
          </h2>

        <motion.form
          ref={formRef}
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setFormStatus(null);

            const formData = new FormData(formRef.current!);

            try {
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const result = await response.json();

              if (result.success) {
                setFormStatus("success");
                formRef.current?.reset(); // ✅ FIXED
              } else {
                setFormStatus("error");
              }
            } catch (error) {
              console.error(error);
              setFormStatus("error");
            } finally {
              setIsSubmitting(false);
            }
          }}
          method="POST"
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          >
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          />

          {[
            { name: "name", placeholder: "Your Name", type: "text" },
            { name: "email", placeholder: "Your Email", type: "email" },
          ].map((field) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}

          <motion.textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{
              scale: !isSubmitting ? 1.05 : 1,
              boxShadow: !isSubmitting ? "0px 0px 15px rgba(59, 130, 246, 0.6)" : "",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-shadow duration-300 shadow-md ${
              isSubmitting ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`mt-2 p-3 text-center rounded-lg text-sm font-medium transition-all duration-300 ${
                formStatus === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              {formStatus === "success"
                ? "Message sent successfully!"
                : "Something went wrong. Please try again."}
            </motion.div>
          )}
        </motion.form>


          <div className="text-center mt-8">
            <motion.a
              href="https://drive.google.com/file/d/1tdS8OmIbeEdBQRvtikEk9b1Mx-4hT-m9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)", // soft blue glow
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-white border border-blue-200 dark:border-gray-600 px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
             View My Resume
            </motion.a>

          </div>

          <div className="flex justify-center gap-8 mt-10 text-2xl">
                {socialLinks.map(({ icon: Icon, url }, index) => (
                            <motion.a
                              key={index}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              custom={index}
                              variants={iconVariants}
                              initial="hidden"
                              animate="show"
                              whileHover={{ scale: 1.3, rotate: 5 }}
                              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition duration-300 text-xl border p-3 rounded-full shadow-md"
                            >
                              <Icon />
                            </motion.a>
                            )
                          )}       
          </div>
        </motion.div>

        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <hr className="border-gray-300 dark:border-gray-700 my-6 mx-auto w-1/2" />
          <p>&copy; {new Date().getFullYear()} Trisan Jae. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
