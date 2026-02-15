import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

function Techstack() {
  const icons = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative w-36 h-36 flex flex-col items-center justify-center p-4 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md hover:scale-105 hover:border-[#c770f0]/50 hover:shadow-[0_0_30px_rgba(199,112,240,0.3)] transition-all duration-300 group cursor-pointer overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c770f0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <span className="relative z-10 text-6xl text-white group-hover:text-[#c770f0] group-hover:scale-110 transition-all duration-300 ease-out drop-shadow-lg">
            {item.icon}
          </span>
          <span className="relative z-10 mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
