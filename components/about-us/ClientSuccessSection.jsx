
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

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
  const [progressKey, setProgressKey] = useState(0);

  // Respect reduced-motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener(
      "change",
      updatePreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePreference
      );
    };
  }, []);

  // Automatic slideshow
  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [paused, reduceMotion, progressKey]);

  // Manual navigation
  const goTo = useCallback((index) => {
    setCurrent(
      ((index % slides.length) + slides.length) %
        slides.length
    );

    setProgressKey((prev) => prev + 1);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-12
        lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      {/* BACKGROUND DOT PATTERN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(45,212,191,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* HEADING */}
        <div
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h1
            className="
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-[42px]
            "
          >
            Welcome to{" "}
            <span className="text-orange-500">
              Zisan
            </span>{" "}
            <span className="text-teal-400">
              Tech Solutions
            </span>
          </h1>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-20
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-teal-400
              sm:mt-6
            "
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-600
              sm:mt-6
              sm:text-base
              md:text-lg
            "
          >
            Transform Your Business with Tailored SAP Solutions
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            md:gap-14
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full min-w-0 text-black">
            <p
              className="
                text-left
                text-sm
                leading-7
                text-gray-700
                sm:text-base
                sm:leading-8
                md:text-justify
              "
            >
              We focus on crafting scalable and efficient
              systems that drive process improvements,
              increase transparency, and boost growth.
              From strategy formulation to ongoing support,
              our team ensures a smooth digital transformation.
            </p>

            {/* SUBHEADING */}
            <div
              className="
                mt-8
                flex
                items-start
                gap-3
                sm:mt-10
                sm:gap-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  mt-1
                  h-8
                  w-1
                  shrink-0
                  rounded-full
                  bg-teal-400
                  sm:mt-1.5
                "
              />

              <h2
                className="
                  text-xl
                  font-semibold
                  leading-snug
                  text-gray-900
                  sm:text-2xl
                  md:text-3xl
                "
              >
                Our Commitment to Client Success
              </h2>
            </div>

            <p
              className="
                mt-4
                text-left
                text-sm
                leading-7
                text-gray-700
                sm:text-base
                sm:leading-8
                md:text-justify
              "
            >
              At Zisan Tech Solutions, we measure success
              by client outcomes. Every project—whether
              solution design, implementation, or training—is
              focused on real business impact.
            </p>

            <p
              className="
                mt-4
                text-left
                text-sm
                leading-7
                text-gray-700
                sm:text-base
                sm:leading-8
                md:text-justify
              "
            >
              We deeply understand client workflows and build
              tailored SAP &amp; IT solutions that support
              immediate needs and long-term growth.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div
            className="
              flex
              w-full
              min-w-0
              justify-center
              px-3
              pb-10
              sm:px-6
              lg:px-4
            "
          >
            <div
              className="
                relative
                flex
                h-[260px]
                w-full
                max-w-md
                items-center
                justify-center
                min-[400px]:h-[310px]
                sm:h-[380px]
                md:h-[420px]
                lg:h-[400px]
                xl:h-[440px]
              "
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget
                  )
                ) {
                  setPaused(false);
                }
              }}
            >
              {/* GRADIENT GLOW */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-4
                  rounded-[2rem]
                  opacity-40
                  blur-2xl
                  sm:inset-6
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.35), rgba(45,212,191,0.35))",
                }}
              />

              {/* SLIDE CARDS */}
              {slides.map((slide, index) => {
                const isActive = index === current;

                const isNext =
                  index ===
                  (current + 1) % slides.length;

                const isPrev =
                  index ===
                  (current - 1 + slides.length) %
                    slides.length;

                const position = isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0"
                  : isNext
                  ? "z-20 scale-90 translate-x-[8%] opacity-60"
                  : isPrev
                  ? "z-20 scale-90 -translate-x-[8%] opacity-60"
                  : "z-10 scale-75 opacity-0";

                return (
                  <div
                    key={index}
                    aria-hidden={!isActive}
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      transform-gpu
                      transition-all
                      duration-700
                      ease-out
                      ${position}
                    `}
                  >
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        bg-white
                        shadow-2xl
                        ring-1
                        ring-black/5
                        sm:rounded-3xl
                      "
                    >
                      {/* WINDOW HEADER */}
                      <div
                        className="
                          flex
                          shrink-0
                          items-center
                          gap-1.5
                          bg-gray-900
                          px-4
                          py-2.5
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        <span className="h-2 w-2 rounded-full bg-teal-400" />
                        <span className="h-2 w-2 rounded-full bg-gray-600" />
                      </div>

                      {/* IMAGE */}
                      <div className="relative min-h-0 flex-1">
                        <img
                          src={slide.image}
                          alt={slide.caption}
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />

                        {/* OVERLAY */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/70
                            via-black/10
                            to-transparent
                          "
                        />

                        {/* CAPTION */}
                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            p-4
                            sm:p-6
                          "
                        >
                          <p
                            className="
                              text-sm
                              font-semibold
                              leading-snug
                              text-white
                              sm:text-base
                              md:text-lg
                            "
                          >
                            {slide.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* PREVIOUS BUTTON */}
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                aria-label="Previous slide"
                className="
                  absolute
                  left-2
                  top-1/2
                  z-40
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-2xl
                  text-gray-700
                  shadow-md
                  ring-1
                  ring-black/5
                  transition
                  hover:text-orange-500
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  sm:-left-3
                  sm:h-10
                  sm:w-10
                "
              >
                ‹
              </button>

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label="Next slide"
                className="
                  absolute
                  right-2
                  top-1/2
                  z-40
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-2xl
                  text-gray-700
                  shadow-md
                  ring-1
                  ring-black/5
                  transition
                  hover:text-teal-500
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-teal-400
                  sm:-right-3
                  sm:h-10
                  sm:w-10
                "
              >
                ›
              </button>

              {/* PROGRESS INDICATORS */}
              <div
                className="
                  absolute
                  -bottom-10
                  left-1/2
                  z-40
                  flex
                  -translate-x-1/2
                  items-center
                  gap-3
                  whitespace-nowrap
                "
              >
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={
                        current === index
                          ? "true"
                          : undefined
                      }
                      className="
                        relative
                        h-1.5
                        overflow-hidden
                        rounded-full
                        bg-gray-200
                        transition-all
                        duration-300
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-teal-400
                      "
                      style={{
                        width:
                          current === index
                            ? "2.5rem"
                            : "0.6rem",
                      }}
                    >
                      {current === index && (
                        <motion.span
                          key={`${index}-${progressKey}`}
                          className="
                            absolute
                            inset-y-0
                            left-0
                            rounded-full
                            bg-gradient-to-r
                            from-orange-500
                            to-teal-400
                          "
                          initial={{ width: "0%" }}
                          animate={{
                            width:
                              paused || reduceMotion
                                ? "100%"
                                : "100%",
                          }}
                          transition={{
                            duration:
                              paused || reduceMotion
                                ? 0
                                : SLIDE_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* SLIDE NUMBER */}
                <span
                  className="
                    text-xs
                    font-medium
                    tabular-nums
                    text-gray-400
                  "
                >
                  {String(current + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
