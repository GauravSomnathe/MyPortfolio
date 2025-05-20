import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiPostman, SiBootstrap,
} from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
import { MdGroups, MdPsychologyAlt } from "react-icons/md";

const skillSet = {
  "Web Development": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ],
  "Tools & Technologies": [
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGithub className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  ],
  "Other Skills": [
    { name: "Cloud Computing", icon: <GrCloudComputer className="text-indigo-400" /> },
    { name: "Problem Solving", icon: <MdPsychologyAlt className="text-yellow-300" /> },
    { name: "Team Collaboration", icon: <MdGroups className="text-pink-300" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#030819] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#00FFE7] to-[#00C9A7] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#00C9A7] to-[#00FFE7] mb-16 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skillSet).map(([category, items], idx) => (
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} key={category}>
              <motion.div
                className={`rounded-xl p-6 backdrop-blur-xl bg-white/5 border border-cyan-400 shadow-lg hover:shadow-cyan-500/30 transition-transform duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-center mb-5 text-[#00FFE7]">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {items.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0c1a2f] rounded-full shadow-md text-sm hover:scale-105 transition-all duration-200 hover:ring-1 hover:ring-cyan-400"
                    >
                      <span className="text-xl">{icon}</span>
                      <span className="text-white">{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
