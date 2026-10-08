"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        w-full
        min-h-[520px]
        items-center
        overflow-hidden
        h-[85svh]
        sm:min-h-[580px]
        md:h-[90vh]
        md:min-h-[600px]
        lg:min-h-[650px]
      "
    >
      {/* HERO IMAGE */}
      <img
        src="/images/Home _ Header Page.png"
        alt="SAP Consulting in India"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full">
        <div
          className="
            mx-auto
            w-full
            max-w-[1920px]
            px-4
            sm:px-6
            md:px-10
            lg:px-16
            xl:px-20
          "
        >
          <div
            className="
              w-full
              max-w-[600px]
              sm:max-w-[650px]
              md:max-w-[700px]
              lg:max-w-[750px]
            "
          >
            {/* SMALL TITLE */}
            <motion.p
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="
                mb-3
                text-base
                font-semibold
                text-teal-500
                sm:mb-4
                sm:text-lg
                md:text-xl
              "
            >
              SAP Consulting in India
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="
                mb-4
                text-[32px]
                font-bold
                leading-[1.15]
                text-white
                sm:mb-5
                sm:text-[40px]
                md:mb-6
                md:text-5xl
                lg:text-6xl
              "
            >
              Transforming Businesses
              
              <br />

              Through{" "}
              <span className="text-teal-500">
                SAP
              </span>{" "}
              &{" "}
              <span className="text-orange-500">
                Technology
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
              className="
                mb-6
                max-w-xl
                text-sm
                leading-6
                text-gray-200
                sm:mb-7
                sm:text-base
                sm:leading-7
                md:mb-8
                md:text-lg
                lg:text-xl
                lg:leading-relaxed
              "
            >
              Expert SAP consulting and IT services designed to simplify
              operations, drive innovation, and accelerate business growth.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.6,
              }}
            >
              <Link
                href="#services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-teal-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-teal-500/30
                  transition-all
                  duration-300
                  sm:px-6
                  sm:py-3.5
                  sm:text-base
                  md:px-7
                  hover:-translate-y-1
                  hover:bg-orange-500
                  hover:shadow-orange-500/30
                "
              >
                Our Services

                <span className="text-lg">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-black/40
          to-transparent
          sm:h-20
          md:h-24
        "
      />
    </section>
  );
}