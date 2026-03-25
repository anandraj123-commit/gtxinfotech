"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sapServices = [
    "SAP ECC & S/4 HANA Rollout",
    "SAP Custom Development",
    "SAP Support & Maintenance",
    "SAP Integration",
    "SAP Data Migration",
    "SAP Consulting"
  ];

  const otherServices = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Services",
    "Digital Marketing",
    "SEO Optimization"
  ];

  return (
    <div
      className={`w-full sticky top-0 z-50 px-6 py-4 flex items-center transition-all duration-300
      ${scrolled ? "bg-[#1f2933] shadow-lg" : "bg-[#1f2933]/90 backdrop-blur"}`}
    >
      {/* LEFT (Logo) */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8  border-teal-400  flex items-center justify-center">
          <img
            src="/images/logo.jpg"   // 👈 your logo
            alt="logo" width="10px"
            className="w-15 h-15 object-contain"
          />
        </div>
      </div>

      {/* CENTER (Menu) */}
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
            {/* SAP SERVICES */}
            <h2 className="text-lg font-semibold mb-4">
              SAP SERVICES
            </h2>

            <div className="grid grid-cols-3 gap-x-4 gap-y-3 text-[14px] mb-6">
              {sapServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="hover:text-blue-600 cursor-pointer transition">
                    {service}
                  </span>

                  {index % 3 !== 2 && index !== sapServices.length - 1 && (
                    <span className="mx-2 text-gray-400">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* OTHER SERVICES */}
            <h2 className="text-lg font-semibold mb-4 border-t pt-4">
              OTHER SERVICES
            </h2>

            <div className="grid grid-cols-3 gap-x-4 gap-y-3 text-[14px]">
              {otherServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="hover:text-blue-600 cursor-pointer transition">
                    {service}
                  </span>

                  {index % 3 !== 2 && index !== otherServices.length - 1 && (
                    <span className="mx-2 text-gray-400">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </li>

        <li className="hover:text-white cursor-pointer">Training Programm</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
        <li className="hover:text-white cursor-pointer">Carrier</li>
      </ul>

      {/* RIGHT (Empty space to balance layout) */}
      <div className="w-8"></div>

      {/* Language (kept as is) */}
      {/* <div className="border border-gray-500 px-2 py-1 text-sm cursor-pointer hover:border-white transition">
        En ▾
      </div> */}
    </div>
  );
}