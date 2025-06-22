import React from "react";

const ProjectCard = ({ title, description, github, tech, status }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h2>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm mb-3">
        {tech.map((t, index) => (
          <span
            key={index}
            className="bg-cyan-900 text-cyan-300 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          GitHub ↗
        </a>
        <span
          className={`${
            status === "Completed"
              ? "text-green-400"
              : "text-yellow-400 italic"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
