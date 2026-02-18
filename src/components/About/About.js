import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      className="relative w-full min-h-screen text-white pt-32 pb-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0a22 0%, #0a0818 100%)" }}
    >
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(37,117,252,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(199,112,240,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest mb-6">
            Who I Am
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Know Who{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I'M
            </span>
          </h1>
        </motion.div>

        {/* ── About Card + Image ──────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Aboutcard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div
              className="absolute inset-0 pointer-events-none animate-glow-pulse"
              style={{ background: "radial-gradient(circle, rgba(199,112,240,0.15) 0%, transparent 70%)", filter: "blur(30px)" }}
            />
            <img
              src={laptopImg}
              alt="about"
              className="w-full max-w-md relative z-10 hover:scale-105 transition-transform duration-500"
              style={{ filter: "drop-shadow(0 0 30px rgba(199,112,240,0.25))" }}
            />
          </motion.div>
        </div>

        {/* ── Divider ─────────────────────────────────── */}
        <div className="section-divider mb-20" />

        {/* ── Tech Stack ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2575fc]/30 bg-[#2575fc]/10 text-[#2575fc] text-xs font-semibold uppercase tracking-widest mb-5">
            Skills
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Professional{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skillset
            </span>
          </h2>
        </motion.div>

        <Techstack />

        {/* ── Divider ─────────────────────────────────── */}
        <div className="section-divider my-20" />

        {/* ── Tools ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest mb-5">
            Toolbox
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tools
            </span>{" "}
            I Use
          </h2>
        </motion.div>

        <Toolstack />
      </div>
    </section>
  );
}

export default About;
