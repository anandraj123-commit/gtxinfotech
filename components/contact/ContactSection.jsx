"use client";

import Navbar from '../../components/Navbar';
import { useEffect, useState } from "react";

export default function ContactSection() {

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    team: 0,
    revenue: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;

    const interval = setInterval(() => {
      step++;

      setCounts({
        clients: Math.min(Math.floor((160 / steps) * step), 160),
        projects: Math.min(Math.floor((340 / steps) * step), 340),
        team: Math.min(Math.floor((300 / steps) * step), 300),
        revenue: Math.min(Math.floor((82 / steps) * step), 82),
      });

      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-white">
        
        {/* ================= HERO SECTION ================= */}
        <div className=" bg-[#0b1c4a] max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Masterminds To <br /> Your Positive Goal
            </h1>

            <p className="text-gray-300 mb-8 max-w-lg">
              Experience a rise in your pursuits with our expert consulting. 
              We excel in tailoring success strategies to your unique goals, 
              covering diverse fields for maximum impact, professionally and delightfully.
            </p>

            <div className="flex gap-4">
            {/* <button className="relative overflow-hidden mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg group">
  
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Collaborate with Us
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
</button> */}

<button className="relative overflow-hidden mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg group">
  
  <span className="relative z-10 group-hover:text-black transition duration-300">
    Learn More
  </span>

  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
</button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl translate-x-6 translate-y-6 z-20"></div>

            <img
              src="/images/about-slider1.jpg"
              alt="team"
              className="rounded-2xl relative z-10 w-full"
            />

            <div className="absolute top-6 left-6 grid grid-cols-6 gap-2 opacity-40">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-orange-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="text-black max-w-7xl mx-auto px-6 py-16 border-t border-gray-700 flex flex-nowrap justify-between items-center gap-8 overflow-x-auto">
  
  {/* LEFT TEXT */}
  <div className="min-w-[250px]">
    <h2 className="text-3xl font-bold mb-2 whitespace-nowrap">
      This Is Our Result
    </h2>
    <p className="text-black whitespace-nowrap">
      How capable we are at work shines through in every endeavor.
    </p>
  </div>

  {/* STATS */}
  <div className="text-center min-w-[150px]">
    <h3 className="text-5xl font-bold">{counts.clients}</h3>
    <p className="text-black mt-2 whitespace-nowrap">Client Projects</p>
  </div>

  <div className="text-center min-w-[150px]">
    <h3 className="text-5xl font-bold">{counts.projects}</h3>
    <p className="text-black mt-2 whitespace-nowrap">Successful Projects</p>
  </div>

  <div className="text-center min-w-[150px]">
    <h3 className="text-5xl font-bold">{counts.team}+</h3>
    <p className="text-black mt-2 whitespace-nowrap">Team Members</p>
  </div>

  <div className="text-center min-w-[150px]">
    <h3 className="text-5xl font-bold">{counts.revenue}M</h3>
    <p className="text-black mt-2 whitespace-nowrap">Total Revenue</p>
  </div>

</div>

      </div>
    </>
  );
}