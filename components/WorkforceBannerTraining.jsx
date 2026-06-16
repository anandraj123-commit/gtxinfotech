"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function WorkforceBannerTraining() {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10; // change to 25 if needed
    const duration = 500; // 2 sec
    const incrementTime = 50;

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
    <section className="relative overflow-hidden bg-[#03175A] min-h-[620px] w-full">

      {/* Top Right Dots */}
      <div className="absolute right-0 top-0 opacity-90">
        <svg width="320" height="120" viewBox="0 0 320 120" fill="none">
          <defs>
            <pattern
              id="dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="#4DB7CC" />
            </pattern>
          </defs>

          <path
            d="M100 0H320V120C240 70 180 50 100 0Z"
            fill="url(#dots)"
          />
        </svg>
      </div>

      <div className="mx-auto flex min-h-[620px] max-w-[1920px] items-center justify-between px-10 lg:px-24">

        {/* LEFT CONTENT */}
        <div className="max-w-[950px] text-white">

          {/* Heading */}
          <h1 className="text-[44px] lg:text-[72px] font-bold leading-[1.1] max-w-[900px]" style={{ fontSize: "55px" }}>
         Build Your SAP Career{" "}
  <span className="animated-text">
   with Expert-Led Training
  </span>
</h1>

          {/* Description */}
          <p className="mt-6 text-[18px] lg:text-[22px] text-white/80 max-w-[800px]">
          Gain practical skills through hands-on SAP training designed for students, professionals, and enterprises.
          </p>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6">
            <Feature text="SAP SD,MM,FICO,CPI,CCM & More" />
            <Feature text="Live Instructor-Led Sessions" />
            <Feature text="Real Project Scenarios" />
            <Feature text="Placement Assistance" />
          </div>

          {/* Button */}
          <Link href="/#training-programs">
  <button
    className="mt-12 rounded-xl px-10 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.05]"
    style={{ backgroundColor: "var(--color-orange-500)" }}
  >
    View Courses
  </button>
</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex flex-col items-center justify-center">

          {/* 25 TEXT LOGO */}
          <div
            className="text-[260px] font-extrabold leading-none select-none"
            style={{
              color: "var(--color-orange-500)",
              textShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            {count}+
          </div>

          {/* YEARS */}
          <div className="text-white text-5xl font-bold tracking-[12px] -mt-8">
            YEARS
          </div>

        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        .animated-text {
          animation: colorChange 5s infinite;
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

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-[24px]"
        style={{ color: "var(--color-orange-500)" }}
      >
        ✔
      </span>

      <span className="text-[18px] lg:text-[20px] text-white">
        {text}
      </span>
    </div>
  );
}