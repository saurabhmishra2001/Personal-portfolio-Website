import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiMongodb, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const TECH = [
  { icon: <DiJavascript1 />, name: "JavaScript", color: "#f7df1e", level: 90 },
  { icon: <DiReact />,       name: "React",       color: "#61dafb", level: 88 },
  { icon: <DiNodejs />,      name: "Node.js",     color: "#68a063", level: 82 },
  { icon: <SiNextdotjs />,   name: "Next.js",     color: "#ffffff", level: 75 },
  { icon: <SiMongodb />,     name: "MongoDB",     color: "#4db33d", level: 78 },
  { icon: <SiRedux />,       name: "Redux",       color: "#764abc", level: 72 },
  { icon: <DiGit />,         name: "Git",         color: "#f05032", level: 85 },
  { icon: <SiFirebase />,    name: "Firebase",    color: "#ffca28", level: 70 },
  { icon: <DiPython />,      name: "Python",      color: "#3776ab", level: 65 },
  { icon: <DiJava />,        name: "Java",        color: "#ed8b00", level: 80 },
];

function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-12">
      {TECH.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group relative flex flex-col items-center p-5 rounded-2xl border border-white/[0.07] cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{ background: "rgba(14,11,38,0.6)", backdropFilter: "blur(16px)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${item.color}50`;
            e.currentTarget.style.boxShadow = `0 8px 30px ${item.color}25`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
            style={{ background: `radial-gradient(circle at 50% 30%, ${item.color}15, transparent 70%)` }}
          />

          {/* Icon */}
          <span
            className="relative z-10 text-5xl mb-3 transition-all duration-300 group-hover:scale-110"
            style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }}
          >
            {item.icon}
          </span>

          {/* Name */}
          <span className="relative z-10 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mb-3">
            {item.name}
          </span>

          {/* Proficiency bar */}
          <div className="relative z-10 w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.level}%` }}
              transition={{ duration: 0.8, delay: index * 0.07 + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(to right, ${item.color}80, ${item.color})` }}
            />
          </div>
          <span className="relative z-10 text-[10px] text-gray-600 mt-1 group-hover:text-gray-400 transition-colors">
            {item.level}%
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
