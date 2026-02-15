import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-[#0a0416] py-6 text-white relative z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base font-medium text-gray-400">Designed and Developed by Saurabh Mishra</h3>
        </div>
        <div className="text-center">
          <h3 className="text-sm md:text-base font-medium text-gray-400">Copyright © {year} SM</h3>
        </div>
        <div className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end gap-6">
            <SocialIcon href="https://github.com/saurabhmishra2001" icon={<AiFillGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/saurabh-kumar-mishra-99352s/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://www.instagram.com/saurabhmishra4312/" icon={<AiFillInstagram />} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-[#c770f0] text-xl transition-colors duration-300"
      >
        {icon}
      </a>
    </li>
  );
}

export default Footer;
