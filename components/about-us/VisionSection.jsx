"use client";

import { useEffect, useState } from "react";

export default function VisionSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-24 px-6 lg:px-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1
          className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-orange-500">Our Vision & </span><span className="text-teal-400">Mission</span> 
        </h1>

        <p
          className={`mt-6 text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Driving innovation, empowering businesses, and shaping the future through intelligent SAP solutions.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* MISSION CARD */}
        <div
          className={`group relative p-[1px] rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 h-full shadow-xl group-hover:shadow-2xl transition duration-500">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              🚀 Mission
            </h2>

            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>
                We empower organizations with dependable SAP consulting, training, and IT solutions.
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
          className={`group relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 h-full shadow-xl group-hover:shadow-2xl transition duration-500">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              🌍 Vision
            </h2>

            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>
                To become a trusted global leader in technology solutions.
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

      {/* DECORATIVE BLUR ELEMENTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>

    </section>
  );
}