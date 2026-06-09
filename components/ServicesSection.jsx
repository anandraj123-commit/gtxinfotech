"use client";

import Link from "next/link";
import { services } from "../data/services";

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
                  group relative rounded-xl p-6 h-44 flex flex-col justify-between
                  bg-gradient-to-r ${service.gradient}
                  shadow-md transition-all duration-300
                  hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl
                  cursor-pointer overflow-hidden
                `}
              >
                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-[#0f1c4d] opacity-0 group-hover:opacity-90 transition duration-300"></div>

                {/* LEFT BORDER */}
                <div className={`absolute left-0 top-6 h-12 w-1 ${service.borderColor}`} />

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-black group-hover:text-white mb-1 transition">
                    {service.title}
                  </h3>
                  <span className="text-xs text-gray-700 group-hover:text-gray-300 transition">
                    {service.type}
                  </span>
                </div>

                <p className="relative z-10 text-sm text-gray-700 group-hover:text-gray-300 line-clamp-3 mt-2 transition">
                  {service.description ||
                    "High-quality solutions tailored to your business needs."}
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}