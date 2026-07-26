"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function DigitalTransformationSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className=" mx-auto  flex flex-col md:flex-row gap-12 items-stretch">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-6">
            <h2 className="text-3xl  font-bold text-gray-900 leading-snug">
              Start Your Digital Transformation Journey with{" "}
              <span className="text-orange-500">
                Zisan Tech Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Unlock the power of SAP Consulting, Artificial Intelligence,
              Cloud Solutions, and Digital Innovation. Our experienced
              consultants help businesses streamline operations, improve
              productivity, and build future-ready enterprises through smart,
              scalable technology solutions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
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

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
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

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="tel:+8797818499"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Call Now
            </a>

            <a
              href="mailto:Info@zisantech.com"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
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
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/images/digital_transformation.png"
              alt="Digital Transformation"
              fill
              className="object-contain rounded-3xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}