
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="
        relative isolate flex w-full
        min-h-[420px] items-center
        overflow-hidden bg-gray-900
        sm:min-h-[480px]
        md:min-h-[540px]
        lg:min-h-[620px]
        xl:min-h-[680px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/Contact _ Header_Image.png"
        alt="Zisan Tech Solutions team"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60"
      />

      {/* GRADIENT OVERLAY FOR READABILITY */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/60
          via-black/25
          to-transparent
        "
      />

      {/* MAIN CONTENT CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-[1600px]
          items-center
          px-4 py-14
          sm:px-6 sm:py-16
          md:px-8 md:py-20
          lg:px-12 lg:py-24
          xl:px-16
          2xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 max-w-[800px] text-white">
          {/* SMALL LABEL */}
          <div
            className="
              mb-5 inline-flex w-fit
              items-center rounded-full
              border border-white/30
              bg-white/10
              px-4 py-2
              text-xs font-semibold
              tracking-wide text-teal-300
              backdrop-blur-sm
              sm:mb-6 sm:text-sm
            "
          >
            Get in Touch
          </div>

          {/* MAIN HEADING */}
          <h1
            className="
              max-w-[780px]
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
            Let&apos;s Build What&apos;s Next{" "}
            <span className="block text-teal-400">
              Connect for SAP, IT &amp; Digital Solutions
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5 max-w-xl
              text-sm leading-7
              text-gray-200
              sm:mt-6 sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            Experience a rise in your pursuits with our expert
            consulting. We excel in tailoring success strategies
            to your unique goals, covering diverse fields for
            maximum impact, professionally and delightfully.
          </p>

          {/* CONTACT BUTTON */}
          <div className="mt-7 flex flex-wrap gap-4 sm:mt-8">
            <Link
              href="#contact-form"
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
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
