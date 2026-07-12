"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { services } from "../data/services";

export default function ServicesSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const allServices = services.flatMap((group) =>
    group.category.map((item, index) => ({
      ...item,
      type: group.type,
    }))
  );

  return (
    <section className="w-full bg-gray-50 py-20" id="services">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.slice(0, visibleCount).map((service) => (
            <Link
              key={`${service.type}-${service.id}`}
              href={`/services1/${service.type}/${service.id}`}
            >
              <div
                className="
                  group relative rounded-xl overflow-hidden
                  min-h-[320px] flex flex-col
                  backdrop-blur-lg bg-white/10 border border-white/20
                  shadow-lg transition-all duration-300
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl
                  cursor-pointer
                "
              >
                {/* IMAGE */}
                <div className="w-full h-32 overflow-hidden">
                  <img
                    src={`${service.image}` || "/default-service.jpg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300 group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>

                {/* HOVER OVERLAY (TRANSPARENT) */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300
                    ${
                      service.id % 2 === 0
                        ? "bg-gradient-to-t from-orange-500/80 via-orange-500/40 to-transparent"
                        : "bg-gradient-to-t from-teal-400/80 via-teal-400/40 to-transparent"
                    }
                  `}
                ></div>

                {/* LEFT BORDER */}
                <div
                  className={`
                    absolute left-0 top-36 h-12 w-1
                    ${
                      service.id % 2 === 0
                        ? "bg-orange-500"
                        : "bg-teal-400"
                    }
                  `}
                />

                {/* CONTENT */}
                <div className="relative z-10 p-5 flex flex-col flex-1 transition-colors duration-300">
                  
                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-1 transition">
                    {service.title}
                  </h3>

                  {/* TYPE */}
                  <span className="text-xs text-gray-600 group-hover:text-white/90 transition">
                    {service.type}
                  </span>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-700 group-hover:text-white/90 line-clamp-8 mt-2 transition">
                    {service.description ||
                      "We deliver innovative, scalable, and user-focused digital solutions designed to enhance performance, improve engagement, and accelerate business growth across multiple platforms and industries."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < allServices.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(allServices.length)}
              className="
                px-6 py-3 rounded-lg
                bg-orange-500 text-white font-medium
                hover:bg-orange-600 transition duration-300
                shadow-md hover:shadow-lg
              "
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}