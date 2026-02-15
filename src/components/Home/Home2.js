import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Home2() {
  return (
    <section className="w-full relative py-20 bg-[#0f0c29] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-8/12 text-white space-y-6 text-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold uppercase">
              Let Me <span className="text-[#c770f0]">Introduce</span> Myself
            </h1>
            <p className="leading-relaxed text-gray-300 text-lg">
              I am a passionate <b className="text-[#c770f0]">Software Developer</b> with a strong foundation in building scalable web applications. 🚀
              <br /><br />
              I am fluent in classics like
              <i className="text-[#c770f0] not-italic font-semibold"> Java, Javascript, and SQL. </i>
              <br /><br />
              My field of Interest includes building new &nbsp;
              <i className="text-[#c770f0] not-italic font-semibold">Web Technologies and Products </i> 
              and optimizing complex systems for performance and reliability.
              <br /><br />
              I have experience working with <b className="text-[#c770f0]">Product Lifecycle Management (PLM)</b> and enjoy solving real-world challenges through code.
              <br /><br />
              Whenever possible, I apply my passion for developing products with 
              <i className="text-[#c770f0] not-italic font-semibold"> Modern Javascript Libraries and Frameworks </i>
              like
              <i className="text-[#c770f0] not-italic font-semibold"> React.js, Next.js, and Node.js</i>.
            </p>
          </motion.div>

          {/* Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-4/12 flex justify-center"
          >
            <Tilt>
              <img src={myImg} className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_30px_rgba(199,112,240,0.4)]" alt="avatar" />
            </Tilt>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">FIND ME ON</h1>
          <p className="text-gray-400 mb-8">Feel free to <span className="text-[#c770f0]">connect</span> with me</p>
          
          <div className="flex justify-center gap-6">
            <SocialIcon href="https://github.com/saurabhmishra2001" icon={<AiFillGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/saurabhmishra2001/" icon={<FaLinkedinIn />} />
            <SocialIcon href="https://www.instagram.com/saurabh_mishra_/" icon={<AiFillInstagram />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#0f0c29] text-2xl hover:bg-[#c770f0] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_#c770f0] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

export default Home2;

