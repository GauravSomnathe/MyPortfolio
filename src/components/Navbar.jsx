import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent"
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Gaurav<span className="text-[#00C9A7]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Primary Navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative font-medium text-white before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-[#00C9A7] before:transition-all before:duration-300 hover:text-[#00C9A7] hover:before:w-full transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C9A7] text-white transition-colors duration-300"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with fade animation */}
      <nav
        className={`md:hidden px-6 pb-6 space-y-4 transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto bg-black bg-opacity-70 backdrop-blur-md"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Mobile Navigation"
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-semibold text-white hover:text-[#00C9A7] transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
