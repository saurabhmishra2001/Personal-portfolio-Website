import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Saurabh_Resume.pdf";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0f0c29] text-white pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-12">
        
        {/* Download Button Top */}
        <div className="flex justify-center">
           <DownloadButton pdf={pdf} />
        </div>

        {/* PDF Document */}
        <div className="shadow-[0_0_30px_rgba(199,112,240,0.3)] rounded-lg overflow-hidden flex justify-center">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        {/* Download Button Bottom */}
        <div className="flex justify-center">
           <DownloadButton pdf={pdf} />
        </div>
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
      className="flex items-center gap-2 px-8 py-3 bg-[#623686] hover:bg-[#6d20c5] text-white rounded-full font-bold shadow-lg hover:shadow-[#c770f0]/50 hover:-translate-y-1 transition-all duration-300"
    >
      <AiOutlineDownload className="text-xl" />
      Download CV
    </a>
  );
}

export default ResumeNew;
