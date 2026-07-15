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

  const pathname = usePathname();

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  // NAV LINK STYLE
  const navLink = (path) =>
    `cursor-pointer transition-all duration-200 ${
      pathname === path
        ? "font-semibold text-[var(--color-teal-400)]"
        : scrolled
        ? "text-black hover:text-[var(--color-teal-400)]"
        : "text-white hover:text-[var(--color-teal-400)]"
    }`;

  const mobileNavLink = (path) =>
    `block py-2 px-3 rounded transition-all duration-200 ${
      pathname === path
        ? "bg-[var(--color-teal-400)] text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`w-full fixed top-0 z-50 px-6 py-4 flex items-center
          transition-all duration-500 ease-in-out
          ${scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"}
          `}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.jpg"
            alt="logo"
            className={`w-20 h-13 object-contain transition duration-300 
            group-hover:scale-110 group-hover:brightness-125
            `}
          />
        </Link>

        {/* MOBILE BUTTON */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMobileMenu(true)}>
            <span
              className={`text-2xl ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              ☰
            </span>
          </button>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-sm items-center absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link href="/" className={navLink("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLink("/about")}>
              About
            </Link>
          </li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className={navLink("#")}>Services ▾</span>

            <div
              className={`absolute top-10 left-1/2 -translate-x-1/2 w-[900px] p-8 z-50 rounded-xl
              bg-white text-[#1a2a6c] shadow-2xl
              transition-all duration-300
              ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-4"
              }`}
            >
              <div className="grid grid-cols-2 gap-10">
                {/* SAP SERVICES */}
                <div>
                  <h3 className="text-orange-500 font-bold mb-6">
                    SAP SERVICES →
                  </h3>

                  {services[0]?.category.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services1/${services[0].type}/${item.id}`}
                      className="block mb-3 px-4 py-3 rounded-md text-gray-700 bg-white shadow border hover:bg-[var(--color-teal-400)] hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* OTHER SERVICES */}
                <div>
                  <h3 className="text-orange-500 font-bold mb-6">
                    OTHER SERVICES →
                  </h3>

                  {services[1]?.category.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services1/${services[1].type}/${item.id}`}
                      className="block mb-3 px-4 py-3 rounded-md text-gray-700 bg-white shadow border hover:bg-[var(--color-teal-400)] hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>

          {/* TRAINING */}
          <li
            className="relative"
            onMouseEnter={() => setOpenTraining(true)}
            onMouseLeave={() => setOpenTraining(false)}
          >
            <span className={navLink("#")}>Training ▾</span>

            <div
              className={`absolute top-10 left-1/2 -translate-x-1/2 w-[900px] p-8 z-50 rounded-xl
              bg-white text-[#1a2a6c] shadow-2xl
              transition-all duration-300
              ${
                openTraining
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-4"
              }`}
            >
              <div className="grid grid-cols-2 gap-10">
                {training.map((group) => (
                  <div key={group.id}>
                    <h3 className="text-orange-500 font-bold mb-6">
                      {group.type} →
                    </h3>

                    {group.category.map((item) => (
                      <Link
                        key={item.id}
                        href={`/trainingprogrammes/${group.type}/${item.id}`}
                        className="block mb-3 px-4 py-3 rounded-md text-gray-700 bg-white shadow border hover:bg-[var(--color-teal-400)] hover:text-white"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="/contact" className={navLink("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/career" className={navLink("/career")}>
              Career
            </Link>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#111827] z-[9999] p-6 transition-transform
        ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <img src="/images/logo.jpg" className="w-16" />
          <button
            onClick={() => setMobileMenu(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        <Link
          href="/"
          onClick={() => setMobileMenu(false)}
          className={mobileNavLink("/")}
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setMobileMenu(false)}
          className={mobileNavLink("/about")}
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setMobileMenu(false)}
          className={mobileNavLink("/contact")}
        >
          Contact
        </Link>
        <Link
          href="/career"
          onClick={() => setMobileMenu(false)}
          className={mobileNavLink("/career")}
        >
          Career
        </Link>
      </div>
    </>
  );
}