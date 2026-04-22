"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { training } from "@/data/training";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // MOBILE STATES
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileTraining, setMobileTraining] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Prevent background scroll (FIX)
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

  const navLink = (path) =>
    `cursor-pointer transition-all duration-200 ${
      pathname === path
        ? "text-white font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  const mobileNavLink = (path) =>
    `block py-2 px-3 rounded transition-all duration-200 ${
      pathname === path
        ? "bg-orange-500 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`w-full sticky top-0 z-50 px-6 py-4 flex items-center transition-all duration-300
        ${
          scrolled
            ? "bg-[#1f2933] shadow-lg"
            : "bg-[#1f2933]/90 backdrop-blur"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
  <Link href="/">
    <img
      src="/images/logo.jpg"
      alt="logo"
      className="w-20 h-13 object-contain transition duration-300 group-hover:scale-110 group-hover:brightness-125"
    />
  </Link>
</div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMobileMenu(true)}>
            <span className="text-white text-2xl">☰</span>
          </button>
        </div>

        {/* DESKTOP MENU (UNCHANGED) */}
        <ul className="hidden md:flex gap-6 text-sm items-center absolute left-1/2 transform -translate-x-1/2">
          <li><Link href="/" className={navLink("/")}>Home</Link></li>
          <li><Link href="/about" className={navLink("/about")}>About</Link></li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="text-gray-300 hover:text-white flex items-center gap-1 cursor-pointer">
              Services ▾
            </span>

            <div
              className={`absolute top-10 left-0 bg-white text-[#1a2a6c] shadow-2xl w-[700px] p-6 z-50 rounded-md
              transform transition-all duration-300 ease-out
              ${
                open
                  ? "opacity-100 translate-y-0 scale-100 visible"
                  : "opacity-0 translate-y-4 scale-95 invisible"
              }`}
            >
              {services.map((group) => (
                <div key={group.id}>
                  <h2 className="text-lg font-semibold mb-4 px-3 py-1 inline-block rounded bg-orange-500 text-white">
                    {group.type}
                  </h2>

                  <div className="grid grid-cols-3 gap-3 text-sm mb-6">
                    {group.category.map((item) => (
                      <Link
                        key={item.id}
                        href={`/services1/${group.type}/${item.id}`}
                        className="text-teal-500 hover:text-white hover:bg-teal-500 px-2 py-1 rounded"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/* TRAINING */}
          <li
            className="relative"
            onMouseEnter={() => setOpenTraining(true)}
            onMouseLeave={() => setOpenTraining(false)}
          >
            <span className="text-gray-300 hover:text-white flex items-center gap-1 cursor-pointer">
              Training Programm ▾
            </span>

            <div
              className={`absolute top-10 left-0 bg-white text-[#1a2a6c] shadow-2xl w-[700px] p-6 z-50 rounded-md
              transform transition-all duration-300 ease-out
              ${
                openTraining
                  ? "opacity-100 translate-y-0 scale-100 visible"
                  : "opacity-0 translate-y-4 scale-95 invisible"
              }`}
            >
              {training.map((group) => (
                <div key={group.id}>
                  <h2 className="text-lg font-semibold mb-4 px-3 py-1 inline-block rounded bg-orange-500 text-white">
                    {group.type}
                  </h2>

                  <div className="grid grid-cols-3 gap-3 text-sm mb-6">
                    {group.category.map((item) => (
                      <Link
                        key={item.id}
                        href={`/trainingprogrammes/${group.type}/${item.id}`}
                        className="text-teal-500 hover:text-white hover:bg-teal-500 px-2 py-1 rounded"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>

          <li><Link href="/contact" className={navLink("/contact")}>Contact</Link></li>
          <li><Link href="/carrier" className={navLink("/carrier")}>Carrier</Link></li>
        </ul>

        <div className="w-8"></div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 md:hidden
        ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenu(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#111827] z-[9999] p-6 overflow-y-auto md:hidden
        shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${mobileMenu ? "translate-x-0" : "-translate-x-[100%]"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <img src="/images/logo.jpg" className="w-16" />
          <button onClick={() => setMobileMenu(false)} className="text-white text-xl">✕</button>
        </div>

        <Link href="/" onClick={() => setMobileMenu(false)} className={mobileNavLink("/")}>Home</Link>
        <Link href="/about" onClick={() => setMobileMenu(false)} className={mobileNavLink("/about")}>About</Link>

        {/* SERVICES */}
        <div className="mt-4">
          <button onClick={() => setMobileServices(!mobileServices)} className="w-full text-left text-gray-300">
            Services ▾
          </button>

          <div className={`transition-all duration-300 overflow-hidden ${mobileServices ? "max-h-[500px] mt-2" : "max-h-0"}`}>
            {services.map((group) => (
              <div key={group.id} className="pl-2 mt-2">
                <p className="text-orange-400 text-sm">{group.type}</p>
                {group.category.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services1/${group.type}/${item.id}`}
                    onClick={() => setMobileMenu(false)}
                    className="block text-gray-400 text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* TRAINING */}
        <div className="mt-4">
          <button onClick={() => setMobileTraining(!mobileTraining)} className="w-full text-left text-gray-300">
            Training Programm ▾
          </button>

          <div className={`transition-all duration-300 overflow-hidden ${mobileTraining ? "max-h-[500px] mt-2" : "max-h-0"}`}>
            {training.map((group) => (
              <div key={group.id} className="pl-2 mt-2">
                <p className="text-orange-400 text-sm">{group.type}</p>
                {group.category.map((item) => (
                  <Link
                    key={item.id}
                    href={`/trainingprogrammes/${group.type}/${item.id}`}
                    onClick={() => setMobileMenu(false)}
                    className="block text-gray-400 text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Link href="/contact" onClick={() => setMobileMenu(false)} className={mobileNavLink("/contact")}>Contact</Link>
        <Link href="/carrier" onClick={() => setMobileMenu(false)} className={mobileNavLink("/carrier")}>Carrier</Link>
      </div>
    </>
  );
}