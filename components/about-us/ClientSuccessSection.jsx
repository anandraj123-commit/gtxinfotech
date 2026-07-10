"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 lg:px-20 py-20">

      <div className="max-w-7xl w-full">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Welcome to{" "}
            <span className="text-orange-500">Zisan</span>{" "}
            <span className="text-teal-400">Tech Solutions</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform Your Business with Tailored SAP Solutions
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-black">

            <p className="leading-relaxed max-w-xl text-justify">
              We focus on crafting scalable and efficient systems that drive
              process improvements, increase transparency, and boost growth.
              From strategy formulation to ongoing support, our team ensures a
              smooth digital transformation.
            </p>

            <h2 className="mt-10 text-2xl md:text-3xl font-semibold">
              Our Commitment to Client Success
            </h2>

            <p className="mt-4 leading-relaxed max-w-xl text-justify">
              At Zisan Tech Solutions, we measure success by client outcomes.
              Every project—whether solution design, implementation, or training—
              is focused on real business impact.
            </p>

            <p className="mt-4 leading-relaxed max-w-xl text-justify">
              We deeply understand client workflows and build tailored SAP & IT
              solutions that support immediate needs and long-term growth.
            </p>

          </div>

          {/* RIGHT STACKED SLIDER */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[420px] flex items-center justify-center">

              {slides.map((slide, index) => {
                const position =
                  index === current
                    ? "z-30 scale-100 opacity-100"
                    : index === (current + 1) % slides.length
                    ? "z-20 scale-90 translate-x-16 opacity-60"
                    : index === (current - 1 + slides.length) % slides.length
                    ? "z-20 scale-90 -translate-x-16 opacity-60"
                    : "z-10 scale-75 opacity-0";

                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out ${position}`}
                  >
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white">

                      <div className="relative h-full">
                        <img
                          src={slide.image}
                          alt="slide"
                          className="w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* CAPTION */}
                        <div className="absolute bottom-0 p-6 text-white">
                          <p className="text-lg font-semibold">
                            {slide.caption}
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}

              {/* DOTS */}
              <div className="absolute -bottom-10 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-6 bg-orange-500"
                        : "w-2.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}