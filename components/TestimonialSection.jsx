"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "IT Manager",
    text: "Zisan Tech Solutions delivered exceptional SAP consulting services.",
  },
  {
    name: "Amit Singh",
    role: "Operations Head",
    text: "Reliable IT partner with scalable enterprise solutions.",
  },
  {
    name: "Anjali Verma",
    role: "SAP Consultant",
    text: "Training program exceeded expectations with practical sessions.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    text: "HRMS solution simplified employee management and payroll.",
  },
  {
    name: "Vikram Patel",
    role: "Business Analyst",
    text: "Improved reporting and analytics significantly.",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Lead",
    text: "Digital marketing boosted our online presence.",
  },
];

// duplicate for seamless loop
const loopData = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      
      {/* Heading */}
      <p className="text-sm text-teal-600 font-semibold text-center mb-2">
        CLIENT SAY
      </p>

      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Reviews Of Experts
      </h2>

      <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded"></div>

      {/* SCROLLER */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-6 w-max ${
            isHovered ? "" : "animate-scroll"
          }`}
        >
          {loopData.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] p-6 rounded-xl bg-teal-500 text-white shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <p className="italic mb-4 text-white/90">
                "{item.text}"
              </p>

              <div className="mt-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-white/80">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}