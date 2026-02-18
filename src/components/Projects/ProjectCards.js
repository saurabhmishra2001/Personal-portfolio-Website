import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";


function ProjectCards(props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-[#1a1a2e]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(199,112,240,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        {props.imgPath ? (
           <img src={props.imgPath} alt="card-img" className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        ) : (
           <div className="w-full h-56 bg-gradient-to-br from-[#2d1950] to-[#1a1a2e] flex items-center justify-center text-[#c770f0] text-7xl opacity-30 transform group-hover:scale-110 transition-transform duration-500">
              <BsGithub />
           </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           {/* Overlay Buttons can go here if preferred, but keeping them at bottom for accessibility */}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h5 className="text-2xl font-bold mb-3 text-white group-hover:text-[#c770f0] transition-colors duration-300">{props.title}</h5>
        <div className="h-1 w-12 bg-[#c770f0] mb-4 rounded-full group-hover:w-full transition-all duration-300" />
        <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed opacity-90">
          {props.description}
        </p>

        {props.tags && props.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {props.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/10 hover:border-[#c770f0] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-4 mt-auto">
          <Button href={props.ghLink} icon={<BsGithub />} text={props.isBlog ? "Blog" : "GitHub"} />
          {!props.isBlog && props.demoLink && (
             <Button href={props.demoLink} icon={<CgWebsite />} text="Live Demo" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Button({ href, icon, text }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-[#c770f0] hover:border-[#c770f0] text-white rounded-lg transition-all duration-300 font-semibold text-sm backdrop-blur-sm group/btn"
    >
       <span className="text-lg group-hover/btn:scale-110 transition-transform">{icon}</span> {text}
    </a>
  );
}

export default ProjectCards;

