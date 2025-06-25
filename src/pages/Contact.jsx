import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="text-white px-4 py-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
        Contact Me
      </h1>

      <p className="text-lg text-gray-300 mb-6">
        Have an opportunity, idea, or just want to connect? Drop me a message and I’ll get back to you shortly!
      </p>

      <form
        action="https://formspree.io/f/xkgbvlvn"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
