"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, []);

  const logoColor = "#ff6a00";

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/gtxinfotech-sapservices/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/gtxinfotech/",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@gtxinfotech"
    },
  ];

  return (
    <div
      className={`w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white
      transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-3 md:gap-0">

        {/* LEFT: SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full
                bg-white/10 backdrop-blur-md
                transition-all duration-300 cursor-pointer shadow-md
                hover:scale-110"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = logoColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
                }
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="flex items-center gap-4 text-sm whitespace-nowrap">
          
          {/* PHONE */}
          <a
            href="tel:+918797818499"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Phone
              size={16}
              className="transition group-hover:scale-110"
              style={{ color: logoColor }}
            />
            <span
              className="transition group-hover:text-[color:var(--logo)]"
              style={{ "--logo": logoColor }}
            >
              +91 8797818499
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:info@gtxinfotech.com"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Mail
              size={16}
              className="transition group-hover:scale-110"
              style={{ color: logoColor }}
            />
            <span
              className="transition group-hover:text-[color:var(--logo)]"
              style={{ "--logo": logoColor }}
            >
              info@gtxinfotech.com
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}