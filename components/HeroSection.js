"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">

      {/* HERO IMAGE */}
      <img
        src="/images/Home _ Header Page.png"
        alt="SAP Consulting in India"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-full mx-auto px-6 md:px-10 lg:px-16">

          <div className="max-w-2xl">

            {/* SMALL TITLE - FROM LEFT */}
            <p className="text-teal-500 font-semibold text-lg md:text-xl mb-4 animate-[slideFromLeft_0.9s_ease-out_0.2s_forwards] opacity-0">
              SAP Consulting in India
            </p>

            {/* MAIN HEADING - FROM BOTTOM */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-[slideFromBottom_1s_ease-out_0.6s_forwards] opacity-0">
              Transforming Businesses
              <br />
              Through{" "}
              <span className="text-teal-500">
                SAP
              </span>{" "}
              &{" "}
              <span className="text-orange-500">
                Technology
              </span>
            </h1>

            {/* DESCRIPTION - FROM RIGHT */}
            <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 animate-[slideFromRight_1s_ease-out_1.1s_forwards] opacity-0">
              Expert SAP consulting and IT services designed to simplify
              operations, drive innovation, and accelerate business growth.
            </p>

            {/* BUTTON - FROM BOTTOM */}
            <div className="animate-[slideFromBottom_1s_ease-out_1.6s_forwards] opacity-0">
              <Link
                href="#services"
                className="
                  inline-flex items-center gap-2
                  px-7 py-3.5
                  rounded-full
                  bg-teal-500
                  text-white
                  font-semibold
                  shadow-lg shadow-teal-500/30
                  hover:bg-orange-500
                  hover:shadow-orange-500/30
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                Our Services
                <span className="text-lg">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromBottom {
          from {
            opacity: 0;
            transform: translateY(60px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}