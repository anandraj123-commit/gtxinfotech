"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Udit Singh",
    image: "/images/client1.jpg",
    text: "My educational experience with Zisan Tech Solutions was excellent. The training featured real-world examples that are immediately applicable in the industry, and the course material was well-structured. Securing new opportunities was greatly aided by the career assistance and interview preparation.",
  },
  {
    name: "Mahesh",
    image: "/images/client1.jpg",
    text: "Zisan Tech Solutions SAP training surpassed my expectations.The instructor was very informed and always willing to answer questions. Case studies, practical projects, and in-the-moment project conversations made the learning process interesting and productive. To anyone hoping to pursue a career in SAP, I heartily recommend Zisan Tech Solutions.",
  },
  // {
  //   name: "Monica Frazier",
  //   image: "/images/client1.jpg",
  //   text: "Superb IT Services to understand customer behaviour...",
  // },
  // {
  //   name: "Ruben Houston",
  //   image: "/images/client1.jpg",
  //   text: "Superb IT Services to understand customer behaviour...",
  // },
  // {
  //   name: "Monica Frazier",
  //   image: "/images/client1.jpg",
  //   text: "Superb IT Services to understand customer behaviour...",
  // },
  // {
  //   name: "Ruben Houston",
  //   image: "/images/client1.jpg",
  //   text: "Superb IT Services to understand customer behaviour...",
  // },
  {
    name: "Rohini Mhake",
    image: "/images/client1.jpg",
    text: "Zisan Tech Solutions offered top-notch SAP training, emphasizing real-time business scenarios. The instructor gave insightful project experience and clarified difficult ideas. My confidence and SAP abilities improved as a result of the practical practice sessions.",
  },
];

export default function StudentTestimonialSection() {
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
    <section className="py-20 bg-white text-center overflow-hidden">
      
      {/* Heading */}
      <p className="text-sm text-teal-300 font-semibold mb-2">
        Student SAY
      </p>

      <h2 className="text-4xl font-bold mb-4 text-black">
        Reviews Of Students
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

              {/* <p className="text-sm text-white/70 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.
              </p> */}

              {/* Name */}
              <h3
                className={`font-semibold  transition-all duration-500
                ${
                  position === "center"
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {item.name}
              </h3>

              {/* <p className="text-white/70 text-sm">
                {item.role}
              </p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}