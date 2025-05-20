import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Toaster position="top-right" />
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; // ✅ THIS LINE IS REQUIRED
