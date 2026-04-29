"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceType({ service }) {
  if (!service) return null;

  return (
    <section className="bg-[#f3f4f6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {service.type}
            </h2>

            {/* Small Circle Icon */}
            <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-10">
            {service.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-4 h-4 border-2 border-orange-500 rounded-full"></span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-lg font-semibold text-white group">
  
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Collaborate with Us
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

</button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden z-0">
            <Image
              src="/images/services/handshake.jpg"
              alt={service.type}
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