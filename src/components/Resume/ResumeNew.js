import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdf from "../../Assets/Saurabh_Resume.pdf";
import Particle from "../Particle";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen text-white pt-32 pb-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0818 0%, #0d0a22 100%)" }}
    >
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(106,17,203,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c770f0]/30 bg-[#c770f0]/10 text-[#c770f0] text-xs font-semibold uppercase tracking-widest mb-6">
            Resume
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c770f0, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resume
            </span>
          </h1>
          <p className="text-gray-400 mt-3 text-base">
            Download or view my latest resume below.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DownloadButton pdf={pdf} />
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08]"
          style={{
            boxShadow: "0 0 60px rgba(199,112,240,0.15), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </motion.div>

        {/* Download Button Bottom */}
        <DownloadButton pdf={pdf} />
      </div>
    </div>
  );
}

function DownloadButton({ pdf }) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #c770f0)",
        boxShadow: "0 4px 30px rgba(199,112,240,0.3)",
      }}
    >
      <AiOutlineDownload className="text-xl" />
      Download CV
    </a>
  );
}

export default ResumeNew;
