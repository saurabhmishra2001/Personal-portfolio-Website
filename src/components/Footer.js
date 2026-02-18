import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpCircle } from "react-icons/bs";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: "#07050f" }}>
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(199,112,240,0.5), rgba(37,117,252,0.4), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(106,17,203,0.15) 0%, transparent 70%)", filter: "blur(30px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">

        {/* ── Top Row ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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
                Saurabh Mishra
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              System Engineer & MERN Stack Developer building scalable web apps and AI-powered tools.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <FooterSocialIcon href="https://github.com/saurabhmishra2001" icon={<AiFillGithub />} label="GitHub" />
              <FooterSocialIcon href="https://www.linkedin.com/in/saurabhmishra2001/" icon={<FaLinkedinIn />} label="LinkedIn" />
              <FooterSocialIcon href="https://www.instagram.com/saurabh_mishra_/" icon={<AiFillInstagram />} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "home",    label: "Home" },
                { to: "about",   label: "About" },
                { to: "project", label: "Projects" },
                { to: "resume",  label: "Resume" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-500 hover:text-[#c770f0] text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#c770f0] group-hover:w-4 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get In Touch
            </h4>
            <a
              href="mailto:saurabhmishra2001@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c770f0] text-sm transition-colors duration-200 mb-4"
            >
              <HiOutlineMail className="text-base" />
              saurabhmishra2001@gmail.com
            </a>
            <p className="text-gray-600 text-xs mt-3 leading-relaxed">
              Open to freelance projects, full-time roles, and interesting collaborations.
            </p>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────── */}
        <div
          className="h-px mb-6"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        {/* ── Bottom Row ──────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {year} Saurabh Kumar Mishra · Designed & Developed with ❤️
          </p>
          <p className="text-gray-600 text-xs">
            Built with{" "}
            <span className="text-[#61dafb]">React</span> ·{" "}
            <span className="text-[#c770f0]">Framer Motion</span> ·{" "}
            <span className="text-[#38bdf8]">Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#c770f0] transition-colors cursor-pointer group"
          >
            <BsArrowUpCircle className="text-base group-hover:-translate-y-0.5 transition-transform duration-200" />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-[#c770f0]/20 hover:border-[#c770f0]/40 transition-all duration-300 text-base"
    >
      {icon}
    </a>
  );
}

export default Footer;
