"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    image: "/images/client1.jpg",
    text: "My educational experience with Zisan Tech Solutions was excellent. The training featured real-world examples that are immediately applicable in the industry.",
  },
  {
    name: "Priya Verma",
    image: "/images/client1.jpg",
    text: "Zisan Tech Solutions SAP training surpassed my expectations. The instructor was knowledgeable and the sessions were highly practical.",
  },
  {
    name: "Rahul Mehta",
    image: "/images/client1.jpg",
    text: "Top-notch SAP training with real-time business scenarios. It significantly improved my confidence and practical skills.",
  },
  {
    name: "Sneha Kapoor",
    image: "/images/client1.jpg",
    text: "The training sessions were interactive and industry-focused. I gained hands-on experience that helped me grow professionally.",
  },
  {
    name: "Vikas Gupta",
    image: "/images/client1.jpg",
    text: "Excellent mentorship and structured learning approach. Highly recommended for anyone looking to build a career in SAP.",
  },
  {
    name: "Neha Jain",
    image: "/images/client1.jpg",
    text: "The practical exposure and real-time projects made learning easy and effective. Great support from trainers.",
  },
  {
    name: "Ankit Patel",
    image: "/images/client1.jpg",
    text: "Very well-designed course with deep insights into SAP modules. It helped me land better opportunities.",
  },
  {
    name: "Pooja Nair",
    image: "/images/client1.jpg",
    text: "Amazing learning experience with real-world case studies. The trainers are very supportive and knowledgeable.",
  },
  {
    name: "Karan Malhotra",
    image: "/images/client1.jpg",
    text: "Highly practical and career-oriented training. The sessions boosted my technical and analytical skills.",
  },
  {
    name: "Ritika Singh",
    image: "/images/client1.jpg",
    text: "Best place to learn SAP with real-time examples and expert guidance. Truly a transformative experience.",
  },
];

// duplicate for infinite loop
const loopData = [...testimonials, ...testimonials];

export default function StudentTestimonialSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden">
      
      {/* Heading */}
      <p className="text-sm text-teal-400 font-semibold text-center mb-2">
        STUDENT SAY
      </p>

      <h2 className="text-4xl font-bold text-black text-center mb-4">
        Reviews Of Students
      </h2>

      <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded"></div>

      {/* SCROLL CONTAINER */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-6 w-max ${
            isHovered ? "" : "animate-scroll"
          }`}
        >
          {loopData.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] p-6 rounded-xl bg-teal-500 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <p className="italic mb-4 text-white/90">
                "{item.text}"
              </p>

              <h3 className="font-semibold mt-4">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}