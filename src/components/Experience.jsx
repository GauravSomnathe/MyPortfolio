import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Trainee",
    company: "Giris Tech Hub",
    duration: "Currently Training",
    description:
      "Undergoing advanced full-stack development training with real-world MERN stack projects, RESTful APIs, Git, and deployment techniques.",
    achievements: [
      "Built responsive apps using React and MongoDB.",
      "Worked in a collaborative dev environment.",
      "Improved problem-solving via daily challenges.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "WideSoftech",
    duration: "Jan 2024 - June 2024",
    description:
      "Contributed to scalable front-end systems with React, improving UI performance and collaborating with design teams for seamless UX.",
    achievements: [
      "Reduced site load time by 30%.",
      "Implemented mobile-first responsive layouts.",
      "Translated UI designs into production code.",
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[#030819] text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9A7] to-[#00FFE7]"
          variants={itemVariants}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map(({ role, company, duration, description, achievements }, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] border border-[#00C9A7]/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[#00C9A7]/30 transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4 mb-4">
                <FaBriefcase className="text-3xl text-[#00C9A7] mt-1" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">{role}</h3>
                  <p className="text-sm text-[#00FFE7] font-medium">
                    {company} &nbsp;|&nbsp; <span className="italic">{duration}</span>
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">{description}</p>

              {achievements && (
                <motion.div
                  className="space-y-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <h4 className="text-[#00C9A7] font-semibold mb-2 text-base">Key Achievements</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm md:text-base">
                    {achievements.map((item, i) => (
                      <motion.li key={i} variants={itemVariants}>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
