import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Gauravph.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function About() {
  return (
    <main
      id="about"
      className="min-h-screen w-full px-6 py-20 bg-[#030819] flex items-center justify-center text-white"
    >
      <motion.section
        className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 w-48 sm:w-56 h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg border-2 border-[#00C9A7] transform hover:scale-105 transition-transform duration-300"
          variants={fadeInUp}
        >
          <img
            src={profilePic}
            alt="Gaurav Vitthal Somnathe"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 max-w-full sm:max-w-xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00C9A7] to-[#00FFE7]"
            variants={fadeInUp}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-gray-300"
            custom={1}
            variants={fadeInUp}
          >
            Hello! I&apos;m <strong>Gaurav</strong>, a passionate web developer specializing in the{" "}
            <span className="text-[#00C9A7] font-semibold">MERN stack</span>. I love building
            efficient and scalable web applications with a focus on clean code and user-friendly
            design.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-gray-300"
            custom={2}
            variants={fadeInUp}
          >
            I have experience in <strong>React, Node.js, Express, and MongoDB</strong>, and I enjoy
            learning new technologies to continuously improve my skills.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-gray-300"
            custom={3}
            variants={fadeInUp}
          >
            When I&apos;m not coding, I’m deeply passionate about{" "}
            <span className="text-[#00C9A7] font-semibold">fitness and strength training</span>,
            which helps me maintain focus and discipline in all areas of life.
          </motion.p>

          <motion.p
            className="italic text-gray-400 text-sm sm:text-base"
            custom={4}
            variants={fadeInUp}
          >
            “Strive not to be a success, but rather to be of value.” – Albert Einstein
          </motion.p>

          <motion.a
            href="/GauravCV.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-[#00C9A7] text-black font-semibold rounded-lg hover:bg-[#00a88b] transition-colors"
            custom={5}
            variants={fadeInUp}
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}
