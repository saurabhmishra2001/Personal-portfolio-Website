import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

const NAV_ITEMS = [
  { to: "home",    icon: <AiOutlineHome />,                    label: "Home" },
  { to: "about",   icon: <AiOutlineUser />,                    label: "About" },
  { to: "project", icon: <AiOutlineFundProjectionScreen />,    label: "Projects" },
  { to: "resume",  icon: <CgFileDocument />,                   label: "Resume" },
];

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "nav-glass shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ──────────────────────────────────── */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setExpand(false)}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
              style={{ background: "linear-gradient(135deg, #6a11cb, #c770f0)" }}
            >
              SM
            </div>
            <span
              className="text-xl font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #c770f0, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sk.M.
            </span>
          </Link>

          {/* ── Desktop Menu ──────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                isActive={activeSection === item.to}
                onSetActive={() => setActiveSection(item.to)}
              />
            ))}

            {/* GitHub star button */}
            <a
              href="https://github.com/saurabhmishra2001/Personal-portfolio-Website"
              target="_blank"
              rel="noreferrer"
              title="Star on GitHub"
              className="ml-3 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white border border-[#c770f0]/40 bg-[#c770f0]/10 hover:bg-[#c770f0]/20 hover:border-[#c770f0]/60 transition-all duration-300"
            >
              <CgGitFork className="text-base" />
              <AiFillStar className="text-base text-yellow-400" />
            </a>
          </div>

          {/* ── Mobile Hamburger ──────────────────────── */}
          <button
            onClick={() => setExpand(!expand)}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200 focus:outline-none"
          >
            {expand ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────── */}
      <AnimatePresence>
        {expand && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 right-0 z-40 mx-4 rounded-2xl border border-white/[0.08] overflow-hidden"
            style={{ background: "rgba(10,8,24,0.95)", backdropFilter: "blur(24px)" }}
          >
            <div className="p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.to}
                  {...item}
                  onClick={() => setExpand(false)}
                />
              ))}
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <a
                  href="https://github.com/saurabhmishra2001/Personal-portfolio-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #6a11cb, #c770f0)" }}
                >
                  <CgGitFork /> <AiFillStar className="text-yellow-400" /> Star on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ to, icon, label, onSetActive }) {
  return (
    <Link
      activeClass="active-nav"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onSetActive={onSetActive}
      className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-all duration-200 cursor-pointer group"
    >
      <span className="text-base group-hover:text-[#c770f0] transition-colors duration-200">{icon}</span>
      {label}
      {/* Active underline */}
      <span className="absolute bottom-1 left-3.5 w-0 h-0.5 bg-gradient-to-r from-[#c770f0] to-[#2575fc] rounded-full transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
    </Link>
  );
}

function MobileNavItem({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer group"
    >
      <span className="text-xl text-[#c770f0]">{icon}</span>
      {label}
    </Link>
  );
}

export default NavBar;
