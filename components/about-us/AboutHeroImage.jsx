"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headingLines = [
  { delay: 0 },
  { text: "SAP Consulting Technology & Learning", highlight: true, delay: 0.2 },
];

export default function AboutHeroImage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 1200;
    const incrementTime = 40;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden">
      <Image
        src="/images/about-hero-section.png"
        alt="Zisan Tech Solutions team"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#03175A]/95 via-[#03175A]/75 to-[#03175A]/20" />

      <div className="absolute right-0 top-0 opacity-60">
        <svg width="320" height="120" viewBox="0 0 320 120" fill="none">
          <defs>
            <pattern
              id="about-hero-dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="#4DB7CC" />
            </pattern>
          </defs>
          <path
            d="M100 0H320V120C240 70 180 50 100 0Z"
            fill="url(#about-hero-dots)"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-[1920px] items-center px-10 py-16 lg:px-24">
        <div className="max-w-[780px] text-white">
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-teal-300"
          >
            About Us
          </motion.p> */}

          <h1 className="text-[40px] font-bold leading-[1.15] sm:text-[48px] lg:text-[58px]">
            {headingLines.map((line, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: line.delay }}
                className="block"
              >
                {index === 0 ? (
                  <>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="inline-block text-orange-500"
                    >
                      {count}+
                    </motion.span>{" "}
                    Years Excellence in
                  </>
                ) : (
                  <span className="animated-text">{line.text}</span>
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-[560px] text-[18px] text-white/85 lg:text-[20px]"
          >
            Zisan Tech Solutions is committed to delivering quality SAP Training
            and innovative IT services that create lasting business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/#services">
              <button className="mt-10 rounded-xl bg-orange-500 px-10 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.05] hover:bg-orange-600">
                Explore Services
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .animated-text {
          animation: colorChange 4s infinite;
        }

        @keyframes colorChange {
          0% {
            color: var(--color-orange-500);
          }
          50% {
            color: var(--color-teal-400);
          }
          100% {
            color: var(--color-orange-500);
          }
        }
      `}</style>
    </section>
  );
}
