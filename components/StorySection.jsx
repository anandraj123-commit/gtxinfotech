"use client";

import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="bg-[#0f1c4d] py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Know Our Story
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8 text-lg text-justify">
  At the core of GTX InfoTech is a commitment to empower organizations through next-generation SAP solutions and tailored IT services that align with strategic business goals, including SAP Training.
  <br /><br />
  Founded by a group of SAP experts, we leverage extensive industry knowledge to craft solutions that deliver measurable business benefits.
  In a digital-first world, our approach focuses on agility, scalability, and long-term value for our clients.
</p>
         
<Link href="/about">
      <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md text-white font-semibold">
        Learn More
      </button>
</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          {/* Border container */}
          <div className="border-2 border-orange-500 rounded-3xl p-2">
            
            {/* Image INSIDE */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute -left-10 top-10 grid grid-cols-2 gap-3">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-orange-500 rounded-full"
              ></span>
            ))}
          </div>

          {/* Decorative lines */}
          <div className="absolute -right-10 bottom-10 flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="w-12 h-[2px] bg-orange-500 rotate-45"
              ></span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}