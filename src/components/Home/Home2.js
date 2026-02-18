import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "Jan 2025 – Present",
    role: "Senior System Engineer",
    org: "Infosys",
    desc: "Leading enterprise-level software solutions, driving PLM system enhancements and mentoring junior engineers.",
    color: "#c770f0",
  },
  {
    year: "Aug 2024 – Dec 2024",
    role: "System Engineer",
    org: "Infosys",
    desc: "Contributed to enterprise-level software solutions and PLM systems.",
    color: "#a855f7",
  },
  {
    year: "2020 – 2024",
    role: "B.Tech — Computer Science",
    org: "ITM Gorakhpur",
    desc: "Algorithms, data structures, and software engineering fundamentals.",
    color: "#2575fc",
  },
];

function Home2() {
  return (
    <section className="w-full relative py-24 overflow-hidden" id="about-intro"
             style={{ background: "linear-gradient(180deg, #0a0818 0%, #0d0a22 100%)" }}>

      {/* Subtle divider at top */}
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* ── Description ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-7/12 text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest">
              About Me
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let Me{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c770f0, #2575fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Introduce
              </span>{" "}
              Myself
            </h2>

            <p className="leading-relaxed text-gray-400 text-base">
              I am a passionate{" "}
              <span className="text-[#c770f0] font-semibold">Software Developer</span>{" "}
              with a strong foundation in building scalable web applications. 🚀
            </p>
            <p className="leading-relaxed text-gray-400 text-base">
              Fluent in{" "}
              <span className="text-[#c770f0] font-semibold">Java, JavaScript, and SQL</span>, I specialise in
              building modern web products with{" "}
              <span className="text-[#c770f0] font-semibold">React.js, Next.js, and Node.js</span>.
            </p>
            <p className="leading-relaxed text-gray-400 text-base">
              I have experience working with{" "}
              <span className="text-[#c770f0] font-semibold">Product Lifecycle Management (PLM)</span> and enjoy
              solving real-world challenges through clean, performant code.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-[#c770f0] pl-5 py-1 mt-6">
              <p className="text-gray-300 italic text-base">
                "Strive to build things that make a difference!"
              </p>
              <p className="text-gray-500 text-sm mt-1">— Saurabh</p>
            </div>
          </motion.div>

          {/* ── Avatar ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 flex justify-center relative"
          >
            {/* Glow behind avatar */}
            <div
              className="absolute inset-0 pointer-events-none animate-glow-pulse"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(199,112,240,0.2) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
              <img
                src={myImg}
                className="w-64 md:w-72 lg:w-80 relative z-10"
                alt="avatar"
                style={{ filter: "drop-shadow(0 0 40px rgba(199,112,240,0.35))" }}
              />
            </Tilt>
          </motion.div>
        </div>

        {/* ── Experience Timeline ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3
            className="text-2xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Experience &{" "}
            <span style={{ background: "linear-gradient(135deg,#c770f0,#2575fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Education
            </span>
          </h3>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#c770f0] via-[#2575fc] to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-3 top-1.5 w-4 h-4 rounded-full border-2 border-[#0a0818]"
                    style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                  />

                  <div
                    className="p-5 rounded-2xl border border-white/[0.07] hover:border-[#c770f0]/30 transition-all duration-300"
                    style={{ background: "rgba(14,11,38,0.6)", backdropFilter: "blur(16px)" }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{item.year}</span>
                    <h4 className="text-white font-bold text-base mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.role}
                    </h4>
                    <span className="text-sm font-semibold" style={{ color: item.color }}>{item.org}</span>
                    <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Social Links ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Find Me On
          </h3>
          <p className="text-gray-500 mb-8 text-sm">
            Feel free to{" "}
            <span className="text-[#c770f0]">connect</span> with me
          </p>

          <div className="flex justify-center gap-5">
            <SocialIcon href="https://github.com/saurabhmishra2001" icon={<AiFillGithub />} label="GitHub" color="#c770f0" />
            <SocialIcon href="https://www.linkedin.com/in/saurabhmishra2001/" icon={<FaLinkedinIn />} label="LinkedIn" color="#2575fc" />
            <SocialIcon href="https://www.instagram.com/saurabh_mishra_/" icon={<AiFillInstagram />} label="Instagram" color="#e1306c" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="group flex flex-col items-center gap-2"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 group-hover:-translate-y-1"
        style={{
          "--hover-color": color,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${color}20`;
          e.currentTarget.style.borderColor = `${color}60`;
          e.currentTarget.style.color = color;
          e.currentTarget.style.boxShadow = `0 8px 30px ${color}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{label}</span>
    </a>
  );
}

export default Home2;
