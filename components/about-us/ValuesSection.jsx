"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Ethical Integrity",
    desc: "We believe in doing the right thing—being honest, transparent, and accountable in every interaction to build lasting trust.",
  },
  {
    title: "Focused on Your Success",
    desc: "Our clients’ and learners’ goals are our priority. We listen closely and tailor solutions that deliver real, measurable outcomes.",
  },
  {
    title: "Innovate and Evolve",
    desc: "We embrace the fast pace of technology by continuously updating our skills and exploring new ideas to keep you ahead.",
  },
  {
    title: "Excellence in Delivery",
    desc: "Quality is non-negotiable. We commit to providing precise, reliable, and impactful SAP solutions and training that exceed expectations.",
  }
];

export default function ValuesSection() {
  const containerRef = useRef(null);

  // MOUSE MAGNETIC EFFECT
  useEffect(() => {
    const container = containerRef.current;

    const handleMove = (e) => {
      const cards = container.querySelectorAll(".mag-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        card.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px) scale(1.03)`;
      });
    };

    const reset = () => {
      const cards = container.querySelectorAll(".mag-card");
      cards.forEach((card) => {
        card.style.transform = "";
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f3f4f6] px-6 lg:px-20 py-24 overflow-hidden"
    >
      {/* PARTICLE BACKGROUND */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-30 animate-[orbit_20s_linear_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base ">
            Our values are the compass guiding our work and relationships. They fuel our passion and commitment to your success.
          </p>
        </div>

        {/* ONE ROW */}
        <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap">

          {values.map((item, i) => (
            <div
              key={i}
              className="mag-card relative min-w-[260px] max-w-[280px] bg-white rounded-2xl p-6 shadow-md transition duration-500"
              style={{
                animation: `float ${6 + i}s ease-in-out infinite`,
              }}
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-full border-2 border-teal-400 flex items-center justify-center mb-5">
                <div className="w-6 h-6 bg-orange-400 rounded-sm"></div>
              </div>

              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* STRIPES */}
   

      {/* KEYFRAMES */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -30px);
          }
          50% {
            transform: translate(-20px, -60px);
          }
          75% {
            transform: translate(-40px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>

    </section>
  );
}