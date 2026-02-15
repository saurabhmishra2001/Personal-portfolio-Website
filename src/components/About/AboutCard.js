import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-[#1a1a2e]/60 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-[#c770f0]/20 transition-all duration-300">
      <blockquote className="text-lg text-gray-300 space-y-4">
        <p className="text-justify leading-loose text-lg">
          Hi Everyone, I am <span className="text-[#c770f0] font-semibold">Saurabh Kumar Mishra </span>
          from <span className="text-[#c770f0] font-semibold"> Gorakhpur, Uttar Pradesh, India.</span>
          <br /><br />
          I am currently working as a <span className="text-[#c770f0] font-semibold">System Engineer</span> at Infosys, where I contribute to enterprise-level software solutions.
          <br /><br />
          I hold a Bachelor of Technology (B.Tech) in Computer Science from the Institute of Technology and Management, Gorakhpur. My academic background has provided me with a solid understanding of algorithms, data structures, and software engineering principles.
          <br /><br />
          Beyond professional development, I focus on continuous learning and exploring new technologies in the ever-evolving tech landscape.
          <br /><br />
          Apart from coding, here are a few activities I love to do!
        </p>

        <ul className="space-y-3 mt-4 ml-6">
          <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 cursor-default">
            <ImPointRight className="text-[#c770f0]" /> Playing Games
          </li>
          <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 cursor-default">
            <ImPointRight className="text-[#c770f0]" /> Reading Books
          </li>
          <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 cursor-default">
            <ImPointRight className="text-[#c770f0]" /> Travelling
          </li>
        </ul>

         <p className="mt-8 text-[#c770f0]/80 italic font-medium px-4 border-l-4 border-[#c770f0]">
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="text-right text-gray-400 mt-2">— Saurabh</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;

