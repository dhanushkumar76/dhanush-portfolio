import React from "react";
import { Link } from "react-router-dom";
import socials from "../data/socials";

const Home = () => {
  return (
    <section className="text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
        Hi, I'm Dhanush Kumar C
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
        Full-stack & data-focused problem solver blending technical know-how with real-world projects across analytics, cloud, automation, and accessibility.
      </p>

      <div className="flex gap-4 mb-6">
        <Link to="/projects">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">
            View Projects
          </button>
        </Link>
        <a
          href={`mailto:${socials.email}`}
          className="border border-cyan-400 hover:bg-cyan-500 text-cyan-300 hover:text-white px-4 py-2 rounded-md"
        >
          Contact Me
        </a>
      </div>

      <div className="flex gap-4 text-xl">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github hover:text-cyan-400" />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin hover:text-cyan-400" />
        </a>
        <a href={socials.leetcode} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-code hover:text-cyan-400" />
        </a>
        <a href={socials.portfolio} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe hover:text-cyan-400" />
        </a>
      </div>
    </section>
  );
};

export default Home;
