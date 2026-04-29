"use client";

import Image from "next/image";

export default function TimelineSection() {
  return (
    <section className="w-full bg-[#0f1c4d] text-white px-6 lg:px-20 py-20 relative overflow-hidden">

      {/* TOP DOT PATTERN */}
      <div className="absolute top-6 right-10 grid grid-cols-10 gap-2 opacity-80">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Achievements
          </h1>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 hover:scale-105 transition">
              <p className="text-sm text-gray-300 mt-2">Students Trained</p>
              <h2 className="text-3xl font-bold text-blue-400">500+</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 hover:scale-105 transition">
            <p className="text-sm text-gray-300 mt-2">Enterprise Clients</p>
              <h2 className="text-3xl font-bold text-blue-400">100+</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 hover:scale-105 transition">
            <p className="text-sm text-gray-300 mt-2">Projects Delivered</p>
              <h2 className="text-3xl font-bold text-blue-400">50+</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 hover:scale-105 transition">
            <p className="text-sm text-gray-300 mt-2">Years of Experience</p>
              <h2 className="text-3xl font-bold text-blue-400">10+</h2>
            </div>

          </div>

          {/* TEXT */}
          <p className="text-gray-300 leading-relaxed max-w-xl">
            Our milestones at GTX InfoTech showcase our unwavering commitment to excellence, client-focused results, and continual advancement. We are driven by a passion to deliver meaningful SAP and IT solutions.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* BORDER FRAME (BEHIND IMAGE) */}
          <div className="absolute top-5 left-5 w-full h-full border-2 border-orange-500 rounded-2xl z-50"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden max-w-md w-full shadow-2xl z-10">
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/TimelineSection.jpg"
                alt="timeline"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}