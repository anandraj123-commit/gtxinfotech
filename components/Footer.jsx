"use client";

import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full py-20 px-6 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer-image.png')",
      }}
    >
      {/* Background world map */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/world-map.png')] bg-center bg-no-repeat bg-cover"></div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COLUMN 1 — ABOUT */}
        <div className="border border-white/10 p-8 rounded-md bg-white/5 backdrop-blur-md">

          {/* LOGO */}
          <div className="mb-6">
            <Image
              src="/images/logo.jpg"
              alt="Zisan Tech Solutions"
              width={150}
              height={50}
            />
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Zisan Tech Solutions is a leading technology solutions provider
            specializing in SAP consulting, training, and enterprise software
            solutions.
          </p>

          {/* Email Subscription */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-5 py-3 text-black outline-none min-w-0"
            />

            <button
              className="w-12 h-12 flex items-center justify-center
              bg-teal-400 text-white transition hover:bg-teal-500 shrink-0"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </div>
        </div>

        {/* COLUMN 2 — COMPANY LINKS */}
<div className="p-8 md:text-center">
  <h3 className="text-xl font-semibold mb-6">
    Company
  </h3>

  <ul className="space-y-4 text-gray-300">
    <li className="hover:text-teal-400 transition">
      <Link href="/about">About Us</Link>
    </li>

    <li className="hover:text-teal-400 transition">
      <Link href="/#services">Services</Link>
    </li>

    <li className="hover:text-teal-400 transition">
      <Link href="/#training-programs">Training Programs</Link>
    </li>

    <li className="hover:text-teal-400 transition">
      <Link href="/blog">Blogs</Link>
    </li>

    <li className="hover:text-teal-400 transition">
      <Link href="/contact">Contact Us</Link>
    </li>

    <li className="hover:text-teal-400 transition">
      <Link href="/career">Career</Link>
    </li>
  </ul>
</div>

        {/* COLUMN 3 — CONTACT */}
        <div className="p-8 text-left">
         <div className="text-center">
         <h3 className="text-xl font-semibold mb-6">
    Contact Info
  </h3>

  <div className="text-gray-300 space-y-6">

    {/* PHONE */}
    <div>
      <p className="font-semibold text-white mb-1">
        PHONE:
      </p>

      <a
        href="tel:+918797818499"
        className="hover:text-teal-400 transition"
      >
        +91 8797818499
      </a>
    </div>

    {/* EMAIL */}
    <div>
      <p className="font-semibold text-white mb-1">
        EMAIL:
      </p>

      <a
        href="mailto:info@zisantech.com"
        className="hover:text-teal-400 transition"
      >
        info@zisantech.com
      </a>
    </div>

  </div>
         </div>
  

</div>

      </div>

      {/* BOTTOM */}
      <div className="relative border-t border-white/10 text-center mt-12 pt-6 text-gray-400 text-sm">
        © 2026 Zisan Tech Solutions. All rights reserved.
      </div>

    </footer>
  );
}