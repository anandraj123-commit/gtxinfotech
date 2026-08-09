"use client";

import Link from "next/link";
import { services } from "../data/services";

export default function ServicesSection() {
  const allServices = services.flatMap((group) =>
    group.category.map((item) => ({
      ...item,
      type: group.type,
    }))
  );

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-full mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {allServices.map((service) => (
            <Link
              key={`${service.type}-${service.id}`}
              href={`/services1/${service.type}/${service.id}`}
            >
              <div
                className="
                  group flex flex-col items-center justify-center
                  p-6 rounded-xl
                  bg-white/10 backdrop-blur-lg border border-white/20
                  hover:scale-105 hover:shadow-xl
                  transition duration-300 cursor-pointer
                "
              >
                {/* ICON */}
                <div className="mb-4 p-4 rounded-lg bg-white/10 border border-white/20 group-hover:bg-teal-400/20 transition">
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="filter invert brightness-0"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-medium text-center group-hover:text-teal-300 transition">
                  {service.title}
                </h3>

                {/* TYPE (optional small text) */}
                <span className="text-xs text-gray-400 mt-1 text-center">
                  {service.type}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}