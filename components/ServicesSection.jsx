"use client";

import { Monitor, Globe, Layout, Megaphone, Smartphone, Palette } from "lucide-react";

export default function ServicesSection() {
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
          {services.map((service, i) => (
            <div
              key={i}
              className="relative p-10 border border-slate-700 bg-slate-800 group hover:border-teal-400 transition"
            >
              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-gray-300 opacity-60 group-hover:border-teal-400" />

              <div className="mb-6 text-gray-400 group-hover:text-teal-400 transition">
                {service.icon}
              </div>

              <h3 className="text-xl mb-4 text-gray-200">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sed id lorem eget orci dictum facilisis vel id tellus.
                Nullam iaculis arcu at mauris dapibus consectetur.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconClass = "w-10 h-10";

const services = [
  {
    title: "WordPress Theme",
    icon: <Globe className={iconClass} />,
  },
  {
    title: "Responsive Design",
    icon: <Layout className={iconClass} />,
  },
  {
    title: "Media & Advertisement",
    icon: <Monitor className={iconClass} />,
  },
  {
    title: "App Development",
    icon: <Smartphone className={iconClass} />,
  },
  {
    title: "Creative Design",
    icon: <Palette className={iconClass} />,
  },
  {
    title: "Marketing",
    icon: <Megaphone className={iconClass} />,
  },
];