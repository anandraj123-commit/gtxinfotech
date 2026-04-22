"use client";

import Link from "next/link";
import { training } from "../data/training";

export default function TrainingSection() {
  const allTraining = training.flatMap((group) =>
    group.category.map((item) => ({
      ...item,
      type: group.type,
    }))
  );

  return (
    <section className="w-full bg-[#0f172a] text-white py-20" id="training-programs">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Training Programs</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allTraining.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={`/trainingprogrammes/${encodeURIComponent(item.type)}/${item.id}`}
              className="group"
            >
              <div
                className="
                  relative h-64 p-6 rounded-2xl overflow-hidden
                  bg-white/5 backdrop-blur-xl
                  border border-white/10

                  transition-all duration-500 ease-out
                  group-hover:-translate-y-2
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                "
              >
                {/* Gradient Border Glow */}
                <div className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-teal-400 via-orange-500 to-teal-400
                  opacity-0 group-hover:opacity-100
                  blur-xl transition duration-500
                " />

                {/* Inner Card */}
                <div className="
                  relative z-10 h-full flex flex-col justify-between
                  bg-[#0f172a]/80 rounded-2xl p-6
                ">

                  {/* Top */}
                  <div>
                    <span className="
                      text-xs px-3 py-1 rounded-full
                      bg-teal-500/20 text-teal-300
                      border border-teal-400/30
                    ">
                      {item.type}
                    </span>

                    <h3 className="
                      text-xl font-semibold mt-4
                      transition-all duration-300
                      group-hover:text-teal-300
                    ">
                      {item.title}
                    </h3>

                    {/* ✅ Description always visible */}
                    <p
  className="
    text-sm text-gray-400 mt-3
    transition-all duration-300
    group-hover:text-gray-200 text-justify
    line-clamp-3 text-white
  "
  dangerouslySetInnerHTML={{
    __html:
      item.description ||
      "Practical training designed to enhance your real-world skills.",
  }}
/>
                  </div>

                  {/* Bottom */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="
                      text-sm text-gray-400
                      group-hover:text-white transition
                    ">
                      Learn More
                    </span>

                    <span className="
                      text-lg transform transition-all duration-500
                      group-hover:translate-x-2 group-hover:scale-110
                    ">
                      →
                    </span>
                  </div>

                </div>

                {/* Background Glow */}
                <div className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-br from-teal-500/10 to-orange-500/10
                  transition duration-500
                " />

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}