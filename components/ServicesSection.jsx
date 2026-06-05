"use client";

import Link from "next/link";
import { services } from "../data/services";
import { Star, Users } from "lucide-react";

const gradients = [
  "from-yellow-400 to-white",
  "from-indigo-400 to-white",
  "from-pink-400 to-white",
  "from-green-400 to-white",
  "from-blue-400 to-white",
  "from-orange-400 to-white",
];

export default function ServicesSection() {
  const allServices = services.flatMap((group) =>
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
    <section className="w-full bg-[#0f1c4d] py-20" id="services">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <Link
              key={`${service.type}-${service.id}`}
              href={`/services1/${service.type}/${service.id}`}
            >
              <div
                className={`
                  relative rounded-xl p-6 h-56 flex flex-col justify-between
                  bg-gradient-to-r ${service.gradient}
                  shadow-md
                `}
              >
                {/* LEFT BORDER */}
                <div className={`absolute left-0 top-6 h-12 w-1 ${service.borderColor}`} />

                {/* TOP */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {service.title}
                    </h3>
                    <span className="text-xs text-gray-700">
                      {service.type}
                    </span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-700 line-clamp-3 mt-2">
                  {service.description ||
                    "High-quality solutions tailored to your business needs."}
                </p>

                {/* BOTTOM */}
                <div className="flex items-center justify-between text-sm text-gray-800 mt-4">

                  {/* ⭐ RATING */}
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    <span className="font-semibold">
                      {service.rating}
                    </span>
                    <span>({service.reviews})</span>
                  </div>

                  <span>|</span>

                  {/* 👥 LEARNERS */}
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-yellow-500" />
                    <span className="font-semibold">
                      {service.learners}
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