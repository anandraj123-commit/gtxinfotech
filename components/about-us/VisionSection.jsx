
"use client";

import { useEffect, useState } from "react";

export default function VisionSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-[#f8fafc]
        to-[#eef2ff]
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
      {/* DECORATIVE BLUR ELEMENTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-10
          -z-10
          h-40
          w-40
          rounded-full
          blur-3xl
          sm:left-10
          sm:h-56
          sm:w-56
          lg:h-72
          lg:w-72
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-10
          right-0
          -z-10
          h-40
          w-40
          rounded-full
          bg-indigo-300/30
          blur-3xl
          sm:right-10
          sm:h-56
          sm:w-56
          lg:h-72
          lg:w-72
        "
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <div
          className="
            mx-auto
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h1
            className={`
              text-3xl
              font-bold
              leading-tight
              transition-all
              duration-700
              sm:text-4xl
              lg:text-[42px]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            <span className="text-orange-500">
              Our Vision &amp;{" "}
            </span>
            <span className="text-teal-400">
              Mission
            </span>
          </h1>

          {/* UNDERLINE */}
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
              sm:mt-5
            "
          />

          <p
            className={`
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-600
              transition-all
              delay-200
              duration-700
              sm:mt-6
              sm:text-base
              sm:leading-8
              md:text-lg
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            Driving innovation, empowering businesses,
            and shaping the future through intelligent
            SAP solutions.
          </p>
        </div>

        {/* VISION AND MISSION GRID */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-6
            sm:gap-8
            md:grid-cols-2
            md:gap-8
            lg:gap-10
          "
        >
          {/* MISSION CARD */}
          <div
            className={`
              group
              relative
              min-w-0
              rounded-3xl
              bg-gradient-to-r
              from-orange-500
              to-pink-500
              p-[1px]
              transition-all
              duration-700
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
            `}
          >
            <div
              className="
                h-full
                rounded-3xl
                bg-white/70
                p-5
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-500
                sm:p-6
                md:p-7
                lg:p-8
                group-hover:shadow-2xl
              "
            >
              <h2
                className="
                  mb-5
                  text-xl
                  font-bold
                  leading-snug
                  text-gray-800
                  sm:mb-6
                  sm:text-2xl
                "
              >
                🚀 Mission
              </h2>

              <ul
                className="
                  space-y-4
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-base
                  sm:leading-8
                "
              >
                <li>
                  We empower organizations with dependable
                  SAP consulting, training, and IT solutions.
                </li>

                <li>
                  ✔ Drive real-world business problem solving
                </li>

                <li>
                  ✔ Build industry-ready professionals
                </li>

                <li>
                  ✔ Deliver scalable and efficient systems
                </li>

                <li>
                  ✔ Foster long-term partnerships
                </li>
              </ul>
            </div>
          </div>

          {/* VISION CARD */}
          <div
            className={`
              group
              relative
              min-w-0
              rounded-3xl
              bg-gradient-to-r
              from-blue-500
              to-indigo-500
              p-[1px]
              transition-all
              delay-200
              duration-700
              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }
            `}
          >
            <div
              className="
                h-full
                rounded-3xl
                bg-white/70
                p-5
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-500
                sm:p-6
                md:p-7
                lg:p-8
                group-hover:shadow-2xl
              "
            >
              <h2
                className="
                  mb-5
                  text-xl
                  font-bold
                  leading-snug
                  text-gray-800
                  sm:mb-6
                  sm:text-2xl
                "
              >
                🌍 Vision
              </h2>

              <ul
                className="
                  space-y-4
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-base
                  sm:leading-8
                "
              >
                <li>
                  To become a trusted global leader
                  in technology solutions.
                </li>

                <li>
                  ✔ Empowering growth through innovation
                </li>

                <li>
                  ✔ Bridging global practices with local needs
                </li>

                <li>
                  ✔ Creating future-ready enterprises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
