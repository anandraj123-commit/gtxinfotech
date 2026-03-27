"use client";

import { useState } from "react";
import Image from "next/image";

const years = [2019, 2020, 2021, 2022, 2023];

export default function TimelineSection() {
  const [active, setActive] = useState(2019);

  return (
    <section className="w-full bg-[#0f1c4d] text-white px-6 lg:px-20 py-20 relative overflow-hidden">

      {/* TOP DOT PATTERN */}
      <div className="absolute top-6 right-10 grid grid-cols-10 gap-2 opacity-80">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Lumina Journey Through Time
          </h1>

          {/* YEARS */}
          <div className="flex gap-4 flex-wrap mb-8">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActive(year)}
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-semibold transition ${
                  active === year
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-orange-500 text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* TEXT */}
          <p className="text-gray-300 leading-relaxed max-w-xl">
            In {active}, Lunaria was founded in Malang. the inception of our
            consulting firm was marked by an innovative spirit and a
            commitment to deliver superior solutions. Throughout this journey,
            we forged a robust foundation emphasizing service quality and
            steadfast partnerships. Through unwavering dedication, we
            successfully cultivated meaningful client relationships and
            achieved sustainable growth. That year proved to be a historic
            milestone in shaping our corporate identity, setting standards for
            excellence, and reaffirming our commitment to client success
            through an innovative consultative approach.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* BORDER FRAME */}
          <div className="absolute top-6 left-6 w-full h-full border-2 border-orange-500 rounded-2xl z-150"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden max-w-md w-full z-10">
            <div className="relative w-full h-[350px]">
              <img
                src="/images/TimelineSection.jpg"
                alt="timeline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
