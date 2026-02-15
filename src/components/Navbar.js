import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFundProjectionScreen, 
  AiFillStar,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        navColour ? "bg-opacity-80 backdrop-blur-md bg-[#0f0c29] shadow-lg border-b border-white/5" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c770f0] to-[#2575fc] hover:opacity-80 transition-opacity cursor-pointer" 
              onClick={() => updateExpanded(false)}
            >
              Sk.M.
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavItem to="home" icon={<AiOutlineHome />} label="Home" />
              <NavItem to="about" icon={<AiOutlineUser />} label="About" />
              <NavItem to="project" icon={<AiOutlineFundProjectionScreen />} label="Projects" />
              <NavItem to="resume" icon={<CgFileDocument />} label="Resume" />
              
              <a
                href="https://github.com/saurabhmishra2001/Personal-portfolio-Website"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-[#6a11cb]/20 border border-[#6a11cb] rounded-md text-white hover:bg-[#6a11cb]/40 transition-colors"
              >
                <CgGitFork className="text-lg" /> <AiFillStar className="text-lg" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => updateExpanded(!expand)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#c770f0] focus:outline-none"
            >
              {expand ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {expand && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 top-16 z-40 bg-[#0f0c29]/95 backdrop-blur-xl border-t border-white/10 h-screen"
          >
            <div className="px-4 pt-4 pb-3 space-y-2 flex flex-col items-center justify-center h-full">
              <MobileNavItem to="home" icon={<AiOutlineHome />} label="Home" onClick={() => updateExpanded(false)} />
              <MobileNavItem to="about" icon={<AiOutlineUser />} label="About" onClick={() => updateExpanded(false)} />
              <MobileNavItem to="project" icon={<AiOutlineFundProjectionScreen />} label="Projects" onClick={() => updateExpanded(false)} />
              <MobileNavItem to="resume" icon={<CgFileDocument />} label="Resume" onClick={() => updateExpanded(false)} />
              
              <a
                href="https://github.com/saurabhmishra2001/Personal-portfolio-Website"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#6a11cb] rounded-full text-white font-medium hover:bg-[#5a0ebb] transition-transform active:scale-95"
              >
                <CgGitFork /> Star on GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link
      activeClass="text-[#c770f0] bg-white/10"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all relative group cursor-pointer"
    >
      <span className="text-lg group-hover:text-[#c770f0] transition-colors">{icon}</span>
      {label}
      <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-[#c770f0] transition-all group-hover:w-[calc(100%-24px)]" />
    </Link>
  );
}

function MobileNavItem({ to, icon, label, onClick }) {
  return (
    <Link
      activeClass="text-[#c770f0]"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-4 text-xl font-medium text-white hover:text-[#c770f0] transition-colors w-full justify-center border-b border-white/5 cursor-pointer"
    >
      <span className="text-2xl text-[#c770f0]">{icon}</span>
      {label}
    </Link>
  );
}

export default NavBar;


