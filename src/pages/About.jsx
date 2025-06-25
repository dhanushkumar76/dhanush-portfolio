import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="text-white px-4 py-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
        About Me
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I'm <span className="text-cyan-300 font-semibold">Dhanush Kumar C</span>,
        a tech enthusiast with a passion for turning real-world problems into 
        impactful digital solutions. I combine my foundation in data, backend, and 
        full-stack development to build analytics tools, automation scripts, and 
        accessible web experiences.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        My journey spans across data analytics, cloud computing, API integration,
        database design, and collaborative teamwork in virtual environments. Whether
        it’s scraping data, optimizing SQL queries, or enabling speech-based user flows —
        I love building things that serve people.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        Outside of code, I explore UI/UX design inspirations, read tech blogs, and
        enjoy simplifying tech for others. My ultimate goal is to create digital
        products that are <span className="text-cyan-300 font-medium">intelligent, inclusive, and intuitive</span>.
      </p>
    </motion.section>
  );
};

export default About;
