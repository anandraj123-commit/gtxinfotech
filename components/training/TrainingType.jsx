"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrainingType({ training }) {
  if (!training) return null;

  return (
    <section className="bg-[#f3f4f6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col"
        >
          {/* Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {training.type}
            </h2>

            <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* CONTENT (NO SCROLL LIMIT) */}
          <div className="flex-1 pr-3">
            
            {/* Description */}
            <div
              className="
                text-gray-600 text-lg leading-relaxed mb-6

                [&_*]:text-inherit
                [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3
                [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-3
                [&_li]:mb-2
              "
              dangerouslySetInnerHTML={{
                __html:
                  training.description ||
                  "Explore our professional training programs designed to enhance your skills and career growth.",
              }}
            />

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-6">
              {(training.items || []).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-4 h-4 border-2 border-orange-500 rounded-full"></span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Button */}
          <button className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition mt-6 group">
            <span className="relative z-10 group-hover:text-black transition duration-300">
              Join Us
            </span>

            <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full"
        >
          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden z-0 h-full min-h-[400px]">
            <Image
              src={training.image || "/images/services/handshake.jpg"}
              alt={training.type}
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BORDER */}
          <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl translate-x-6 translate-y-6 z-10 pointer-events-none"></div>

          {/* DOT PATTERN */}
          <div className="absolute top-6 left-6 grid grid-cols-6 gap-2 z-20">
            {Array.from({ length: 18 }).map((_, i) => (
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