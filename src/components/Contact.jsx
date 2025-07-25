import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://backendportfolio-t0s2.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your network and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#030819] via-[#070F2B] to-[#000000] text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00C9A7] to-[#00FFE7]"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-gray-300 max-w-xl mx-auto"
        >
          Feel free to reach out to me for collaboration, projects, or just a friendly chat!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] rounded-xl p-8 shadow-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-left">
            <label htmlFor="name" className="block mb-2 font-semibold text-[#00C9A7]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition"
            />
          </div>

          <div className="mb-6 text-left">
            <label htmlFor="email" className="block mb-2 font-semibold text-[#00C9A7]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition"
            />
          </div>

          <div className="mb-6 text-left">
            <label htmlFor="message" className="block mb-2 font-semibold text-[#00C9A7]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#00C9A7] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00C9A7] to-[#00FFE7] text-black font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info Section */}
        <motion.div
          className="mt-12 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <HiOutlineMail className="text-[#00C9A7] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-[#00C9A7]">Email</p>
              <a
                href="mailto:gauravsomnathe992@gmail.com"
                className="hover:text-[#00FFE7] transition-colors"
              >
                gauravsomnathe992@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdPhone className="text-[#00C9A7] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-[#00C9A7]">Phone</p>
              <p>7028439141</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdLocationOn className="text-[#00C9A7] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-[#00C9A7]">Location</p>
              <p>Pune, Maharashtra 442001</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLinkedin className="text-[#00C9A7] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-[#00C9A7]">LinkedIn</p>
              <a
                href="https://linkedin.com/in/gaurav-vitthal-somnathe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFE7] underline transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
