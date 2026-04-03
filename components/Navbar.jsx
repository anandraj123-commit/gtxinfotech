"use client";
import { useState, useEffect } from "react";
import { services } from "@/data/services"; // 👈 adjust path

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full sticky top-0 z-50 px-6 py-4 flex items-center transition-all duration-300
      ${scrolled ? "bg-[#1f2933] shadow-lg" : "bg-[#1f2933]/90 backdrop-blur"}`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-300 items-center absolute left-1/2 transform -translate-x-1/2">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>

        {/* SERVICES */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="hover:text-white flex items-center gap-1">
            Services ▾
          </span>

          {/* DROPDOWN */}
          <div
            className={`absolute top-10 left-0 bg-white text-[#1a2a6c] shadow-2xl w-[700px] p-6 z-50 rounded-md
            transform transition-all duration-300 ease-out
            ${
              open
                ? "opacity-100 translate-y-0 scale-100 visible"
                : "opacity-0 translate-y-4 scale-95 invisible"
            }`}
          >
            {services.map((serviceGroup, i) => (
              <div key={serviceGroup.id}>
                {/* SECTION TITLE */}
                <h2
                  className={`text-lg font-semibold mb-4 ${
                    i !== 0 ? "border-t pt-4" : ""
                  }`}
                >
                  {serviceGroup.type}
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-3 gap-x-4 gap-y-3 text-[14px] mb-6">
                  {serviceGroup.category.map((item, index) => (
                    <div key={item.id} className="flex items-center">
                      <span className="hover:text-blue-600 cursor-pointer transition">
                        {item.title}
                      </span>

                      {index % 3 !== 2 &&
                        index !== serviceGroup.category.length - 1 && (
                          <span className="mx-2 text-gray-400">|</span>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </li>

        <li className="hover:text-white cursor-pointer">
          Training Programm
        </li>
        <li className="hover:text-white cursor-pointer">Contact</li>
        <li className="hover:text-white cursor-pointer">Carrier</li>
      </ul>

      <div className="w-8"></div>
    </div>
  );
}