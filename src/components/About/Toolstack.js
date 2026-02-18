import React from "react";
import { SiPostman, SiGooglechrome, SiVercel, SiDocker, SiGithub } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const TOOLS = [
  { icon: <FaWindows />,       name: "Windows",  color: "#00adef" },
  { icon: <VscVscode />,       name: "VS Code",  color: "#007acc" },
  { icon: <SiPostman />,       name: "Postman",  color: "#ff6c37" },
  { icon: <SiGooglechrome />,  name: "Chrome",   color: "#4285f4" },
  { icon: <SiVercel />,        name: "Vercel",   color: "#ffffff" },
  { icon: <SiGithub />,        name: "GitHub",   color: "#e6edf3" },
];

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {TOOLS.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group relative flex flex-col items-center justify-center p-5 w-28 rounded-2xl border border-white/[0.07] cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1"
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

          <span
            className="relative z-10 text-4xl mb-2.5 transition-all duration-300 group-hover:scale-110"
            style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }}
          >
            {item.icon}
          </span>
          <span className="relative z-10 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Toolstack;
