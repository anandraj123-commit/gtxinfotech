"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[white] text-black py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP H1 */}
        <h1 className="text-xl md:text-3xl font-semibold text-teal-400 mb-6">
          <span className="text-orange-500">Welcome to </span>Zisan Tech Solutions
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-6xl font-semibold leading-tight mb-6">
              We Create Best <br /> Solution For You
            </h2>

            <p className="text-black leading-relaxed mb-8">
              We specialize in crafting bespoke solutions tailored to your unique
              needs, ensuring that our services not only meet but exceed your
              expectations, bringing the best results for your satisfaction.
            </p>

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
                src="/images/services/handshake.jpg"
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
      </div>
    </section>
  );
}