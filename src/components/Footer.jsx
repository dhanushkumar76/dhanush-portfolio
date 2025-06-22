import React from "react";
import socials from "../data/socials";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6 mt-10 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Dhanush Kumar C</p>
        <div className="flex gap-4">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">LinkedIn</a>
          <a href={`mailto:${socials.email}`} className="hover:text-cyan-400">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

