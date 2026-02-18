import React, { useState } from "react";
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";

/* ── Tag colour mapping ─────────────────────────────────── */
const TAG_CLASS = {
  react:     "tag-react",
  "node.js": "tag-nodejs",
  nodejs:    "tag-nodejs",
  ai:        "tag-ai",
  tailwind:  "tag-tailwind",
  mongodb:   "tag-mongodb",
  express:   "tag-express",
  bootstrap: "tag-bootstrap",
};

function getTagClass(tag) {
  return TAG_CLASS[tag.toLowerCase()] || "tag-default";
}

/* ── Category badge config ──────────────────────────────── */
const CATEGORY_STYLES = {
  "AI":         { bg: "bg-purple-500/20 border-purple-500/40 text-purple-300", emoji: "🤖" },
  "Full Stack": { bg: "bg-blue-500/20 border-blue-500/40 text-blue-300",       emoji: "🌐" },
  "Web App":    { bg: "bg-cyan-500/20 border-cyan-500/40 text-cyan-300",        emoji: "💻" },
  "Productivity":{ bg: "bg-green-500/20 border-green-500/40 text-green-300",   emoji: "📋" },
  "Sports":     { bg: "bg-orange-500/20 border-orange-500/40 text-orange-300", emoji: "🏏" },
};

/* ── Main Card Component ────────────────────────────────── */
function ProjectCards({ imgPath, isBlog, title, description, ghLink, demoLink, tags = [], category, featured, index }) {
  const [expanded, setExpanded] = useState(false);
  const catStyle = CATEGORY_STYLES[category] || CATEGORY_STYLES["Web App"];
  const shortDesc = description.length > 160 ? description.slice(0, 160).trimEnd() + "…" : description;
  const needsExpand = description.length > 160;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden"
      style={{
        background: "rgba(14, 11, 38, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Gradient border via box-shadow trick */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(199,112,240,0.35) 0%, rgba(37,117,252,0.25) 50%, rgba(199,112,240,0.1) 100%)",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Static subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.07] pointer-events-none z-0" />

      {/* ── Image ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "210px" }}>
        {imgPath ? (
          <img
            src={imgPath}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1040] to-[#0a0818] flex items-center justify-center">
            <BsGithub className="text-7xl text-white/10" />
          </div>
        )}

        {/* Gradient overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b26] via-transparent to-transparent" />

        {/* Project number watermark */}
        <div className="absolute top-3 left-4 font-bold text-white/10 text-5xl leading-none select-none"
             style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 featured-badge">
            <HiSparkles className="text-xs" /> Featured
          </div>
        )}

        {/* Category badge */}
        <div className={`absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-sm ${catStyle.bg}`}>
          <span>{catStyle.emoji}</span>
          <span>{category || "Web App"}</span>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="relative z-10 p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="text-xl font-bold text-white group-hover:text-[#c770f0] transition-colors duration-300 mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>

        {/* Animated underline */}
        <div className="h-[2px] w-8 bg-gradient-to-r from-[#c770f0] to-[#2575fc] mb-4 rounded-full group-hover:w-full transition-all duration-500 ease-out" />

        {/* Description */}
        <div className="flex-grow mb-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            {expanded ? description : shortDesc}
          </p>
          {needsExpand && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-xs font-semibold text-[#c770f0] hover:text-white transition-colors duration-200 focus:outline-none"
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getTagClass(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <ActionButton href={ghLink} icon={<BsGithub />} label={isBlog ? "Blog" : "GitHub"} variant="ghost" />
          {!isBlog && demoLink && (
            <ActionButton href={demoLink} icon={<BsArrowUpRightCircle />} label="Live Demo" variant="primary" />
          )}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ boxShadow: "0 0 60px rgba(199,112,240,0.12), inset 0 0 40px rgba(199,112,240,0.03)" }} />
    </motion.div>
  );
}

/* ── Action Button ──────────────────────────────────────── */
function ActionButton({ href, icon, label, variant = "ghost" }) {
  const base = "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group/btn";
  const styles = {
    ghost:   `${base} bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20`,
    primary: `${base} bg-gradient-to-r from-[#6a11cb] to-[#c770f0] text-white shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 hover:-translate-y-0.5`,
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles[variant]}>
      <span className="text-base group-hover/btn:scale-110 transition-transform duration-200">{icon}</span>
      {label}
    </a>
  );
}

export default ProjectCards;
