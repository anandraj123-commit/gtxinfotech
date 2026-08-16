"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/business_strategy.png",
    caption: "Bussiness Strategy Session",
  },
  {
    image: "/images/SAP Consultation.png",
    caption: "SAP Consultation Session",
  },
  {
    image: "/images/Growth Planning.png",
    caption: "Growth Planning Discussion",
  },
];

const SLIDE_DURATION = 3500;

export default function ClientSuccessSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused, reduceMotion]);

  const goTo = useCallback((index) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, []);

  return (
    <section className="relative w-full bg-white px-6 py-24 overflow-hidden">
      {/* Ambient node grid — a quiet nod to systems & data, not literal */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(45,212,191,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
            Welcome to{" "}
            <span className="text-orange-500">Zisan</span>{" "}
            <span className="text-teal-400">Tech Solutions</span>
          </h1>

          <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-teal-400" />

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform Your Business with Tailored SAP Solutions
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-black">
            <p className="leading-relaxed text-justify text-gray-700">
              We focus on crafting scalable and efficient systems that drive
              process improvements, increase transparency, and boost growth.
              From strategy formulation to ongoing support, our team ensures a
              smooth digital transformation.
            </p>

            <div className="mt-10 flex items-start gap-4">
              <span
                className="mt-1.5 h-8 w-1 shrink-0 rounded-full bg-teal-400"
                aria-hidden="true"
              />
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Our Commitment to Client Success
              </h2>
            </div>

            <p className="mt-4 leading-relaxed text-justify text-gray-700">
              At Zisan Tech Solutions, we measure success by client outcomes.
              Every project—whether solution design, implementation, or
              training—is focused on real business impact.
            </p>

            <p className="mt-4 leading-relaxed text-justify text-gray-700">
              We deeply understand client workflows and build tailored SAP &
              IT solutions that support immediate needs and long-term growth.
            </p>
          </div>

          {/* RIGHT STACKED SLIDER */}
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-md h-[440px] flex items-center justify-center"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Soft brand-gradient glow behind the card stack */}
              <div
                className="pointer-events-none absolute inset-6 rounded-[2rem] blur-2xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.35), rgba(45,212,191,0.35))",
                }}
                aria-hidden="true"
              />

              {slides.map((slide, index) => {
                const isActive = index === current;
                const isNext = index === (current + 1) % slides.length;
                const isPrev =
                  index === (current - 1 + slides.length) % slides.length;

                const position = isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0"
                  : isNext
                  ? "z-20 scale-90 translate-x-16 opacity-60"
                  : isPrev
                  ? "z-20 scale-90 -translate-x-16 opacity-60"
                  : "z-10 scale-75 opacity-0";

                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-out ${position}`}
                  >
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white ring-1 ring-black/5">
                      {/* Window chrome — a light dashboard/software cue */}
                      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        <span className="h-2 w-2 rounded-full bg-teal-400" />
                        <span className="h-2 w-2 rounded-full bg-gray-600" />
                      </div>

                      <div className="relative h-[calc(100%-38px)]">
                        <img
                          src={slide.image}
                          alt={slide.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white text-lg font-semibold">
                            {slide.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ARROW CONTROLS */}
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                aria-label="Previous slide"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-40 h-9 w-9 rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center text-gray-700 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label="Next slide"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-40 h-9 w-9 rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center text-gray-700 hover:text-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition"
              >
                ›
              </button>

              {/* PROGRESS DOTS — expanding "story bar" style */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={current === index}
                      className="relative h-1.5 rounded-full bg-gray-200 overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                      style={{ width: current === index ? "2.5rem" : "0.6rem" }}
                    >
                      {current === index && (
                        <span
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-teal-400 rounded-full"
                          style={
                            paused || reduceMotion
                              ? { width: "100%" }
                              : {
                                  animation: `fillbar ${SLIDE_DURATION}ms linear forwards`,
                                }
                          }
                        />
                      )}
                    </button>
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-400 tabular-nums">
                  {String(current + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillbar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}