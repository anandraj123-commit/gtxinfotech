"use client";

import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-gray-100 px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight border-l-4 border-orange-500 pl-4">
            Our Mission , Our Vision
          </h1>

          <div className="space-y-6 mt-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We are dedicated to empowering organizations and professionals by providing dependable SAP consulting, hands-on SAP training, and cutting-edge IT solutions that enhance efficiency, scalability, and sustainable digital growth.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Drive Real-World Solutions</h4>
              <p className="mt-1 text-gray-600 leading-relaxed">
                We prioritize solving authentic business problems with SAP and IT strategies that deliver measurable impact.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Prepare Industry-Ready Experts</h4>
              <p className="mt-1 text-gray-600 leading-relaxed">
                Our programs are designed to equip learners with practical skills aligned with current enterprise demands.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Cultivate Enduring Trust</h4>
              <p className="mt-1 text-gray-600 leading-relaxed">
                We aim to establish strong, long-lasting partnerships built on honesty, clarity, and dependable service.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Our goal is to become a trusted global leader in technology solutions, recognized for excellence in SAP consulting, career-focused training, and enterprise IT innovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Empowering Growth Through Technology</h4>
              <p className="mt-1 text-gray-600 leading-relaxed">
                We envision a future where businesses harness SAP and advanced technologies to unlock continuous growth and innovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Bridging Global Practices with Local Needs</h4>
              <p className="mt-1 text-gray-600 leading-relaxed">
                Combining worldwide best practices with an understanding of local markets, we deliver impactful solutions that resonate across sectors.
              </p>
            </div>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Collaborate with Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-lg">

              <Image
                src="/images/contact-image.jpg"
                alt="vision"
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-800/90"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed">
                  "In The Garden Of Achievement, Diligent Effort Blossoms Dreams Into Reality."
                </p>
              </div>
            </div>

            {/* Decorative lines */}
            <div className="absolute -bottom-6 left-10 flex gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-6 h-[2px] bg-blue-900 rotate-45"
                ></span>
              ))}
            </div>

            {/* Dot pattern */}
            <div className="absolute -top-6 right-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-blue-900 rounded-full"
                ></span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}