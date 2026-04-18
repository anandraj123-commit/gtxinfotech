"use client";

import { FaApple, FaGooglePlay, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white relative overflow-hidden">
      
      {/* Background world map */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/world-map.png')] bg-center bg-no-repeat bg-cover"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* LEFT BOX */}
        <div className="border border-white/10 p-8 rounded-md bg-white/5 backdrop-blur-md">
          
          {/* LOGO */}
          <div className="mb-6">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={150}
              height={50}
            />
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Happen active county. Winding for the morning am shyness evident to poor.
            Garrets because elderly new.
          </p>

          {/* Email Input */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-5 py-3 text-black outline-none min-w-0"
            />

            <button className="w-12 h-12 flex items-center justify-center bg-teal-400 text-white transition shrink-0">
              <FaPaperPlane className="text-sm" />
            </button>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/#services">Services</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/#training-programs">Training Programs</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/blog">Blogs</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/carrier">Carrier</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Info</h3>

          <div className="text-gray-300 space-y-4">
            
            {/* Address */}
            {/* <div>
              <p className="font-semibold text-white">ADDRESS:</p>
              <p>5919 Trussville Crossings Pkwy, Birmingham AL 35235</p>
            </div> */}

            {/* Phone */}
            <div>
              <p className="font-semibold text-white">PHONE:</p>
              <a
                href="tel:+916360807351"
                className="hover:text-orange-400 transition"
              >
                +91 6360807351
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold text-white">EMAIL:</p>
              <a
                href="mailto:info@yourcompany.com"
                className="hover:text-orange-400 transition"
              >
                info@yourcompany.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-4 text-gray-400 text-sm">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
}