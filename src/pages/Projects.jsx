import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <motion.section
      className="text-white px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
        Projects
      </h1>

      <div className="space-y-10">
        {/* Smart City Analytics */}
        <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
          <h2 className="text-xl font-semibold text-cyan-300">
            Smart City Data Analytics Platform
          </h2>
          <p className="text-gray-300 mt-2 mb-3">
            Built a Flask-based web platform for analyzing urban data including
            air quality, traffic, and ICT infrastructure. Created dashboards using
            Plotly and implemented SQL-based data querying for insights.
          </p>
          <a
            href="https://github.com/dhanushkumar76/Smart-City-Data-Analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View Code →
          </a>
        </div>

        {/* VocalMail */}
        <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
          <h2 className="text-xl font-semibold text-cyan-300">
            VocalMail – Voice-Based Email Assistant
          </h2>
          <p className="text-gray-300 mt-2 mb-3">
            Developed a Python app that enables visually impaired users to compose,
            send, and manage emails through speech commands. Built using Flask, 
            speech recognition, and pyttsx3.
          </p>
          <a
            href="https://github.com/dhanushkumar76/VocalMail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View Code →
          </a>
        </div>

        {/* Placeholder Project */}
        <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
          <h2 className="text-xl font-semibold text-cyan-300">
            Upcoming Project – Digital Wellbeing Analysis
          </h2>
          <p className="text-gray-300 mt-2 mb-3">
            A personal project focusing on screen-time analysis and productivity 
            mapping using mobile usage data. Will involve pandas, clustering, 
            and EDA.
          </p>
          <Link
            to="/contact"
            className="text-cyan-400 hover:underline"
          >
            Contact Me to Collaborate →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
