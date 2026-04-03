"use client";

import {services} from "../data/services";

export default function ServicesSection() {
  // 🔹 Merge all categories
  const allServices = services.flatMap((group) =>
    group.category.map((item) => ({
      ...item,
      type: group.type,
    }))
  );

  return (
    <section className="w-full bg-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service) => (
            <div
              key={`${service.type}-${service.id}`}
              className="relative h-64 p-6 flex flex-col justify-end overflow-hidden group border border-slate-700 hover:border-teal-400 transition"
              
              // 🔥 Background Image from array
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 mb-3"
                />

                {/* Title */}
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                 {/* Description */}
                 <p className="text-sm text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description || "High-quality solutions tailored to your business needs."}
                </p>

                {/* Type */}
                <span className="text-xs text-teal-400 block mt-2">
                  {service.type}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-gray-300 opacity-60 group-hover:border-teal-400" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}