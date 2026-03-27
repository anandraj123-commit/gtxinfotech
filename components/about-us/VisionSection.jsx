"use client";

import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-gray-100 px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Vision For Better Result <br /> For Your Success
          </h1>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Vision We Have
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Our vision is to be the cornerstone of client success by providing
            innovative and sustainable consulting solutions.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            The Path We Took
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Our mission is to guide businesses in realizing their full potential
            through customized strategies and high-quality services. Committed
            to building strong partnerships, we empower growth and create a
            positive impact in every facet of our consulting journey.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
            Collaborate with Us
          </button>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative flex justify-center">

          <div className="relative w-full max-w-md rounded-3xl overflow-hidden">
            {/* IMAGE */}
            <div className="relative w-full h-[450px]">
              <Image
                src="/images/contact-image.jpg"
                alt="vision"
                fill
                className="object-cover"
              />

              {/* ORANGE OVERLAY */}
              <div className="absolute inset-0 bg-orange-600/80"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed text-left">
                  "In The Garden Of Achievement, Diligent Effort Blossoms Dreams Into Reality."
                </p>
              </div>
            </div>

            {/* BOTTOM STRIPES */}
            <div className="absolute bottom-4 left-6 right-6 flex gap-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-6 h-[2px] bg-blue-900 rotate-45"
                ></span>
              ))}
            </div>
          </div>

          {/* DOT PATTERN */}
          <div className="absolute top-6 right-6 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-blue-900 rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
