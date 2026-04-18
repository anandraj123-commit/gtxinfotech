"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/about-slider1.jpg",
    caption: "Marketing consultation with Armaz",
  },
  {
    image: "/images/about-slider2.jpg",
    caption: "Business strategy session",
  },
  {
    image: "/images/about-slider3.jpg",
    caption: "Growth planning discussion",
  },
];

export default function ClientSuccessSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0f1c4d] flex items-center justify-center px-6 lg:px-20 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Our Commitment <br />to Client Success
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
          At GTX InfoTech, we measure our achievements by the success stories of the clients we serve. Each project we undertake—whether it’s designing a new solution, implementing a system, or delivering training—is focused on generating tangible value and impactful results.
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
          We invest time in understanding the distinct challenges, objectives, and workflows of every client. This personalized approach allows us to develop customized SAP solutions and IT services including SAP Training that address immediate needs while laying a foundation for sustainable growth and scalability in the future.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg">
            Collaborate with Us
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative flex justify-center">

          {/* BORDER FRAME */}
          <div className="absolute top-6 left-6 w-full h-full border-2 border-orange-500 rounded-2xl z-100"></div>

          {/* SLIDER CARD */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
            <img
              src={slides[current].image}
              alt="slide"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 600px"
              className="w-full h-[350px] object-cover"
            />

            {/* CAPTION */}
            <div className="bg-[#0f1c4d] text-white text-center py-4">
              <p className="italic text-sm md:text-base">
                {slides[current].caption}
              </p>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-3">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${current === index ? "bg-orange-500" : "bg-gray-400"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
