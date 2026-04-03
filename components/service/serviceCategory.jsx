"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCategory() {
  return (
    <section className="bg-[#0f1f4b] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* STRIPES */}
          <div className="absolute left-[-20px] top-10 flex flex-col gap-3 z-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-12 h-[2px] bg-orange-500 rotate-[-25deg]"
              ></span>
            ))}
          </div>

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden z-0">
            <Image
              src="/images/services/handshake.jpg" // replace
              alt="quality"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* OFFSET BORDER */}
          <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-6 translate-y-6 z-10 pointer-events-none"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          {/* Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quality Assurance
            </h2>

            {/* Check Icon */}
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
              ✓
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Unlock excellence with our Quality Assurance consulting firm. We
            specialize in meticulously ensuring and elevating the quality of
            your products or services. Our dedicated team employs advanced
            methodologies according to your needs. Partner with us for
            comprehensive quality assurance solutions that fortify your brand,
            build customer trust, and drive sustained success. What you will get:
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-10">
            {[
              "Quality improvement",
              "Enhanced customer trust",
              "Competitive edge",
              "Recovery cost reduction",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-4 h-4 border-2 border-orange-500 rounded-full"></span>
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-semibold transition">
            Collaborate with Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}