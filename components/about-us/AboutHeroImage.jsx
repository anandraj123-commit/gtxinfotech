
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHeroImage() {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setCount(10);
      return;
    }

    let current = 0;
    const end = 10;
    const duration = 1200;
    const intervalTime = 40;
    const totalSteps = duration / intervalTime;
    const step = end / totalSteps;

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [reduceMotion]);

  const fadeFromLeft = reduceMotion
    ? false
    : { opacity: 0, x: -30 };

  const fadeFromBottom = reduceMotion
    ? false
    : { opacity: 0, y: 20 };

  return (
    <section
      className="
        relative isolate flex w-full
        min-h-[420px] items-center
        overflow-hidden bg-gray-900
        sm:min-h-[480px]
        md:min-h-[540px]
        lg:min-h-[620px]
        xl:min-h-[680px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/About _ Header_Image.png"
        alt="Zisan Tech Solutions team"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60"
      />

      {/* GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/60
          via-black/25
          to-transparent
        "
      />

      {/* TOP RIGHT DECORATIVE DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-0 top-0 z-10
          hidden opacity-60
          sm:block
        "
      >
        <svg
          width="320"
          height="120"
          viewBox="0 0 320 120"
          fill="none"
        >
          <defs>
            <pattern
              id="about-hero-dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="3"
                cy="3"
                r="2"
                fill="#4DB7CC"
              />
            </pattern>
          </defs>

          <path
            d="M100 0H320V120C240 70 180 50 100 0Z"
            fill="url(#about-hero-dots)"
          />
        </svg>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-[1600px]
          items-center
          px-4 py-14
          sm:px-6 sm:py-16
          md:px-8 md:py-20
          lg:px-12 lg:py-24
          xl:px-16
          2xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 max-w-[850px] text-white">

          {/* MAIN HEADING */}
          <h1
            className="
              max-w-[850px]
              text-[30px] font-bold
              leading-[1.18] tracking-tight
              text-white
              min-[400px]:text-[34px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
              xl:text-[64px]
            "
          >
            {/* FIRST HEADING LINE */}
            <motion.span
              initial={fadeFromLeft}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0,
              }}
              className="block"
            >
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.8 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="inline-block text-orange-500"
              >
                {count}+
              </motion.span>{" "}
              Years Excellence in
            </motion.span>

            {/* SECOND HEADING LINE */}
            <motion.span
              initial={fadeFromLeft}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="block text-teal-400"
            >
              SAP Consulting Technology &amp; Learning
            </motion.span>
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={fadeFromBottom}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              mt-5 max-w-[650px]
              text-sm leading-7
              text-gray-200
              sm:mt-6 sm:text-base
              sm:leading-8
              md:text-lg
              lg:text-xl
            "
          >
            Zisan Tech Solutions is committed to
            delivering quality SAP Training and
            innovative IT services that create
            lasting business value.
          </motion.p>

          {/* EXPLORE SERVICES BUTTON */}
          <motion.div
            initial={fadeFromBottom}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-7 sm:mt-8 lg:mt-10"
          >
            <Link
              href="/#services"
              className="
                inline-flex min-h-12
                items-center justify-center
                rounded-lg bg-teal-400
                px-7 py-3
                text-sm font-semibold
                text-white shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-orange-500
                hover:shadow-xl
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-teal-400
                sm:px-8 sm:text-base
              "
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
