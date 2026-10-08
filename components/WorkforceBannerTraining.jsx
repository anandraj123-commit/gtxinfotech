
"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  "SAP SD, MM, FICO, CPI & More",
  "Live Instructor-Led Sessions",
  "Real Project Scenarios",
  "Placement Assistance",
];

export default function WorkforceBannerTraining() {
  return (
    <section
      className="
        relative isolate flex w-full
        min-h-[480px] items-center
        overflow-hidden bg-gray-900
        sm:min-h-[520px]
        md:min-h-[580px]
        lg:min-h-[650px]
        xl:min-h-[700px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/Training _ Header-Image.png"
        alt="SAP professional training"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/65"
      />

      {/* GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/65
          via-black/30
          to-transparent
        "
      />

      {/* DECORATIVE DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-0 top-0 z-10
          hidden opacity-70
          sm:block
        "
      >
        <svg
          width="320"
          height="120"
          viewBox="0 0 320 120"
          fill="none"
        >
          <defs>
            <pattern
              id="training-dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="3"
                cy="3"
                r="2"
                fill="#4DB7CC"
              />
            </pattern>
          </defs>

          <path
            d="M100 0H320V120C240 70 180 50 100 0Z"
            fill="url(#training-dots)"
          />
        </svg>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-[1600px]
          items-center
          px-4 py-12
          sm:px-6 sm:py-14
          md:px-8 md:py-16
          lg:px-12 lg:py-20
          xl:px-16
          2xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 max-w-[850px] text-white">

          {/* HEADING */}
          <h1
            className="
              max-w-[850px]
              text-[30px] font-bold
              leading-[1.18] tracking-tight
              text-white
              min-[400px]:text-[34px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
              xl:text-[64px]
            "
          >
            Build Your SAP Career{" "}
            <span className="text-teal-400">
              with Expert-Led Training
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5 max-w-[750px]
              text-sm leading-7
              text-gray-200
              sm:mt-6 sm:text-base
              sm:leading-8
              md:text-lg
              lg:text-xl
            "
          >
            Gain practical skills through hands-on SAP
            training designed for students, professionals,
            and enterprises.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-7 grid grid-cols-1
              gap-x-8 gap-y-4
              min-[400px]:grid-cols-2
              sm:mt-8 sm:gap-x-10
              sm:gap-y-5
              lg:mt-10 lg:gap-x-12
            "
          >
            {features.map((feature, index) => (
              <Feature key={index} text={feature} />
            ))}
          </div>

          {/* VIEW COURSES BUTTON */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <Link
              href="/#training-programs"
              className="
                inline-flex min-h-12
                items-center justify-center
                rounded-lg bg-teal-400
                px-7 py-3
                text-sm font-semibold
                text-white shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-orange-500
                hover:shadow-xl
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-teal-400
                sm:px-8 sm:text-base
              "
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ text }) {
  return (
    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
      {/* CHECK ICON */}
      <span
        aria-hidden="true"
        className="
          mt-0.5 shrink-0
          text-lg font-bold
          leading-6 text-orange-500
          sm:text-xl
        "
      >
        ✔
      </span>

      {/* FEATURE TEXT */}
      <span
        className="
          min-w-0 text-sm
          font-medium leading-6
          text-white
          sm:text-base sm:leading-7
          lg:text-lg
        "
      >
        {text}
      </span>
    </div>
  );
}
