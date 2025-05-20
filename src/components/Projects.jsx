import React from "react";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const tagColors = {
  HTML: "bg-[rgba(249,115,22,0.15)] text-orange-500 border-orange-500",
  CSS: "bg-[rgba(59,130,246,0.15)] text-blue-500 border-blue-500",
  JavaScript: "bg-[rgba(250,204,21,0.15)] text-yellow-400 border-yellow-400",
  Bootstrap: "bg-[rgba(139,92,246,0.15)] text-purple-600 border-purple-600",
  OpenCV: "bg-[rgba(34,197,94,0.15)] text-green-500 border-green-500",
  "Deep Learning": "bg-[rgba(236,72,153,0.15)] text-pink-500 border-pink-500",
  Python: "bg-[rgba(96,165,250,0.15)] text-blue-400 border-blue-400",
};

const projects = [
  {
    title: "Preschool Website",
    description:
      "A colorful and informative website for Munchkin Preschool, built using HTML, CSS, JavaScript, and Bootstrap. Designed for responsive viewing and easy management.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: <FaGraduationCap className="text-3xl text-[#00C9A7]" />,
  },
  {
    title: "Road Lane Detection",
    description:
      "A deep learning project to detect road lanes using computer vision techniques like OpenCV (done without TensorFlow).",
    tags: ["OpenCV", "Deep Learning", "Python"],
    icon: <FaCode className="text-3xl text-[#00C9A7]" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-[#030819] via-[#070F2B] to-[#000000] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9A7] to-[#00FFE7]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] border border-[#00C9A7] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {project.icon}
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-3 py-1 rounded-full cursor-default select-none
                      backdrop-blur-sm border border-opacity-40 shadow-sm
                      ${tagColors[tag] || "bg-[rgba(0,201,167,0.15)] text-[#00C9A7] border-[#00C9A7]"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
