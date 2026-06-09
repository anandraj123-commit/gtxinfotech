"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrainingCategory({ category }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openIndexes, setOpenIndexes] = useState([0]);

  if (!category) return null;

  const tabs = ["Overview", "Course Content", "Join Us"];

  const topItems = category.description?.slice(0, 4);
  const bottomItems = category.description?.slice(4);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#0f1f4b] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8"
        >

          {/* 🔷 TABS */}
          <div className="flex justify-center gap-2 md:gap-4 bg-white p-2 rounded-xl mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                className={`px-4 md:px-6 py-2 rounded-lg transition
                  ${activeTab === tab
                    ? "text-white bg-teal-500"
                    : "text-black bg-white"
                  }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">

            {/* ================= OVERVIEW ================= */}
            {activeTab === "Overview" && (
              <motion.div
                key="overview"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20 }}
                className="space-y-6"
              >

                {/* 🔥 FULL WIDTH ACCORDION (TOP) */}
                <motion.div
                  variants={container}
                  className="space-y-4"
                >
                  {topItems?.map((itemData, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full p-4 bg-gray-100 flex justify-between items-center"
                      >
                        <span dangerouslySetInnerHTML={{ __html: itemData.title }} />
                        <motion.span
                          animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                          className="text-xl font-bold"
                        >
                          {openIndexes.includes(index) ? "−" : "+"}
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openIndexes.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="p-4 bg-white"
                            dangerouslySetInnerHTML={{
                              __html: itemData.description,
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>

                {/* 🔥 BELOW FULL WIDTH (remaining accordion) */}
                <motion.div
                  variants={container}
                  className="space-y-4"
                >
                  {bottomItems?.map((itemData, index) => {
                    const actualIndex = index + 3;

                    return (
                      <motion.div
                        key={actualIndex}
                        variants={item}
                        className="border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleAccordion(actualIndex)}
                          className="w-full p-4 bg-gray-100 flex justify-between items-center"
                        >
                          <span dangerouslySetInnerHTML={{ __html: itemData.title }} />
                          <span className="text-xl font-bold">
                            {openIndexes.includes(actualIndex) ? "−" : "+"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {openIndexes.includes(actualIndex) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="p-4 bg-white"
                              dangerouslySetInnerHTML={{
                                __html: itemData.description,
                              }}
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* 🔥 KEY BENEFITS (NOW BELOW ACCORDION) */}
                

              </motion.div>
            )}

            {/* ================= COURSE ================= */}
            {activeTab === "Course Content" && (
              <motion.div
                key="course"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-black mb-4">
                  Course Materials
                </h3>

                {category.courseContent?.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                  >
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
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ================= JOIN ================= */}
            {activeTab === "Join Us" && (
              <motion.div
                key="join"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center max-w-2xl mx-auto"
              >
                <h3 className="text-3xl font-bold text-black mb-4">
                  Enroll in {category.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to boost your career? Fill out the enrollment form and
                  get started with expert-led training.
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={category.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-block bg-[var(--color-teal-400)] text-white px-8 py-3 rounded-lg font-semibold transition group"
                >
                  <span className="relative z-20 group-hover:text-black transition duration-300">
                    Apply Now
                  </span>
                  <span className="absolute inset-0 bg-[var(--color-teal-400)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
                </motion.a>
              </motion.div>
            )}

          </AnimatePresence>

        </motion.div>
      </div>

      <motion.div variants={item} className="relative flex mt-10">
                

<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="w-full bg-white rounded-3xl p-8 md:p-12"
>
  {/* TITLE */}
  <motion.h3
    variants={item}
    className="text-2xl md:text-3xl font-bold text-black mb-10 text-center"
  >
    Key Benefits of Training
  </motion.h3>

  {/* GRID */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    {
      icon: "🚀",
      text: "Gain industry-relevant skills with hands-on practical training",
      color: "from-blue-100 to-blue-200",
    },
    {
      icon: "🎯",
      text: "Learn from experienced professionals and certified trainers",
      color: "from-purple-100 to-purple-200",
    },
    {
      icon: "💼",
      text: "Work on real-world projects to build strong portfolio",
      color: "from-green-100 to-green-200",
    },
    {
      icon: "📈",
      text: "Get placement assistance and career guidance support",
      color: "from-yellow-100 to-yellow-200",
    },
    {
      icon: "🏆",
      text: "Receive certification to boost your career opportunities",
      color: "from-pink-100 to-pink-200",
    },
  ].map((itemData, i) => (
    <motion.div
      key={i}
      variants={item}
      whileHover={{ y: -8, scale: 1.03 }}
      className={`group relative p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${itemData.color} hover:bg-white`}
    >
      {/* ICON */}
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition duration-300">
        {itemData.icon}
      </div>

      {/* TEXT */}
      <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed transition duration-300">
        {itemData.text}
      </p>
    </motion.div>
  ))}

</div>
</motion.div>

                  <motion.div
                    animate={{ x: [0, 6, 0], y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute inset-0  rounded-3xl translate-x-6 translate-y-6 z-10 pointer-events-none"
                  ></motion.div>
                </motion.div>
    </section>
  );
}