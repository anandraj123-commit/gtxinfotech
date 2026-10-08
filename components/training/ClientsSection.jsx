
"use client";

import Image from "next/image";

const logos = [
  "/images/logo.jpg",
  "/images/logo1.jpg",
  "/images/logo2.jpg",
  "/images/logo.jpg",
  "/images/logo1.jpg",
  "/images/logo2.jpg",
];

export default function ClientsSection() {
  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-gray-100
        px-4 py-12
        sm:px-6 sm:py-14
        md:px-8 md:py-16
        lg:px-12 lg:py-20
        xl:px-16
        2xl:px-20
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">

        {/* TOP CONTENT */}
        <div
          className="
            grid grid-cols-1 items-center
            gap-x-10 gap-y-8
            sm:gap-y-10
            lg:grid-cols-2 lg:gap-x-12
            xl:gap-x-16
          "
        >
          {/* LEFT TEXT */}
          <div className="min-w-0">
            <h2
              className="
                text-3xl font-bold
                leading-tight tracking-tight
                text-gray-900
                sm:text-4xl
                md:text-[42px]
                lg:text-[44px]
                xl:text-5xl
              "
            >
              Studer{" "}
              <span className="text-teal-400">
                Testimonial
              </span>
            </h2>

            {/* ACCENT LINE */}
            <div
              className="
                mt-5 h-1 w-20 rounded-full
                bg-gradient-to-r
                from-orange-500 to-teal-400
              "
            />

            <p
              className="
                mt-5 max-w-xl
                text-sm leading-7
                text-gray-600
                sm:mt-6 sm:text-base
                sm:leading-8
                xl:text-lg
              "
            >
              Spotlighting clients&apos; triumphs,
              achieved through collaboration with
              our consulting firm. Witness success
              through exceptional partnerships.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="min-w-0">
            <div
              className="
                relative aspect-[4/3]
                w-full overflow-hidden
                rounded-2xl
                border-2 border-orange-400
                bg-white
                sm:aspect-[5/3]
                sm:rounded-3xl
                lg:aspect-[4/3]
                xl:aspect-[5/3]
              "
            >
              <Image
                src="/images/services/clientsSection.jpg"
                alt="Clients and student testimonials"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="
                  object-cover object-center
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* LOGO MARQUEE */}
        <div
          className="
            relative mt-10 w-full
            overflow-hidden
            sm:mt-12
            md:mt-14
            lg:mt-16
          "
        >
          {/* LEFT FADE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-y-0 left-0 z-10
              w-8
              bg-gradient-to-r
              from-gray-100 to-transparent
              sm:w-16
            "
          />

          {/* RIGHT FADE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-y-0 right-0 z-10
              w-8
              bg-gradient-to-l
              from-gray-100 to-transparent
              sm:w-16
            "
          />

          {/* ANIMATED TRACK */}
          <div
            className="
              clients-marquee-track
              flex w-max items-center
              motion-reduce:!animate-none
            "
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="
                  flex shrink-0 items-center
                  gap-6 pr-6
                  sm:gap-10 sm:pr-10
                  lg:gap-14 lg:pr-14
                "
              >
                {logos.map((logo, index) => (
                  <div
                    key={`${copy}-${index}`}
                    className="
                      relative h-12 w-24
                      shrink-0
                      sm:h-14 sm:w-32
                      lg:h-16 lg:w-36
                    "
                  >
                    <Image
                      src={logo}
                      alt={
                        copy === 0
                          ? `Partner logo ${index + 1}`
                          : ""
                      }
                      fill
                      sizes="(max-width: 640px) 96px, 144px"
                      className="
                        object-contain
                        opacity-60
                        transition-opacity duration-300
                        hover:opacity-100
                      "
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DECORATIVE DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          flex h-8 w-full
          flex-wrap items-center
          justify-center gap-3
          overflow-hidden px-4
          opacity-40
        "
      >
        {Array.from({ length: 120 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1.5 w-1.5 shrink-0
              rounded-full bg-orange-500
            "
          />
        ))}
      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        .clients-marquee-track {
          animation: clientsMarquee 25s linear infinite;
        }

        .clients-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes clientsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
