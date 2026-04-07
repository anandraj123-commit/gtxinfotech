"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#0f1f4b] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
  Empower Your Skills <br /> With Industry-Ready Training
</h1>

<p className="text-gray-300 text-lg leading-relaxed mb-8">
  Our training programs are crafted to accelerate your career by providing 
  hands-on experience, expert guidance, and skills that are in high demand.
</p>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-lg font-semibold">
            Join Us
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Border Frame */}
          <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-4 translate-y-4 z-10"></div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden z-0">
            <Image
              src="/images/services/handshake.jpg" // replace with your image
              alt="Handshake"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Dotted Pattern */}
          <div className="absolute top-6 right-6 grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-orange-500 rounded-full"
              ></span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}