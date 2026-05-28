"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TrainingType({ training }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (!training) return null;

  return (
    <section className="relative bg-[#f3f4f6] py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-14 rounded-3xl backdrop-blur-xl bg-white/40 shadow-xl border border-white/30"
        >
          
          {/* GLOW */}
          <motion.div
            style={{
              left: useTransform(x, (v) => `${v + 200}px`),
              top: useTransform(y, (v) => `${v + 200}px`),
            }}
            className="pointer-events-none absolute w-72 h-72  rounded-full blur-3xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="relative z-10"
          >
            
            {/* HEADING */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {training.type}
              </h2>

              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* DESCRIPTION (FIXED TYPOGRAPHY) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7 }}
              className="
                text-gray-600 text-base  leading-relaxed mb-10

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
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 mb-10"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {(training.items || []).map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    className="w-4 h-4 border-2 border-orange-500 rounded-full"
                  />
                  <p className="text-gray-700 text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl text-base font-semibold group"
            >
              <span className="relative z-10 group-hover:text-black transition duration-300">
                Join Us
              </span>

              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-[var(--color-teal-400)]"
              />
            </motion.button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}