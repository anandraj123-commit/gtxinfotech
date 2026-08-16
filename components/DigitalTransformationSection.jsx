"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function DigitalTransformationSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Start Your Digital Transformation Journey with{" "}
              <span className="text-orange-500">
                Zisan Tech Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Unlock the power of SAP Consulting, Artificial Intelligence,
              Cloud Solutions, and Digital Innovation. We help businesses
              streamline operations, boost productivity, and build scalable,
              future-ready systems.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="bg-orange-500 text-white p-3 rounded-xl">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-900">
                  +91 8797818499
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="bg-orange-500 text-white p-3 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-900">
                  Info@zisantech.com
                </p>
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="tel:+8797818499"
              className="bg-orange-500 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="mailto:Info@zisantech.com"
              className="border-2 border-orange-500 text-orange-500 px-7 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Send Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-md h-[420px]">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-teal-400/20 blur-3xl rounded-full"></div>

            <Image
              src="/images/Start Your Digital Transformation Journey with Zisan Tech Solutions-images.png"
              alt="Digital Transformation"
              fill
              className="object-contain relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}