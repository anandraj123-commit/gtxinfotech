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
    <section className="w-full bg-slate-800 text-white py-20" id="services">
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
            <Link
              key={`${service.type}-${service.id}`}
              href={`/services1/${service.type}/${service.id}`}
              className="block group"
            >
              <div
                className="
                  relative h-64 p-6 flex flex-col justify-between
                  border border-slate-700 rounded-xl 
                  bg-slate-900 overflow-hidden
                  transition-all duration-500 ease-out
                  transform group-hover:scale-105 group-hover:-translate-y-3
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
              >
                {/* 🔥 Gradient Sweep */}
                <div className="
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-transform duration-700 ease-in-out
                " />

                {/* 🔥 Background Fill */}
                <div className="
                  absolute inset-0 bg-orange-500 
                  scale-y-0 origin-bottom 
                  group-hover:scale-y-100 
                  transition-transform duration-500 ease-in-out
                  z-0
                " />

                {/* 🔥 Glow Effect */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-orange-400 blur-2xl 
                  transition duration-500
                " />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Title */}
                  <h3 className="
                    text-xl font-semibold mb-3 
                    transform transition-all duration-500
                    group-hover:-translate-y-1 group-hover:text-white
                  ">
                    {service.title}
                  </h3>

                  {/* Animated underline */}
                  <div className="w-0 h-[2px] bg-white mb-3 transition-all duration-500 group-hover:w-12"></div>

                  {/* Description */}
                  <p className="
                    text-sm text-gray-300 line-clamp-4 
                    transform transition-all duration-500 delay-75
                    group-hover:text-white group-hover:translate-y-[-2px]
                  ">
                    {service.description || "High-quality solutions tailored to your business needs."}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 flex justify-between items-center">
                    <span className="
                      text-xs text-teal-400 
                      transition-all duration-300 
                      group-hover:text-white
                    ">
                      {service.type}
                    </span>

                    {/* 🔥 Arrow Animation */}
                    <span className="
                      text-lg transform transition-all duration-500
                      group-hover:translate-x-2 group-hover:scale-125
                    ">
                      →
                    </span>
                  </div>
                </div>

                {/* 🔥 Corner Accent */}
                <div className="
                  absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 
                  border-gray-400 opacity-60 
                  transition-all duration-500 
                  group-hover:border-white group-hover:scale-125 group-hover:rotate-6
                " />

                {/* 🔥 Ripple Effect on Click */}
                <span className="
                  absolute inset-0 rounded-xl 
                  bg-white/10 opacity-0 
                  group-active:opacity-100 
                  group-active:scale-95 
                  transition duration-150
                " />

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}