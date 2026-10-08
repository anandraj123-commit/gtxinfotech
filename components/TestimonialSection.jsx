"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "IT Manager",
    text: "Zisan Tech Solutions delivered exceptional SAP consulting services.",
  },
  {
    name: "Amit Singh",
    role: "Operations Head",
    text: "Reliable IT partner with scalable enterprise solutions.",
  },
  {
    name: "Anjali Verma",
    role: "SAP Consultant",
    text: "Training program exceeded expectations with practical sessions.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    text: "HRMS solution simplified employee management and payroll.",
  },
  {
    name: "Vikram Patel",
    role: "Business Analyst",
    text: "Improved reporting and analytics significantly.",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Lead",
    text: "Digital marketing boosted our online presence.",
  },
];

// Duplicate for seamless loop
const loopData = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gray-50
        py-12
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      {/* =========================================
          HEADING
      ========================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        <p
          className="
            mb-2
            text-center
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-teal-600
            sm:text-sm
          "
        >
          CLIENT SAY
        </p>

        <h2
          className="
            text-center
            text-3xl
            font-bold
            leading-tight
            text-gray-900
            sm:text-3xl
            md:text-4xl
          "
        >
          Reviews Of Experts
        </h2>

        <div
          className="
            mx-auto
            mb-8
            mt-4
            h-1
            w-16
            rounded-full
            bg-teal-500
            sm:mb-10
            md:mb-12
          "
        />
      </div>

      {/* =========================================
          TESTIMONIAL SCROLLER
      ========================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-20
            hidden
            w-12
            bg-gradient-to-r
            from-gray-50
            via-gray-50/70
            to-transparent
            sm:block
            md:w-20
            lg:w-28
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-20
            hidden
            w-12
            bg-gradient-to-l
            from-gray-50
            via-gray-50/70
            to-transparent
            sm:block
            md:w-20
            lg:w-28
          "
        />

        {/* =====================================
            MOVING TRACK
        ====================================== */}
        <motion.div
          className="
            flex
            w-max
            gap-4
            px-4
            sm:gap-5
            sm:px-6
            md:gap-6
            md:px-8
          "
          animate={
            isHovered
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={
            isHovered
              ? {}
              : {
                  x: {
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }
          }
        >
          {loopData.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                flex
                min-h-[200px]
                w-[270px]
                shrink-0
                flex-col
                justify-between
                rounded-xl
                bg-teal-500
                p-5
                text-white
                shadow-md
                transition-shadow
                duration-300

                min-[400px]:w-[290px]

                sm:min-h-[210px]
                sm:w-[310px]
                sm:p-6

                md:w-[330px]

                lg:min-h-[220px]
                lg:w-[350px]

                xl:w-[370px]

                hover:shadow-2xl
              "
            >
              {/* =================================
                  REVIEW
              ================================== */}
              <div>
                {/* QUOTE SYMBOL */}
                <span
                  className="
                    mb-1
                    block
                    text-4xl
                    font-bold
                    leading-none
                    text-white/30
                    sm:text-5xl
                  "
                >
                  &ldquo;
                </span>

                {/* REVIEW TEXT */}
                <p
                  className="
                    text-sm
                    italic
                    leading-6
                    text-white/95
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {item.text}
                </p>
              </div>

              {/* =================================
                  CLIENT INFORMATION
              ================================== */}
              <div
                className="
                  mt-5
                  border-t
                  border-white/20
                  pt-4
                "
              >
                <h3
                  className="
                    text-base
                    font-semibold
                    text-white
                    sm:text-lg
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-white/80
                    sm:text-sm
                  "
                >
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}