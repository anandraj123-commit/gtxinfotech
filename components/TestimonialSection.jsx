"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rose Hopkins",
    role: "Founder of Apple",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Ruben Houston",
    role: "CEO of Google",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Monica Frazier",
    role: "COO of Facebook",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Ruben Houston",
    role: "CEO of Google",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Monica Frazier",
    role: "COO of Facebook",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Ruben Houston",
    role: "CEO of Google",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
  {
    name: "Monica Frazier",
    role: "COO of Facebook",
    image: "/images/client1.jpg",
    text: "Superb IT Services to understand customer behaviour...",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = testimonials.length;

    if (index === active) return "center";
    if (index === (active - 1 + total) % total) return "left";
    if (index === (active + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="py-20 bg-slate-800 text-center overflow-hidden">
      
      {/* Heading */}
      <p className="text-sm text-teal-300 font-semibold mb-2">
        CLIENT SAY
      </p>

      <h2 className="text-4xl font-bold mb-4 text-white">
        Reviews Of Experts
      </h2>

      <div className="w-16 h-1 bg-teal-400 mx-auto mb-12 rounded"></div>

      {/* Slider */}
      <div className="relative h-[400px] flex items-center justify-center">

        {testimonials.map((item, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out w-[280px] md:w-[340px] p-8 rounded-xl bg-teal-500
                
                ${
                  position === "center"
                    ? "z-20 scale-110 opacity-100 translate-x-0 shadow-2xl"
                    : ""
                }

                ${
                  position === "left"
                    ? "z-10 scale-90 opacity-50 -translate-x-[120%]"
                    : ""
                }

                ${
                  position === "right"
                    ? "z-10 scale-90 opacity-50 translate-x-[120%]"
                    : ""
                }

                ${
                  position === "hidden"
                    ? "opacity-0 scale-75 translate-x-[200%]"
                    : ""
                }
              `}
            >
              {/* Avatar */}
              <div className="flex justify-center -mt-16 mb-4">
                <div
                  className={`w-20 h-20 rounded-full overflow-hidden border-4 border-white transition-all duration-700
                  ${
                    position === "center"
                      ? "scale-110 shadow-lg"
                      : "scale-90 opacity-70"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <p
                className={`italic mb-4 transition-all duration-700
                ${
                  position === "center"
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                "{item.text}"
              </p>

              <p className="text-sm text-white/70 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p>

              {/* Name */}
              <h3
                className={`font-semibold text-lg transition-all duration-500
                ${
                  position === "center"
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {item.name}
              </h3>

              <p className="text-white/70 text-sm">
                {item.role}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}