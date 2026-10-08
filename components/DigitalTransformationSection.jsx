
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export default function DigitalTransformationSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div
          className="
            grid grid-cols-1 items-center
            gap-x-10 gap-y-10
            md:gap-y-12
            lg:grid-cols-2
            lg:items-stretch
            lg:gap-x-12
            xl:gap-x-16
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="
              flex min-w-0 flex-col
              justify-center
            "
          >
            {/* LABEL */}
            <div
              className="
                inline-flex w-fit items-center
                rounded-full border border-teal-200
                bg-white px-3 py-2
                text-xs font-semibold text-teal-500
                shadow-sm
                sm:px-4 sm:text-sm
              "
            >
              Digital Transformation
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-5 max-w-2xl
                text-[28px] font-bold
                leading-[1.2] tracking-tight
                text-gray-900
                min-[400px]:text-[32px]
                sm:mt-6 sm:text-[38px]
                md:text-[42px]
                lg:text-[36px]
                xl:text-[44px]
                2xl:text-[50px]
              "
            >
              Start Your Digital Transformation Journey with{" "}
              <span className="text-teal-400">
                Zisan Tech Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5 max-w-2xl
                text-sm leading-7 text-gray-600
                sm:mt-6 sm:text-base
                sm:leading-8
                xl:text-lg
              "
            >
              Unlock the power of SAP Consulting, Artificial
              Intelligence, Cloud Solutions, and Digital
              Innovation. We help businesses streamline
              operations, boost productivity, and build
              scalable, future-ready systems.
            </p>

            {/* CONTACT CARDS */}
            <div
              className="
                mt-7 grid grid-cols-1
                gap-4
                sm:mt-9 sm:grid-cols-2
                lg:grid-cols-1
                xl:grid-cols-2
              "
            >
              {/* PHONE */}
              <a
                href="tel:+918797818499"
                className="
                  group flex min-w-0
                  items-center gap-3
                  rounded-2xl border
                  border-gray-200 bg-white
                  p-4 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:gap-4
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl bg-teal-400
                    text-white
                    transition-colors duration-300
                    group-hover:bg-orange-500
                    sm:h-12 sm:w-12
                  "
                >
                  <Phone size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Phone Number
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                    +91 8797818499
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:Info@zisantech.com"
                className="
                  group flex min-w-0
                  items-center gap-3
                  rounded-2xl border
                  border-gray-200 bg-white
                  p-4 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl bg-teal-400
                    text-white
                    transition-colors duration-300
                    group-hover:bg-orange-500
                    sm:h-12 sm:w-12
                  "
                >
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Email Address
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-gray-900 sm:text-base">
                    Info@zisantech.com
                  </p>
                </div>
              </a>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-7 flex flex-col gap-3
                min-[380px]:flex-row
                min-[380px]:flex-wrap
                sm:mt-8 sm:gap-4
              "
            >
              <a
                href="tel:+918797818499"
                className="
                  group inline-flex min-h-12
                  items-center justify-center
                  gap-2 rounded-full
                  bg-teal-400 px-6 py-3
                  text-sm font-semibold
                  text-white shadow-lg
                  transition-all duration-300
                  hover:bg-orange-500
                  hover:shadow-xl
                  sm:px-7 sm:text-base
                "
              >
                Call Now
                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              <a
                href="mailto:Info@zisantech.com"
                className="
                  inline-flex min-h-12
                  items-center justify-center
                  rounded-full border-2
                  border-teal-400 px-6 py-3
                  text-sm font-semibold
                  text-teal-500
                  transition-all duration-300
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-white
                  sm:px-7 sm:text-base
                "
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="
              relative min-w-0
              lg:flex lg:h-full
            "
          >
            <div className="relative w-full lg:h-full">
              {/* IMAGE FRAME */}
              <div
                className="
                  relative w-full
                  overflow-hidden
                  rounded-2xl border
                  border-gray-200 bg-white
                  p-2 shadow-xl
                  sm:rounded-[28px] sm:p-3
                  lg:h-full lg:min-h-[460px]
                  lg:rounded-[34px] lg:p-4
                "
              >
                <div
                  className="
                    relative aspect-[4/3]
                    w-full overflow-hidden
                    rounded-xl bg-gray-50
                    sm:aspect-[5/4]
                    sm:rounded-[22px]
                    lg:aspect-auto
                    lg:h-full lg:min-h-[428px]
                    lg:rounded-[28px]
                  "
                >
                  <Image
                    src="/images/Start Your Digital Transformation Journey with Zisan Tech Solutions-images.png"
                    alt="Digital Transformation"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* FLOATING LEFT CARD */}
              <div
                className="
                  absolute bottom-4 left-4
                  hidden rounded-2xl
                  border border-gray-200
                  bg-white p-4 shadow-xl
                  sm:block
                  md:p-5
                  lg:-left-3 lg:bottom-8
                  xl:-left-5
                "
              >
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                  Smart Business Solutions
                </p>

                <p className="mt-1 text-base font-bold text-gray-900 sm:text-xl">
                  SAP + AI + Cloud
                </p>

                <div className="mt-3 h-1.5 w-20 rounded-full bg-teal-400" />
              </div>

              {/* FLOATING RIGHT BADGE */}
              <div
                className="
                  absolute right-4 top-4
                  hidden rounded-2xl
                  bg-orange-500
                  px-4 py-3
                  text-white shadow-xl
                  sm:block
                  md:px-5 md:py-4
                  lg:-right-3 lg:top-8
                  xl:-right-4
                "
              >
                <p className="text-xs font-medium sm:text-sm">
                  Future Ready
                </p>

                <p className="text-base font-bold sm:text-lg">
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
