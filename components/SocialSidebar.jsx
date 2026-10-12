
"use client";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

export default function SocialSidebar() {
  const socialLinks = [
    // {
    //   name: "X",
    //   icon: FaXTwitter,
    //   url: "https://x.com/",
    //   color: "hover:text-black",
    // },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/zisantech-sapconsulting/",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/gtxinfotech/",
      color: "hover:text-[#E1306C]",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/",
      color: "hover:text-[#FF0000]",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/918797818499",
      color: "hover:text-[#25D366]",
    },
  ];

  return (
    <aside
      aria-label="Social media links"
      className="
        fixed left-0 top-1/2 z-40
        -translate-y-1/2
        rounded-r-[24px]
        border border-l-0 border-gray-200
        bg-white/95
        px-2 py-4
        shadow-sm
        backdrop-blur-sm
      "
    >
      <div className="flex flex-col items-center gap-3">
        {/* Vertical FOLLOW US */}
        <div className="flex flex-col items-center">
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-slate-600
            "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            FOLLOW US
          </span>

          <div className="mt-2 h-5 w-px bg-slate-400" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={`
                  flex h-5 w-5
                  items-center justify-center
                  text-[14px] text-slate-600
                  transition-all duration-300
                  hover:scale-110
                  ${social.color}
                `}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
