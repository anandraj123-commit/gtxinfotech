"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TrainingCategory({ category }) {
  const [activeTab, setActiveTab] = useState("Overview");

  // ✅ Only first accordion open
  const [openIndexes, setOpenIndexes] = useState([0]);

  if (!category) return null;

  const tabs = ["Overview", "Course Content", "Join Us"];

  // 👉 Split accordion
  const topItems = category.description?.slice(0, 4);
  const bottomItems = category.description?.slice(4);

  // ✅ Toggle accordion
  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="bg-[#0f1f4b] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">

          {/* 🔷 TABS */}
          <div className="flex justify-center gap-2 md:gap-4 bg-orange-500 p-2 rounded-xl mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-lg transition
                  ${activeTab === tab
                    ? "text-white bg-teal-500"
                    : "text-black bg-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ================= OVERVIEW ================= */}
          {/* ================= OVERVIEW ================= */}
          {activeTab === "Overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* LEFT BOX */}
              <div className="relative flex">
                <div className="absolute left-[-20px] top-10 flex flex-col gap-3 z-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="w-12 h-[2px] bg-orange-500 rotate-[-25deg]"></span>
                  ))}
                </div>

                <div className="relative rounded-3xl overflow-hidden z-0 w-full bg-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                    Key Benefits of Training
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl">✔</span>
                      <p>Gain industry-relevant skills with hands-on practical training</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl">✔</span>
                      <p>Learn from experienced professionals and certified trainers</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl">✔</span>
                      <p>Work on real-world projects to build strong portfolio</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl">✔</span>
                      <p>Get placement assistance and career guidance support</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="text-xl">✔</span>
                      <p>Receive certification to boost your career opportunities</p>
                    </li>
                  </ul>
                </div>

                <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl translate-x-6 translate-y-6 z-10 pointer-events-none"></div>
              </div>

              {/* 🟢 RIGHT INLINE ACCORDION */}
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 mt-[25px]">
                {topItems?.map((item, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">

                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 bg-gray-100 flex justify-between items-center"
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                      <span className="text-xl font-bold">
                        {openIndexes.includes(index) ? "−" : "+"}
                      </span>
                    </button>

                    {openIndexes.includes(index) && (
                      <div
                        className="p-4 bg-white"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* 🔵 BELOW FULL WIDTH */}
              <div className="md:col-span-2 space-y-4 mt-4">
                {bottomItems?.map((item, index) => {
                  const actualIndex = index + 3;

                  return (
                    <div key={actualIndex} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleAccordion(actualIndex)}
                        className="w-full p-4 bg-gray-100 flex justify-between items-center"
                      >
                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                        <span className="text-xl font-bold">
                          {openIndexes.includes(actualIndex) ? "−" : "+"}
                        </span>
                      </button>

                      {openIndexes.includes(actualIndex) && (
                        <div
                          className="p-4 bg-white"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
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