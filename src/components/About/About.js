import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0c29] text-white pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              Know Who <strong className="text-[#c770f0]">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          
          {/* Image */}
          <div className="flex justify-center md:justify-end pr-0 md:pr-12">
            <img 
              src={laptopImg} 
              alt="about" 
              className="w-full max-w-lg drop-shadow-[0_0_30px_rgba(199,112,240,0.3)] hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <strong className="text-[#c770f0]">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-20">
          <strong className="text-[#c770f0]">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </section>
  );
}

export default About;

