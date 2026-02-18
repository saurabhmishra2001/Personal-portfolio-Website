import React from "react";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BsArrowDown } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Home() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden" style={{ background: "#0a0818" }}>
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Ambient mesh glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(106,17,203,0.6), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-20"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(37,117,252,0.5), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] opacity-15"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(199,112,240,0.4), transparent)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-12">

        {/* ── Text Section ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 text-left space-y-5 md:pl-8"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c770f0] animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Greeting */}
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi There!{" "}
            <span className="inline-block animate-wave origin-bottom-right" role="img" aria-label="wave">
              👋🏻
            </span>
          </h1>

          {/* Name */}
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            I'M{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0 0%, #a855f7 40%, #2575fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Saurabh Kumar Mishra
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl font-semibold text-[#c770f0] h-14 pt-1">
            <Type />
          </div>

          {/* Short bio */}
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            System Engineer at Infosys · MERN Stack Developer · Building scalable web apps and AI-powered tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:saurabhmishra2001@gmail.com"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 animate-pulse-ring"
              style={{
                background: "linear-gradient(135deg, #6a11cb 0%, #c770f0 100%)",
                boxShadow: "0 4px 30px rgba(199,112,240,0.35)",
              }}
            >
              <HiOutlineMail className="text-xl" />
              Hire Me
            </a>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white font-semibold text-base border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* ── Image Section ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0 relative"
        >
          {/* Glow ring behind image */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none animate-glow-pulse"
            style={{
              background: "radial-gradient(circle, rgba(199,112,240,0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <img
            src={homeLogo}
            alt="home illustration"
            className="w-full max-w-md object-contain animate-float relative z-10"
            style={{
              maxHeight: "460px",
              filter: "drop-shadow(0 0 40px rgba(199,112,240,0.4))",
            }}
          />
        </motion.div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="scroll-indicator">
          <div className="scroll-indicator-dot" />
        </div>
      </motion.div>

      <Home2 />
    </section>
  );
}

export default Home;
