"use client";

import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50 flex flex-col gap-4">
      
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        className="group"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg 
        transition-all duration-300 
        group-hover:bg-[#E4405F] group-hover:scale-110">
          
          <FaInstagram className="text-gray-700 text-xl transition-all duration-300 group-hover:text-white" />
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        className="group"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg 
        transition-all duration-300 
        group-hover:bg-[#0077B5] group-hover:scale-110">
          
          <FaLinkedinIn className="text-gray-700 text-xl transition-all duration-300 group-hover:text-white" />
        </div>
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        className="group"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg 
        transition-all duration-300 
        group-hover:bg-[#FF0000] group-hover:scale-110">
          
          <FaYoutube className="text-gray-700 text-xl transition-all duration-300 group-hover:text-white" />
        </div>
      </a>

    </div>
  );
};

export default SocialSidebar;