import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useEffect, useState, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  useEffect(() => {
    toast.success("Welcome to Gaurav's Portfolio 👋");
  }, []);

  const [showFullStack, setShowFullStack] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullStack((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef(null);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    function handleTouchStart(e) {
      touchStartY = e.changedTouches[0].screenY;
    }

    function handleTouchEnd(e) {
      touchEndY = e.changedTouches[0].screenY;
      if (touchStartY - touchEndY > 50) {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    const heroElem = heroRef.current;
    if (heroElem) {
      heroElem.addEventListener("touchstart", handleTouchStart);
      heroElem.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (heroElem) {
        heroElem.removeEventListener("touchstart", handleTouchStart);
        heroElem.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-[#030819] text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 whitespace-nowrap"
        >
          Hi, I'm <span className="text-[#00C9A7]">Gaurav Somnathe</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-medium text-gray-400 mb-6 h-[40px] relative"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={showFullStack ? "fullstack" : "mern"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              {showFullStack ? "Full Stack Developer" : "MERN Stack Developer"}
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg max-w-2xl mx-auto mb-8">
          I build clean, scalable, and user-friendly web applications with modern
          technologies. Passionate about creating exceptional digital experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12 max-w-sm mx-auto"
        >
          <a
            href="#contact"
            className="bg-[#00C9A7] text-white h-11 flex items-center justify-center px-8 rounded-md hover:bg-[#00b197] transition-all font-medium min-w-[140px]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-gray-400 h-11 flex items-center justify-center px-8 rounded-md hover:bg-white hover:text-black transition-all font-medium min-w-[140px]"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          {/* GitHub */}
          <a
            href="https://github.com/gauravsomnathe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6 text-black"
              style={{ filter: "invert(0)" }}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gauravsomnathe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 text-blue-600"
              style={{ filter: "invert(0)" }}
            />
          </a>

          {/* Email */}
          <a
            href="mailto:gauravsomnathe992@gmail.com"
            className="bg-white p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <button
            className="hover:bg-gray-700 p-3 rounded-full animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </button>
        </a>
      </motion.div>
    </section>
  );
}
