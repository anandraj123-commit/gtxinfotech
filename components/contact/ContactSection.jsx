"use client";

import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <section className="relative min-h-[620px] w-full overflow-hidden">
        <Image
          src="/images/Contact _ Header_Image.png"
          alt="Zisan Tech Solutions team"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative mx-auto flex min-h-[620px] max-w-[1920px] items-center px-16 py-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[750px] text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Let’s Build What’s Next{" "}
              <span className="text-teal-400">
              Connect for SAP, IT & Digital Solutions
              </span>
            </h1>

            <p className="mb-8 mt-6 max-w-lg text-gray-300">
              Experience a rise in your pursuits with our expert consulting.
              We excel in tailoring success strategies to your unique goals,
              covering diverse fields for maximum impact, professionally and
              delightfully.
            </p>

            <div className="flex gap-4">
              <button
                type="button"
                className="mt-8 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-500"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE DECORATION */}
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}

      {/*
      <div className="text-black mx-auto px-6 py-16 border-t border-gray-700 flex flex-nowrap justify-between items-center gap-8 overflow-x-auto">
        
        <div className="min-w-[250px]">
          <h2 className="text-3xl font-bold mb-2 whitespace-nowrap">
            This Is Our Result
          </h2>
          <p className="text-black whitespace-nowrap">
            How capable we are at work shines through in every endeavor.
          </p>
        </div>

        <div className="text-center min-w-[150px]">
          <h3 className="text-5xl font-bold">{counts.clients}</h3>
          <p className="text-black mt-2 whitespace-nowrap">Client Projects</p>
        </div>

        <div className="text-center min-w-[150px]">
          <h3 className="text-5xl font-bold">{counts.projects}</h3>
          <p className="text-black mt-2 whitespace-nowrap">
            Successful Projects
          </p>
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
      */}
    </>
  );
}