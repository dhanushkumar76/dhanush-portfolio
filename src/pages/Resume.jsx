import React from "react";

const Resume = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Resume</h1>
      <p className="text-gray-300 mb-6">
        Download my latest resume below or view it in a new tab.
      </p>
      <div className="flex gap-4">
        <a
          href="/resume/DhanushKumar_Resume.pdf"
          download
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
        >
          ⬇ Download Resume
        </a>
        <a
          href="/resume/DhanushKumar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded"
        >
          🔎 View in New Tab
        </a>
      </div>
    </section>
  );
};

export default Resume;
