"use client";

import { motion } from "framer-motion";

export default function TrainingType({ training }) {
  if (!training) return null;

  const colors = [
    "from-orange-100 to-orange-200",
    "from-blue-100 to-blue-200",
    "from-green-100 to-green-200",
    "from-purple-100 to-purple-200",
    "from-pink-100 to-pink-200",
    "from-yellow-100 to-yellow-200",
  ];

  return (
    <section className="relative bg-[#f3f4f6] py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {training.type}
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-gray-600 text-base leading-relaxed mb-10

              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-4
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mb-3
              [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-800 [&_h3]:mb-2

              [&_p]:mb-4 [&_p]:text-gray-600

              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3
              [&_li]:mb-2 [&_li]:text-gray-700
            "
            dangerouslySetInnerHTML={{
              __html:
                training.description ||
                "Explore our professional training programs designed to enhance your skills and career growth.",
            }}
          />

          {/* FEATURES */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
  {(training.items || []).map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`p-5 rounded-xl shadow-md bg-gradient-to-br ${
        colors[i % colors.length]
      }`}
    >
      <p className="text-gray-800 font-medium">{item}</p>
    </motion.div>
  ))}
</motion.div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold"
          >
            Join Us
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
}