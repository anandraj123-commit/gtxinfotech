"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkforceBannerAbout() {
  return (
    <section className="relative w-full min-h-[620px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/Home _ Header Page.png"
        alt="SAP Consulting and Technology Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1920px] items-center px-6 md:px-10 lg:px-16">

        <div className="max-w-[900px] text-white">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1]"
          >
            Driving Business Growth{" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="inline-block text-orange-500"
            >
              Through Technology
            </motion.span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="mt-6 text-[18px] lg:text-[22px] text-white/80 max-w-[800px] leading-relaxed"
          >
            Delivering reliable SAP consulting, implementation, support, and
            custom IT solutions to help businesses succeed.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <Feature
              text="SAP Consulting & Support"
              delay={1.05}
              direction="left"
            />

            <Feature
              text="Application Development"
              delay={1.2}
              direction="right"
            />

            <Feature
              text="System Integration"
              delay={1.35}
              direction="left"
            />

            <Feature
              text="Managed IT Services"
              delay={1.5}
              direction="right"
            />
          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 0.8,
              type: "spring",
              stiffness: 140,
              damping: 12,
            }}
          >
            <Link
              href="/#services"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                mt-12
                rounded-xl
                px-10
                py-3
                text-lg
                font-semibold
                text-white
                bg-orange-500
                shadow-lg
                shadow-orange-500/30
                overflow-hidden
                transition-all
                duration-300
                hover:bg-teal-500
                hover:shadow-teal-500/40
                hover:scale-[1.05]
              "
            >
              <span className="relative z-10">
                Explore Services
              </span>

              <motion.span
                className="relative z-10 text-xl"
                animate={{ x: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>

              {/* SHINE */}
              <span
                className="
                  absolute
                  inset-y-0
                  -left-20
                  w-16
                  bg-white/30
                  skew-x-[-20deg]
                  group-hover:left-[120%]
                  transition-all
                  duration-700
                "
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM LIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[180px]
          bg-orange-500/10
          blur-[100px]
          pointer-events-none
        "
      />

    </section>
  );
}

/* FEATURE */
function Feature({ text, delay, direction }) {
  const x = direction === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-4 group"
    >
      <motion.span
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: delay + 0.15,
          duration: 0.5,
          type: "spring",
          stiffness: 180,
        }}
        className="
          flex
          items-center
          justify-center
          w-8
          h-8
          rounded-full
          bg-orange-500/15
          border
          border-orange-500/40
          text-orange-500
          text-sm
          group-hover:bg-teal-500/20
          group-hover:border-teal-400
          group-hover:text-teal-400
          transition-all
          duration-300
        "
      >
        ✓
      </motion.span>

      <span className="text-[18px] lg:text-[20px] text-white group-hover:text-teal-300 transition-colors duration-300">
        {text}
      </span>
    </motion.div>
  );
}