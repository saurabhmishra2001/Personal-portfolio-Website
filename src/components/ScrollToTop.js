import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-[99] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <button 
        onClick={scrollToTop}
        className="bg-[#c770f0] p-3 rounded-full text-white shadow-[0_0_10px_#c770f0] hover:bg-[#a54dc0] hover:-translate-y-1 transition-all duration-300"
      >
        <AiOutlineArrowUp size={24} />
      </button>
    </div>
  );
}

export default ScrollToTop;

