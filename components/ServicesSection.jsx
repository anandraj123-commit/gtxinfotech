"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "../data/services";

export default function ServicesSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const allServices = services.flatMap((group) =>
    group.category.map((item) => ({
      ...item,
      type: group.type,
    }))
  );

  return (
    <section
      id="services"
      className="
        w-full
        scroll-mt-24
        bg-gray-50
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
        xl:px-12
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          <h2
            className="
              text-3xl
              font-semibold
              leading-tight
              text-gray-900
              md:text-4xl
            "
          >
            Our <span className="text-teal-400">Services</span>
          </h2>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-16
              rounded
              bg-teal-400
            "
          />
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            sm:gap-6

            lg:grid-cols-3
            lg:gap-7

            xl:grid-cols-4
            xl:gap-8
          "
        >
          {allServices.slice(0, visibleCount).map((service) => {
            const isOrange = service.id % 2 === 0;

            return (
              <Link
                key={`${service.type}-${service.id}`}
                href={`/services1/${service.type}/${service.id}`}
                className="
                  group
                  block
                  h-full
                  rounded-xl
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-teal-400
                  focus-visible:ring-offset-2
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-full
                    min-h-[300px]
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200/70
                    bg-white
                    shadow-md
                    transition-all
                    duration-300

                    sm:min-h-[310px]

                    md:min-h-[320px]

                    hover:-translate-y-2
                    hover:shadow-2xl

                    lg:group-hover:scale-[1.02]
                  "
                >
                  {/* =============================================
                      IMAGE
                  ============================================== */}
                  <div
                    className="
                      relative
                      h-[170px]
                      w-full
                      shrink-0
                      overflow-hidden

                      sm:h-[175px]

                      lg:h-[180px]

                      xl:h-40
                    "
                  >
                    <img
                      src={service.image || "/default-service.jpg"}
                      alt={service.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:brightness-75
                      "
                    />
                  </div>

                  {/* =============================================
                      HOVER OVERLAY
                  ============================================== */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      z-[1]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-90

                      ${
                        isOrange
                          ? "bg-gradient-to-t from-orange-500/80 via-orange-500/40 to-transparent"
                          : "bg-gradient-to-t from-teal-400/80 via-teal-400/40 to-transparent"
                      }
                    `}
                  />

                  {/* =============================================
                      LEFT BORDER
                  ============================================== */}
                  <div
                    className={`
                      absolute
                      left-0
                      top-[190px]
                      z-[2]
                      h-12
                      w-1
                      rounded-r-full

                      sm:top-[195px]

                      lg:top-[200px]

                      xl:top-44

                      ${
                        isOrange
                          ? "bg-orange-500"
                          : "bg-teal-400"
                      }
                    `}
                  />

                  {/* =============================================
                      CONTENT
                  ============================================== */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-1
                      flex-col
                      p-4

                      sm:p-5
                    "
                  >
                    {/* TITLE */}
                    <h3
                      className="
                        mb-1
                        text-base
                        font-semibold
                        leading-snug
                        text-gray-900
                        transition-colors
                        duration-300

                        sm:text-lg

                        group-hover:text-white
                      "
                    >
                      {service.title}
                    </h3>

                    {/* TYPE */}
                    <span
                      className="
                        text-xs
                        font-medium
                        text-gray-600
                        transition-colors
                        duration-300
                        group-hover:text-white/90
                      "
                    >
                      {service.type}
                    </span>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-2
                        line-clamp-5
                        text-sm
                        leading-6
                        text-gray-700
                        transition-colors
                        duration-300
                        group-hover:text-white/90
                      "
                    >
                      {service.description ||
                        "We deliver innovative, scalable, and user-focused digital solutions designed to enhance performance, improve engagement, and accelerate business growth."}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            LOAD MORE
        ====================================================== */}
        {visibleCount < allServices.length && (
          <div
            className="
              mt-10
              flex
              justify-center

              sm:mt-12
            "
          >
            <button
              type="button"
              onClick={() => setVisibleCount(allServices.length)}
              className="
                w-full
                rounded-lg
                bg-orange-500
                px-7
                py-3
                text-sm
                font-medium
                text-white
                shadow-md
                transition-all
                duration-300

                sm:w-auto
                sm:text-base

                hover:-translate-y-0.5
                hover:bg-orange-600
                hover:shadow-lg
              "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}