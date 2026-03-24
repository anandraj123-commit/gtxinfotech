"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Lauren Contreras",
    image: "/images/user1.jpg",
    text: "They have awesome customer service. I wouldn’t recommend going to anyone else.",
  },
  {
    name: "Edward Alexander",
    image: "/images/user2.jpg",
    text: "All of you guys are awesome. Definitely love the way appscrip works.",
  },
  {
    name: "Diana Johnston",
    image: "/images/user3.jpg",
    text: "Amazing experience. Highly professional and very responsive team.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  // 🔄 Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        {/* LEFT SIDE (CURVED USERS) */}
        <div className="relative h-[400px] flex items-center justify-center">
          {testimonials.map((user, index) => {
            const positions = [
              { top: "10%", left: "40%" },
              { top: "40%", left: "10%" },
              { top: "75%", left: "40%" },
            ];

            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`absolute cursor-pointer transition-all duration-500 ${
                  isActive ? "scale-125 z-10" : "opacity-60"
                }`}
                style={positions[index]}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* Curve line */}
          <div className="absolute w-[200px] h-[400px] border-l-2 border-gray-300 rounded-full left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* RIGHT SIDE (TEXT) */}
        <div className="transition-all duration-500">
          <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
            “{testimonials[activeIndex].text}”
          </p>

          <h3 className="text-lg font-semibold text-gray-900">
            {testimonials[activeIndex].name}
          </h3>
        </div>
      </div>
    </section>
  );
}