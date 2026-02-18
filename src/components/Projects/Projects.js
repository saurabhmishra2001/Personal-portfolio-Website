import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import PlanArc from "../../Assets/Projects/PlanArc.png";
import MeetMind from "../../Assets/Projects/MeetMind.png";
import AapkiAcademy from "../../Assets/Projects/AapkiAcademy.png";
import Blogify from "../../Assets/Projects/Blogify.png";
import { BsGrid3X3Gap, BsListUl } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

/* ── Project Data ───────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    imgPath: Blogify,
    isBlog: false,
    title: "Blogify",
    description:
      "Blogify is a feature-rich blogging application that enables users to create, publish, and manage blog posts with a clean, responsive interface. It includes secure user authentication, a rich text editor for crafting content, featured image uploads, and full CRUD functionality for posts. The app leverages Appwrite as a Backend-as-a-Service for database, storage, and auth — eliminating the need for a custom backend. State is managed globally with Redux, and the UI is styled using Tailwind CSS for a modern, mobile-friendly experience.",
    ghLink: "https://github.com/saurabhmishra2001/Blogify-",
    demoLink: "https://blogify-self-nu.vercel.app/",
    tags: ["React", "Tailwind", "Appwrite", "Redux"],
    category: "Full Stack",
    featured: true,
    filterTags: ["all", "react", "fullstack"],
  },
  {
    imgPath: MeetMind,
    isBlog: false,
    title: "MeetMind",
    description:
      "MeetMind is an AI-powered meeting intelligence platform that turns conversations into actionable insights, allowing teams to focus on discussions while AI handles notes. Key Features: Real-time Transcription, Smart AI Summaries, Interactive AI Chat, Sentiment Analysis, and Meeting Analytics Dashboard.",
    ghLink: "https://github.com/saurabhmishra2001/MeetMind",
    demoLink: "https://meet-mind-emu6bhe0y-saurabhmishra2001s-projects.vercel.app/",
    tags: ["React", "Node.js", "AI", "Tailwind"],
    category: "AI",
    featured: true,
    filterTags: ["all", "ai", "react", "fullstack"],
  },
  {
    imgPath: AapkiAcademy,
    isBlog: false,
    title: "Aapki Academy",
    description:
      "Aapki Academy is a one-stop platform for comprehensive learning and preparation. Access expert courses, study materials, video lectures, and practice tests. Built with a full MERN stack, it features user authentication, course management, and a responsive design for seamless learning on any device.",
    ghLink: "https://github.com/saurabhmishra2001/aapki_academy",
    demoLink: "https://www.aapkiacademy.info/",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: false,
    filterTags: ["all", "react", "fullstack"],
  },
  {
    imgPath: PlanArc,
    isBlog: false,
    title: "PlanArc",
    description:
      "PlanArc is your all-in-one platform designed to streamline the planning and organization of learning, personal projects, and more. With a focus on structure and simplicity, PlanArc helps users map out their learning journeys, set clear goals, and track progress effectively. Whether you're a student, a professional, or just looking to organize your day-to-day tasks, PlanArc empowers you to manage your time, prioritize tasks, and achieve your goals with ease.",
    ghLink: "https://github.com/saurabhmishra2001/PlanArc",
    demoLink: "https://plan-arc-three.vercel.app/",
    tags: ["React", "Node.js", "Tailwind"],
    category: "Productivity",
    featured: false,
    filterTags: ["all", "react", "fullstack"],
  },
  {
    imgPath: null,
    isBlog: false,
    title: "ScoreBuzz",
    description:
      "ScoreBuzz is a real-time cricket score tracker that displays live scores for all major tournaments including IPL and international matches. Built with React.js and Node.js, it features a clean dashboard with match cards, live score updates, and tournament filtering — styled with Bootstrap and Tailwind CSS.",
    ghLink: "https://github.com/saurabhmishra2001/Cricket_App",
    demoLink: null,
    tags: ["React", "Node.js", "Bootstrap", "Tailwind"],
    category: "Sports",
    featured: false,
    filterTags: ["all", "react", "fullstack"],
  },
];

const FILTERS = [
  { label: "All",        key: "all" },
  { label: "AI",         key: "ai" },
  { label: "Full Stack", key: "fullstack" },
  { label: "React",      key: "react" },
];

/* ── Featured Spotlight ─────────────────────────────────── */
function FeaturedSpotlight({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden mb-16 group"
      style={{
        background: "rgba(14, 11, 38, 0.8)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(199,112,240,0.2)",
        boxShadow: "0 0 80px rgba(199,112,240,0.08)",
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(106,17,203,0.4), transparent), radial-gradient(ellipse 40% 60% at 30% 50%, rgba(37,117,252,0.2), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-0">
        {/* Image side */}
        <div className="w-full lg:w-1/2 relative overflow-hidden" style={{ minHeight: "320px" }}>
          {project.imgPath ? (
            <img
              src={project.imgPath}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ minHeight: "320px" }}
            />
          ) : (
            <div className="w-full h-80 bg-gradient-to-br from-[#1a1040] to-[#0a0818] flex items-center justify-center">
              <BsGithub className="text-8xl text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e0b26] lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b26] to-transparent lg:hidden" />
        </div>

        {/* Content side */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="featured-badge flex items-center gap-1">
              <HiSparkles className="text-xs" /> Featured Project
            </span>
            <span className="px-3 py-1 rounded-full border text-xs font-semibold bg-purple-500/20 border-purple-500/40 text-purple-300">
              🤖 {project.category}
            </span>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => {
              const tagClasses = {
                react: "tag-react", "node.js": "tag-nodejs", ai: "tag-ai",
                tailwind: "tag-tailwind", appwrite: "tag-ai", redux: "tag-bootstrap",
              };
              const cls = tagClasses[tag.toLowerCase()] || "tag-default";
              return (
                <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full border ${cls}`}>
                  {tag}
                </span>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href={project.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <BsGithub className="text-base" /> GitHub
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #6a11cb, #c770f0)",
                  boxShadow: "0 4px 20px rgba(199,112,240,0.3)",
                }}
              >
                <BsArrowUpRightCircle className="text-base" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── List View Card ─────────────────────────────────────── */
function ListCard({ project, index }) {
  const tagClasses = {
    react: "tag-react", "node.js": "tag-nodejs", ai: "tag-ai",
    tailwind: "tag-tailwind", mongodb: "tag-mongodb", express: "tag-express",
    bootstrap: "tag-bootstrap",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-white/[0.07] hover:border-[#c770f0]/30 transition-all duration-300"
      style={{ background: "rgba(14,11,38,0.6)", backdropFilter: "blur(16px)" }}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-full sm:w-36 h-28 rounded-xl overflow-hidden">
        {project.imgPath ? (
          <img src={project.imgPath} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1040] to-[#0a0818] flex items-center justify-center">
            <BsGithub className="text-4xl text-white/10" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-lg font-bold text-white group-hover:text-[#c770f0] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {project.title}
          </h3>
          {project.featured && (
            <span className="featured-badge flex-shrink-0 flex items-center gap-1">
              <HiSparkles className="text-xs" /> Featured
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className={`px-2 py-0.5 text-xs font-medium rounded-full border ${tagClasses[tag.toLowerCase()] || "tag-default"}`}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          <a href={project.ghLink} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors">
            <BsGithub /> GitHub
          </a>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-semibold text-[#c770f0] hover:text-white transition-colors">
              <BsArrowUpRightCircle /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Projects Section ──────────────────────────────── */
function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  const featured = ALL_PROJECTS.find((p) => p.featured && p.category === "AI");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.filterTags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="relative w-full min-h-screen bg-[#0a0818] text-white pt-32 pb-24 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(106,17,203,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(37,117,252,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest mb-6">
            <HiSparkles /> Portfolio
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Recent{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0 0%, #a855f7 40%, #2575fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Works
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            A curated collection of projects I've built — from AI-powered tools to full-stack web apps.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-10 mb-2">
            {[
              { num: ALL_PROJECTS.length, label: "Projects" },
              { num: ALL_PROJECTS.filter((p) => p.demoLink).length, label: "Live" },
              { num: ALL_PROJECTS.filter((p) => p.featured).length, label: "Featured" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold stat-number">{num}+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Featured Spotlight ─────────────────────────── */}
        {featured && <FeaturedSpotlight project={featured} />}

        {/* ── Filter + View Toggle Bar ────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl border border-white/[0.07]"
               style={{ background: "rgba(14,11,38,0.6)", backdropFilter: "blur(12px)" }}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f.key
                    ? "filter-tab-active"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl border border-white/[0.07]"
               style={{ background: "rgba(14,11,38,0.6)", backdropFilter: "blur(12px)" }}>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === "grid" ? "bg-[#c770f0]/20 text-[#c770f0]" : "text-gray-500 hover:text-white"
              }`}
              title="Grid view"
            >
              <BsGrid3X3Gap className="text-lg" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === "list" ? "bg-[#c770f0]/20 text-[#c770f0]" : "text-gray-500 hover:text-white"
              }`}
              title="List view"
            >
              <BsListUl className="text-lg" />
            </button>
          </div>
        </div>

        {/* ── Project Count ───────────────────────────────── */}
        <motion.p
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-500 mb-6 uppercase tracking-widest"
        >
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </motion.p>

        {/* ── Grid / List ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filtered.map((project, i) => (
                  <ProjectCard key={project.title} {...project} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {filtered.map((project, i) => (
                <ListCard key={project.title} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="section-divider mb-10" />
          <p className="text-gray-400 mb-6 text-base">Want to see more of my work?</p>
          <a
            href="https://github.com/saurabhmishra2001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #6a11cb 0%, #c770f0 100%)",
              boxShadow: "0 4px 30px rgba(199,112,240,0.25)",
            }}
          >
            <BsGithub className="text-xl" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
