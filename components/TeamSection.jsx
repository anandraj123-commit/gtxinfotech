"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "Abul Mal Muhit",
      role: "CEO/Founder",
      image: "/images/team1.jpg",
    },
    {
      name: "Frank Miller",
      role: "Manager",
      image: "/images/team2.jpg",
    },
    {
      name: "Michael Jonson",
      role: "Web Developer",
      image: "/images/team3.jpg",
    },
    {
      name: "Mo. Kha. Alamgir",
      role: "SEO Specialist",
      image: "/images/team4.jpg",
    },
  ];

  return (
    <section className="bg-[#3a434d] min-h-screen py-16 px-6">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-white">
          Our <span className="text-teal-400">Team</span>
        </h2>

        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-[2px] w-20 bg-gray-500"></div>
          <div className="h-[4px] w-10 bg-teal-400"></div>
          <div className="h-[2px] w-20 bg-gray-500"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="group relative bg-[#2f3842] overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[320px] object-cover grayscale group-hover:scale-105 transition duration-300"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal-400/80 flex items-center justify-center 
                              opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex gap-4 text-white text-lg">
                  <div className="border p-2 hover:bg-white hover:text-black transition cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="border p-2 hover:bg-white hover:text-black transition cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div className="border p-2 hover:bg-white hover:text-black transition cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="border p-2 hover:bg-white hover:text-black transition cursor-pointer">
                    <FaGlobe />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-gray-300">
              <h3 className="text-xl text-white font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur necessitatibus ullam, culpa odio.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}