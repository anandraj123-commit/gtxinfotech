"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export default function DigitalTransformationSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* EQUAL HEIGHT COLUMNS */}
        <div className="grid items-stretch gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-500 shadow-sm">
              Digital Transformation
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-gray-900">
              Start Your Digital Transformation Journey with{" "}
              <span className="text-teal-400">
                Zisan Tech Solutions
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600">
              Unlock the power of SAP Consulting, Artificial Intelligence,
              Cloud Solutions, and Digital Innovation. We help businesses
              streamline operations, boost productivity, and build scalable,
              future-ready systems.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {/* PHONE */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400 text-white transition duration-300 group-hover:bg-orange-500">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone Number
                    </p>

                    <p className="font-semibold text-gray-900">
                      +91 8797818499
                    </p>
                  </div>

                </div>
              </div>

              {/* EMAIL */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400 text-white transition duration-300 group-hover:bg-orange-500">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email Address
                    </p>

                    <p className="font-semibold text-gray-900">
                      Info@zisantech.com
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="tel:+918797818499"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-500 hover:shadow-xl"
              >
                Call Now

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="mailto:Info@zisantech.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-teal-400 px-7 py-3 font-semibold text-teal-500 transition duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Send Email
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex h-full"
          >
            <div className="relative h-full w-full">

              {/* MAIN IMAGE CARD */}
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-[34px] border border-gray-200 bg-white p-4 shadow-2xl">

                <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
                  <Image
                    src="/images/Start Your Digital Transformation Journey with Zisan Tech Solutions-images.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>

              {/* FLOATING LEFT CARD */}
              <div className="absolute -left-8 bottom-10 hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl md:block">

                <p className="text-sm font-medium text-gray-500">
                  Smart Business Solutions
                </p>

                <p className="mt-1 text-xl font-bold text-gray-900">
                  SAP + AI + Cloud
                </p>

                <div className="mt-3 h-1.5 w-20 rounded-full bg-teal-400" />

              </div>

              {/* FLOATING RIGHT BADGE */}
              <div className="absolute -right-5 top-10 hidden rounded-2xl bg-orange-500 px-5 py-4 text-white shadow-xl md:block">

                <p className="text-sm font-medium">
                  Future Ready
                </p>

                <p className="text-lg font-bold">
                  Digital Growth
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}