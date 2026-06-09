"use client";

import Link from "next/link";
import { training } from "../data/training";
import { Star, Users } from "lucide-react";

const gradients = [
  "from-yellow-400 to-white",
  "from-indigo-400 to-white",
  "from-pink-400 to-white",
  "from-green-400 to-white",
  "from-blue-400 to-white",
  "from-orange-400 to-white",
];

export default function TrainingSection() {
  const allTraining = training.flatMap((group) =>
    group.category.map((item, index) => ({
      ...item,
      type: group.type,

      rating: (4 + Math.random()).toFixed(2),
      reviews: Math.floor(Math.random() * 20000 + 10000),
      learners: Math.floor(Math.random() * 90000 + 20000),

      gradient: gradients[index % gradients.length],
      borderColor:
        index % 2 === 0 ? "bg-yellow-500" : "bg-indigo-500",
    }))
  );

  return (
    <section className="w-full bg-[white] py-20" id="training-programs">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="text-black">Our Training</span>{" "}
              <span className="text-teal-500"> Programs</span>
            </h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTraining.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={`/trainingprogrammes/${encodeURIComponent(item.type)}/${item.id}`}
            >
              <div
                className={`
                  group relative rounded-xl p-6 h-56 flex flex-col justify-between
                  bg-gradient-to-r ${item.gradient}
                  shadow-md transition-all duration-300
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl
                  cursor-pointer overflow-hidden
                `}
              >
                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-[#0f1c4d] opacity-0 group-hover:opacity-90 transition duration-300"></div>

                {/* LEFT BORDER */}
                <div className={`absolute left-0 top-6 h-12 w-1 ${item.borderColor}`} />

                {/* TOP */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-black group-hover:text-white mb-1 transition">
                    {item.title}
                  </h3>

                  <span className="text-xs text-gray-700 group-hover:text-gray-300 transition">
                    {item.type}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="relative z-10 text-sm text-gray-700 group-hover:text-gray-300 line-clamp-3 mt-2 transition"
                  dangerouslySetInnerHTML={{
                    __html: Array.isArray(item.description)
                      ? item.description.map((d) => d.description).join("")
                      : item.description ||
                        "Practical training designed to enhance your real-world skills.",
                  }}
                />

                {/* BOTTOM */}
                <div className="relative z-10 flex items-center justify-between text-sm text-gray-800 group-hover:text-gray-300 mt-4 transition">

                  {/* ⭐ RATING */}
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    <span className="font-semibold">
                      {item.rating}
                    </span>
                    <span>({item.reviews})</span>
                  </div>

                  <span>|</span>

                  {/* 👥 LEARNERS */}
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-yellow-500" />
                    <span className="font-semibold">
                      {item.learners}
                    </span>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}