"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WorkforceBannerTraining() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 500;
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
    <section className="relative min-h-[620px] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/Training _ Header-Image.png"
        alt="SAP Training"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Right Dots */}
      <div className="absolute right-0 top-0 z-10 opacity-90">
        <svg
          width="320"
          height="120"
          viewBox="0 0 320 120"
          fill="none"
        >
          <defs>
            <pattern
              id="training-dots"
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
            fill="url(#training-dots)"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[620px] max-w-[1920px] items-center px-16 py-16">

        {/* LEFT CONTENT */}
        <div className="max-w-[750px] text-white">

          {/* HEADING */}
          <h1
            className="max-w-[900px] text-[44px] font-bold leading-[1.1] lg:text-[72px]"
            style={{ fontSize: "55px" }}
          >
            Build Your SAP Career{" "}
            <span
              style={{
                color: "var(--color-teal-400)",
              }}
            >
              with Expert-Led Training
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[800px] text-[18px] text-white/80 lg:text-[22px]">
            Gain practical skills through hands-on SAP training designed for
            students, professionals, and enterprises.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6">
            <Feature text="SAP SD,MM,FICO,CPI,CCM & More" />
            <Feature text="Live Instructor-Led Sessions" />
            <Feature text="Real Project Scenarios" />
            <Feature text="Placement Assistance" />
          </div>

          {/* BUTTON */}
          {/* BUTTON */}
<Link href="/#training-programs">
  <button
    type="button"
    className="mt-12 rounded-xl bg-teal-400 px-10 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.05] hover:bg-orange-500"
  >
    View Courses
  </button>
</Link>
        </div>

        {/* RIGHT SIDE */}
       
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-[24px]"
        style={{
          color: "var(--color-orange-500)",
        }}
      >
        ✔
      </span>

      <span className="text-[18px] text-white lg:text-[20px]">
        {text}
      </span>
    </div>
  );
}