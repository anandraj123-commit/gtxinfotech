"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TimelineSection() {
  const sectionRef = useRef(null);

  // COUNTER STATE
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // TIME DISTORTION EFFECT
  useEffect(() => {
    const el = sectionRef.current;

    let t = 0;
    const animate = () => {
      t += 0.01;
      el.style.transform = `translateY(${Math.sin(t) * 3}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // COUNTER ANIMATION
  useEffect(() => {
    const targets = [500, 100, 50, 10];
    const duration = 2000;
    const steps = 80;
    const incrementTime = duration / steps;

    let current = [0, 0, 0, 0];

    const interval = setInterval(() => {
      current = current.map((val, i) => {
        const increment = targets[i] / steps;
        return val + increment >= targets[i] ? targets[i] : val + increment;
      });

      setCounts([...current]);

      if (current.every((val, i) => val >= targets[i])) {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { num: 500, label: "Students Trained", suffix: "+" },
    { num: 100, label: "Enterprise Clients", suffix: "+" },
    { num: 50, label: "Projects Delivered", suffix: "+" },
    { num: 10, label: "Years of Experience", suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0f1c4d] text-white px-6 py-20 relative overflow-hidden"
    >
      {/* SCAN LINE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[2px] bg-orange-400 opacity-20 animate-scan"></div>
      </div>

      {/* DOT PATTERN */}
      <div className="absolute top-6 right-10 grid grid-cols-10 gap-2 opacity-80">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-dot"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></span>
        ))}
      </div>

      <div className=" max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Achievements
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            Our milestones at Zisan Tech Solutions showcase our unwavering commitment to excellence, client-focused results, and continual advancement.
          </p>

          <br />

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 stat-card"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <h2 className="text-3xl font-bold text-blue-400">
                  {Math.floor(counts[i])}
                  {item.suffix}
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="relative rounded-2xl overflow-hidden max-w-md w-full shadow-2xl z-10 animate-imagePhase">
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

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }

        @keyframes dot {
          0%,100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-dot {
          animation: dot 2s ease-in-out infinite;
        }

        @keyframes pulseWave {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .stat-card {
          animation: pulseWave 3s ease-in-out infinite;
        }

        @keyframes imagePhase {
          0%,100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-imagePhase {
          animation: imagePhase 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}