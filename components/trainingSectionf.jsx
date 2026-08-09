"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { training } from "../data/training";

export default function TrainingSection() {
  const [allTraining, setAllTraining] = useState([]);

  useEffect(() => {
    const data = training.flatMap((group) =>
      group.category.map((item) => ({
        ...item,
        type: group.type,
      }))
    );

    setAllTraining(data);
  }, []);

  if (!allTraining.length) return null;

  return (
    <section className="relative py-20 bg-[#0f172a] text-white">
      <div className="max-w-full mx-auto px-6 text-center relative z-10">
        
        {/* HEADER */}
        <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
          Training We’re Offering
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-tight">
          We’re Dedicated to Serve <br /> you All Time
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {allTraining.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={`/trainingprogrammes/${encodeURIComponent(
                item.type
              )}/${item.id}`}
            >
              <div
                className="
                  group
                  bg-[#1a2236]
                  rounded-xl
                  p-6
                  flex flex-col items-center justify-center
                  text-center
                  h-[180px]

                  border border-white/5
                  shadow-lg

                  hover:bg-teal-400
                  hover:-translate-y-2
                  transition duration-300
                  cursor-pointer
                "
              >
                {/* ✅ ICON FIXED HERE */}
                <div className="mb-4">
                  {item.icon && (
                   <img
                   src={item.icon}
                   alt={item.title}
                   className="
                     w-10 h-10 object-contain mx-auto
                     filter brightness-0 invert
                     transition duration-300
                     group-hover:scale-110
                   "
                 />
                  )}
                </div>

                {/* TITLE */}
                <p className="text-sm font-semibold leading-snug">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}