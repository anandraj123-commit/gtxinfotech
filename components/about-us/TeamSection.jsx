"use client";

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Liam Anderson",
    role: "CEO & Founder",
    img: "/images/team1.jpg",
  },
  {
    name: "Sylphie Young",
    role: "VP of Finance & Marketing",
    img: "/images/team2.jpg",
  },
  {
    name: "Henrik Johansson",
    role: "VP of Product Development",
    img: "/images/team3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#0e1a4d] text-white py-20 px-6 md:px-16 relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Team
        </h2>
        <p className="text-gray-300 max-w-2xl">
          Meet the driving forces behind Lunaria, the key players whose dedication
          and expertise fuel our success and innovation every day.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="relative group">
            
            {/* Image Card */}
            <div className="bg-orange-500 rounded-3xl overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[320px] object-cover"
              />
            </div>

            {/* Info Card */}
            <div className="bg-white text-black rounded-3xl p-6 pt-12 -mt-12 shadow-xl relative z-10">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500 mt-2">{member.role}</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6 text-gray-700">
                <FaLinkedinIn className="cursor-pointer hover:text-orange-500" />
                <FaFacebookF className="cursor-pointer hover:text-orange-500" />
                <FaTwitter className="cursor-pointer hover:text-orange-500" />
                <FaInstagram className="cursor-pointer hover:text-orange-500" />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -left-6 top-1/2 hidden md:block">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
      <button className="relative overflow-hidden mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg group">
  
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Collaborate with Us
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
</button>

        {/* <button className="border border-orange-500 px-8 py-3 rounded-lg text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
          See Other Members
        </button> */}
      </div>
    </section>
  );
}