"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaShareAlt,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const SocialExpandable = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
      onMouseEnter={() => !open && setOpen(true)}
    >
      <div className="relative flex flex-col items-center">

        {/* 📧 Email */}
        <a
          href="mailto:info@zisantech.com"
          title="Email Us" target="_blank" rel="noopener noreferrer"
          className={`mb-3 w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg
          transition-all duration-500
          ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <FaEnvelope />
        </a>

        {/* 📞 Phone */}
        <a
          href="tel:+918797818499"
          title="Call Us" target="_blank" rel="noopener noreferrer"
          className={`mb-3 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg
          transition-all duration-500 delay-75
          ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <FaPhoneAlt />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gtxinfotech"
          title="Instagram" target="_blank" rel="noopener noreferrer"
          className={`mb-3 w-12 h-12 rounded-full bg-[#E4405F] text-white flex items-center justify-center shadow-lg
          transition-all duration-500 delay-100
          ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/zisantech-sapconsulting/"
          title="LinkedIn" target="_blank" rel="noopener noreferrer"
          className={`mb-3 w-12 h-12 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-lg
          transition-all duration-500 delay-150
          ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <FaLinkedinIn />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@gtxinfotech"
          title="YouTube" target="_blank" rel="noopener noreferrer"
          className={`mb-3 w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg
          transition-all duration-500 delay-200
          ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <FaYoutube />
        </a>

        {/* Main Button */}
        <button
          onClick={() => setOpen(false)}
          className="w-14 h-14 rounded-full bg-[#ff4a17] text-white flex items-center justify-center shadow-lg 
          hover:scale-110 transition-all duration-300"
        >
          {open ? <FaTimes /> : <FaShareAlt />}
        </button>
      </div>
    </div>
  );
};

export default SocialExpandable;