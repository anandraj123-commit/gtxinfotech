"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrainingCategory({ category }) {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!category) return null;
  
  const tabs = ["Overview", "Course Content", "Join Us"];

  return (
    <section className="bg-[#0f1f4b] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">

          {/* TABS */}
          <div className="flex justify-center gap-2 md:gap-4 bg-[var(--color-orange-500)] p-2 rounded-xl mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 md:px-6 py-2 text-sm md:text-base font-medium rounded-lg transition
                  ${activeTab === tab 
                    ? "text-white bg-[var(--color-teal-400)]" 
                    : "text-black bg-white"}
                `}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-teal-400)] rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          {/* ================= OVERVIEW ================= */}
          {activeTab === "Overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12 items-stretch"
            >
              <div className="relative h-full flex">
                <div className="absolute left-[-20px] top-10 flex flex-col gap-3 z-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="w-12 h-[2px] bg-orange-500 rotate-[-25deg]"></span>
                  ))}
                </div>

                <div className="relative rounded-3xl overflow-hidden z-0 w-full h-full bg-[var(--color-orange-500)] p-8 flex flex-col justify-center">
  
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
    Key Benefits of Training
  </h3>

  <ul className="space-y-4">
    <li className="flex items-start gap-3 text-white">
      <span className="text-xl">✔</span>
      <p>Gain industry-relevant skills with hands-on practical training</p>
    </li>

    <li className="flex items-start gap-3 text-white">
      <span className="text-xl">✔</span>
      <p>Learn from experienced professionals and certified trainers</p>
    </li>

    <li className="flex items-start gap-3 text-white">
      <span className="text-xl">✔</span>
      <p>Work on real-world projects to build strong portfolio</p>
    </li>

    <li className="flex items-start gap-3 text-white">
      <span className="text-xl">✔</span>
      <p>Get placement assistance and career guidance support</p>
    </li>

    <li className="flex items-start gap-3 text-white">
      <span className="text-xl">✔</span>
      <p>Receive certification to boost your career opportunities</p>
    </li>
  </ul>

</div>

                <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-6 translate-y-6 z-10 pointer-events-none"></div>
              </div>

              <div className="text-black flex flex-col justify-between max-h-[500px] overflow-y-auto pr-2">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {category.title}
                    </h2>
                    <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
                      ✓
                    </div>
                  </div>

                  <div
                    className="text-gray-600 text-lg leading-relaxed mb-8 [&_*]:text-inherit [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:text-lg [&_h3]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        category.description ||
                        "Our training programs are designed to provide practical knowledge and industry-relevant skills.",
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-6">
                  {(category.items || []).map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 border-2 border-orange-500 rounded-full"></span>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                {category?.joinLink && (
                  <a
                    href={category.joinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden bg-[var(--color-teal-400)] px-6 py-3 rounded-lg text-lg font-semibold text-white transition w-fit group"
                  >
                    <span className="relative z-20 group-hover:text-black transition duration-300">
                      Join Us
                    </span>
                    <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
                  </a>
                )}
              </div>
            </motion.div>
          )}

          {/* ================= COURSE CONTENT ================= */}
          {activeTab === "Course Content" && (
            <motion.div
              key="course"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                Course Materials
              </h3>

              {category.courseContent?.length > 0 ? (
                category.courseContent.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                    <p className="text-gray-800 font-medium">
                      {item.title}
                    </p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden bg-[var(--color-teal-400)] text-white px-5 py-2 rounded-lg text-sm font-semibold transition group"
                    >
                      <span className="relative z-20 group-hover:text-black transition duration-300">
                        Download
                      </span>
                      <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No course materials available.
                </p>
              )}
            </motion.div>
          )}

          {/* ================= JOIN US ================= */}
          {activeTab === "Join Us" && (
            <motion.div
              key="join"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-black mb-4">
                Enroll in {category.title}
              </h3>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ready to boost your career? Fill out the enrollment form and
                get started with expert-led training, real-world projects, and
                certification support.
              </p>

              {category?.joinLink ? (
                <a
                  href={category.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-block bg-[var(--color-teal-400)] text-white px-8 py-3 rounded-lg text-lg font-semibold transition group"
                >
                  <span className="relative z-20 group-hover:text-black transition duration-300">
                    Apply Now
                  </span>
                  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
                </a>
              ) : (
                <p className="text-red-500">Join link not available</p>
              )}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}