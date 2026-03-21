"use client";

export default function CTASection() {
  return (
    <section
      className="w-full py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('images/ctasection.jpg')" }} // put image in /public/cta-bg.jpg
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Great Design & Incredible Features
        </h2>

        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          tenetur odio impedit incidunt? Omnis accusantium ea reiciendis, fugit
          commodi nostrum.
        </p>

        <button className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 text-sm tracking-widest uppercase transition">
          Start A Project With Us
        </button>
      </div>
    </section>
  );
}
