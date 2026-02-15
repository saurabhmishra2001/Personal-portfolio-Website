import React from "react";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Background Particles fixed */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <div className="relative z-10 w-full pt-32 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-left space-y-4 md:pl-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi There!{" "}
            <span className="inline-block animate-wave origin-bottom-right text-4xl md:text-5xl" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            I'M <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#c770f0] to-[#2575fc]">Saurabh Kumar Mishra</strong>
          </h1>


          <div className="text-2xl md:text-3xl font-semibold text-[#c770f0] h-20 pt-4">
            <Type />
          </div>


          <div className="mt-8">
             <a 
               href="mailto:saurabhmishra2001@google.com" 
               className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-bold text-lg shadow-[0_4px_15px_rgba(37,117,252,0.4)] hover:shadow-[0_6px_25px_rgba(37,117,252,0.6)] hover:-translate-y-1 transition-all duration-300 transform active:scale-95"
             >
                HIRE ME
             </a>
          </div>

        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-5/12 flex justify-center mt-12 md:mt-0"
        >
          <img
            src={homeLogo}
            alt="home pic"
            className="w-full max-w-lg object-contain drop-shadow-[0_0_20px_rgba(199,112,240,0.5)] animate-float"
            style={{ maxHeight: "450px" }}
          />
        </motion.div>
      </div>
      
      <Home2 />
    </section>
  );
}

export default Home;

