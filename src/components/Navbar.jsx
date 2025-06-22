import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-[#0f172a] border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-cyan-400 text-xl font-semibold">
          Dhanush.dev
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="hover:text-cyan-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
