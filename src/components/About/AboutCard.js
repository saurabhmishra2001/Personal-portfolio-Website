import React from "react";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

const HOBBIES = [
  { icon: "🎮", label: "Playing Games" },
  { icon: "📚", label: "Reading Books" },
  { icon: "✈️", label: "Travelling" },
];

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-8 overflow-hidden"
      style={{
        background: "rgba(14,11,38,0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 0 40px rgba(199,112,240,0.06)",
      }}
    >
      {/* Subtle corner glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(199,112,240,0.12), transparent 70%)" }}
      />

      <div className="relative z-10 space-y-5 text-gray-300 text-base leading-relaxed">
        <p>
          Hi Everyone, I am{" "}
          <span className="text-[#c770f0] font-semibold">Saurabh Kumar Mishra</span> from{" "}
          <span className="text-[#c770f0] font-semibold">Gorakhpur, Uttar Pradesh, India.</span>
        </p>

        <p>
          I am currently working as a{" "}
          <span className="text-[#c770f0] font-semibold">System Engineer</span> at{" "}
          <span className="text-white font-semibold">Infosys</span>, where I contribute to enterprise-level software solutions.
        </p>

        <p>
          I hold a <span className="text-white font-semibold">B.Tech in Computer Science</span> from the Institute of Technology and Management, Gorakhpur — providing a solid foundation in algorithms, data structures, and software engineering.
        </p>

        <p>
          Beyond professional development, I focus on continuous learning and exploring new technologies in the ever-evolving tech landscape.
        </p>

        {/* Hobbies */}
        <div>
          <p className="text-gray-400 mb-3 text-sm font-medium uppercase tracking-widest">
            Apart from coding, I love to:
          </p>
          <ul className="space-y-2">
            {HOBBIES.map(({ icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 cursor-default"
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <div className="border-l-4 border-[#c770f0] pl-4 py-1 mt-6 bg-[#c770f0]/5 rounded-r-xl">
          <p className="text-gray-300 italic text-sm">
            "Strive to build things that make a difference!"
          </p>
          <p className="text-gray-500 text-xs mt-1">— Saurabh</p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutCard;
