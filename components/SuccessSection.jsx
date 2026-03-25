"use client";

import Image from "next/image";
import { FaSearch, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const features = [
  {
    icon: FaSearch,
    title: "Analysis & Research",
    desc: "The consulting firm conducts detailed analysis and research, employing strategic methodologies to deliver client-focused insights and effective solutions.",
  },
  {
    icon: FaCheckCircle,
    title: "Actualization",
    desc: "In the execution phase, the consulting firm adeptly translates strategies into action, ensuring seamless actualization of client objectives and aspirations.",
  },
  {
    icon: FaArrowRight,
    title: "Initiate",
    desc: "The consulting firm kickstarts client initiatives with strategic expertise, ensuring a smooth launch and effective implementation of customized solutions.",
  },
];

export default function SuccessSection() {
  return (
    <section className="bg-gray-100 py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Is For Your Success
            </h2>
            <p className="text-gray-600 max-w-xl">
              Tailored systematic solutions for your goals, ensuring comprehensive support and an effective path to success and objectives.
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow-md">
            Book an Appointment
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            
            {/* Border */}
            <div className="border-2 border-orange-500 rounded-3xl p-2">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/work.jpg" // 👈 add your image
                  alt="Work"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Top diagonal lines */}
            <div className="absolute -top-10 right-0 flex gap-3">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="w-10 h-[2px] bg-slate-800 rotate-45"
                ></span>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex gap-6 items-start">
                  
                  {/* ICON SECTION */}
                  <div className="relative">
                    
                    {/* dotted background */}
                    <div className="absolute -top-2 -left-2 grid grid-cols-5 gap-1 opacity-40">
                      {[...Array(25)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                        ></span>
                      ))}
                    </div>

                    {/* icon circle */}
                    <div className="w-14 h-14 flex items-center justify-center border-2 border-slate-800 rounded-full relative z-10 bg-white">
                      {/* rotate arrow for ↗ effect */}
                      {item.title === "Initiate" ? (
                        <Icon className="text-slate-800 rotate-[-45deg]" />
                      ) : (
                        <Icon className="text-slate-800" />
                      )}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}