import React from "react";
import { motion } from "framer-motion";
import skillsData from "../data/skills.json";

const Skills = () => {
  return (
    <motion.section
      className="text-white px-4 py-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
        Technical Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, items]) => (
          <div
            key={category}
            className="bg-slate-800 border border-slate-700 p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">{category}</h2>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
              {items.map((skill, index) => (
                <li
                  key={index}
                  className="bg-slate-700 px-3 py-1 rounded-md hover:bg-cyan-500 hover:text-white transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
