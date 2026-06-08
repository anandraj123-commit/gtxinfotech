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
    <section className="w-full min-h-screen bg-[#0f1c4d] flex items-center justify-center px-6 lg:px-20 py-16">

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="text-white">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
  Welcome to{" "}
  <span
    className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent"
  >
    Zisan Tech Solutions
  </span>
</h1>

          <p className="mt-6 text-white/70 leading-relaxed max-w-xl">
            Transform Your Business with Tailored SAP Solutions:
          </p>

          <p className="mt-5 text-white/60 leading-relaxed max-w-xl">
            We focus on crafting scalable and efficient systems that drive
            process improvements, increase transparency, and boost growth.
            From strategy formulation to ongoing support, our team ensures a
            smooth digital transformation.
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-white">
            Our Commitment to Client Success
          </h2>

          <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
            At Zisan Tech Solutions, we measure success by client outcomes. Every
            project—whether solution design, implementation, or training—is
            focused on real business impact.
          </p>

          <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
            We deeply understand client workflows and build tailored SAP &
            IT solutions that support immediate needs and long-term growth.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="flex justify-center">

          <div className="relative w-full max-w-md">

            {/* Glow Frame */}
            <div className="absolute -inset-3 rounded-2xl bg-orange-500/20 blur-xl"></div>

            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl group">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={slides[current].image}
                  alt="slide"
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* CAPTION */}
              <div className="bg-[#0f1c4d] text-white px-5 py-4 text-center">
                <p className="text-sm md:text-base font-medium tracking-wide">
                  {slides[current].caption}
                </p>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        current === index
                          ? "bg-orange-500 scale-125"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              Live Updates
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}