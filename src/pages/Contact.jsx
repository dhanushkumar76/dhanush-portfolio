import React from "react";

const Contact = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Contact Me</h1>
      <p className="text-gray-300 mb-6">
        Have a project, internship, or opportunity in mind? Drop me a message!
      </p>

      <form
        action="https://formspree.io/f/xkgbvlvn" 
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-slate-800 text-white border border-slate-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-slate-800 text-white border border-slate-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-2 rounded bg-slate-800 text-white border border-slate-600"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
