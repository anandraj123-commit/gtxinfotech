
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const features = [
  "SAP Certified Trainers",
  "Real-Time Project Exposure",
  "Corporate Training Programs",
  "End-to-End IT Services",
];

export default function WorkforceBannerAbout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const end = 10;
    const incrementTime = 50;

    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(current, end));

      if (current >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative isolate flex w-full
        min-h-[480px] items-center
        overflow-hidden bg-[#03175A]
        sm:min-h-[520px]
        md:min-h-[580px]
        lg:min-h-[620px]
        xl:min-h-[680px]
      "
    >
      {/* DECORATIVE DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-0 top-0
          z-0 hidden opacity-70
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
              id="about-banner-dots"
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
            fill="url(#about-banner-dots)"
          />
        </svg>
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          grid w-full max-w-[1600px]
          grid-cols-1 items-center
          gap-10
          px-4 py-12
          sm:px-6 sm:py-14
          md:px-8 md:py-16
          lg:grid-cols-[minmax(0,1fr)_auto]
          lg:gap-12
          lg:px-12 lg:py-20
          xl:gap-16 xl:px-16
          2xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="min-w-0 text-white">
          {/* HEADING */}
          <h1
            className="
              max-w-[900px]
              text-[30px] font-bold
              leading-[1.18] tracking-tight
              text-white
              min-[400px]:text-[34px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[52px]
              xl:text-[60px]
              2xl:text-[64px]
            "
          >
            10+ Years of Excellence in{" "}
            <span className="animated-text">
              Technology &amp; Learning
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5 max-w-[800px]
              text-sm leading-7
              text-white/80
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
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-7 grid grid-cols-1
              gap-x-8 gap-y-4
              min-[400px]:grid-cols-2
              sm:mt-8 sm:gap-x-10
              sm:gap-y-5
              lg:mt-10 lg:gap-x-12
            "
          >
            {features.map((feature, index) => (
              <Feature
                key={index}
                text={feature}
              />
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <Link
              href="/#services"
              className="
                inline-flex min-h-12
                items-center justify-center
                rounded-lg bg-orange-500
                px-7 py-3
                text-sm font-semibold
                text-white shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-teal-400
                hover:shadow-xl
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-orange-500
                sm:px-8 sm:text-base
              "
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* YEARS COUNTER */}
        <div
          className="
            flex min-w-0
            flex-col items-center
            justify-center
            text-center
            lg:pl-4
          "
        >
          <div
            className="
              select-none font-extrabold
              leading-none tracking-tight
              text-orange-500
              text-[100px]
              min-[400px]:text-[120px]
              sm:text-[150px]
              md:text-[180px]
              lg:text-[170px]
              xl:text-[220px]
              2xl:text-[250px]
            "
            style={{
              textShadow:
                "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            {count}+
          </div>

          <div
            className="
              mt-1 text-2xl
              font-bold tracking-[6px]
              text-white
              sm:text-3xl
              sm:tracking-[8px]
              lg:-mt-2
              lg:text-4xl
              xl:text-5xl
            "
          >
            YEARS
          </div>
        </div>
      </div>

      {/* HEADING COLOR ANIMATION */}
      <style jsx>{`
        .animated-text {
          animation: aboutColorChange 5s infinite;
        }

        @keyframes aboutColorChange {
          0%,
          100% {
            color: #f97316;
          }

          50% {
            color: #2dd4bf;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-text {
            animation: none;
            color: #2dd4bf;
          }
        }
      `}</style>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div
      className="
        flex min-w-0
        items-start gap-3
        sm:gap-4
      "
    >
      {/* CHECK ICON */}
      <span
        aria-hidden="true"
        className="
          mt-0.5 shrink-0
          text-lg font-bold
          leading-6 text-orange-500
          sm:text-xl
        "
      >
        ✔
      </span>

      {/* FEATURE TEXT */}
      <span
        className="
          min-w-0 text-sm
          font-medium leading-6
          text-white
          sm:text-base sm:leading-7
          lg:text-lg
        "
      >
        {text}
      </span>
    </div>
  );
}
